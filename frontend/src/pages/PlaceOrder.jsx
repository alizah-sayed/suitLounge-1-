import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import razorpay from '../assets/Razorpay.jpg'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '../component/Loading'

function PlaceOrder() {
    let [method,setMethod] = useState('cod')
    let navigate = useNavigate()
    const {cartItem , setCartItem , getCartAmount , delivery_fee , products } = useContext(shopDataContext)
    let {serverUrl} = useContext(authDataContext)
    let [loading ,setLoading] = useState(false)

    let [formData,setFormData] = useState({
        firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    pinCode:'',
    country:'',
    phone:''
    })

    const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({...data,[name]:value}))
    }

    const initPay = (order) =>{
        const options = {
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name:'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response)
    const {data} = await axios.post(serverUrl + '/api/order/verifyrazorpay',response,{withCredentials:true})
    if(data){
        navigate("/order")
        setCartItem({})

    }
      }}
    const rzp = new window.Razorpay(options)
    rzp.open()
   }

    
     const onSubmitHandler = async (e) => {
        
    setLoading(true)
        e.preventDefault()
    try {
      let orderItems = []
      for(const items in cartItem){
        for(const item in cartItem[items]){
          if(cartItem[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
               itemInfo.size = item
               itemInfo.quantity = cartItem[items][item]
               orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address:formData,
        items:orderItems,
        amount:getCartAmount() + delivery_fee
      }
      switch(method){
        case 'cod': 
      
        const result = await axios.post(serverUrl + "/api/order/placeorder" , orderData , {withCredentials:true})
        console.log(result.data)
        if(result.data){
            setCartItem({})
            toast.success("Order Placed")
            navigate("/order")
            setLoading(false)

        }else{
            console.log(result.data.message)
            toast.error("Order Placed Error")
             setLoading(false)
        }

        break;

        case 'razorpay':
        const resultRazorpay = await axios.post(serverUrl + "/api/order/razorpay" , orderData , {withCredentials:true})
        if(resultRazorpay.data){
          initPay(resultRazorpay.data)
           toast.success("Order Placed")
           setLoading(false)
        }

        break;




        default:
        break;

      }
    
      
    } catch (error) {
      console.log(error)
    
    }
     }
  return (
    <div className='w-[100vw] min-h-[100vh] bg-[#fbecde] flex items-center justify-center flex-col md:flex-row gap-[50px] relative'>
        <div className='lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center  lg:mt-[0px] mt-[90px] '>
            <form action="" onSubmit={onSubmitHandler} className='lg:w-[70%] w-[95%] lg:h-[70%] h-[100%]'>
        <div className='py-[10px]'>
        <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>

         <input type="text" placeholder='First name' className='w-[48%] h-[50px] font-serif bg-[#e9d2ba] placeholder:text-[black] text-[18px] px-[20px] shadow-sm shadow-[black]'required  onChange={onChangeHandler} name='firstName' value={formData.firstName}/>

          <input type="text" placeholder='Last name' className='w-[48%] h-[50px] font-serif bg-[#e9d2ba] shadow-sm shadow-[black] placeholder:text-[black] text-[18px] px-[20px]' required onChange={onChangeHandler} name='lastName' value={formData.lastName} />
        </div>

        <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
          <input type="email" placeholder='Email address' className='w-[100%] h-[50px] font-serif bg-[#e9d2ba] shadow-sm shadow-[black] placeholder:text-[black] text-[18px] px-[20px]'required onChange={onChangeHandler} name='email' value={formData.email} />
         
        </div>
        <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
          <input type="text" placeholder='Street' className='w-[100%] h-[50px] font-serif bg-[#e9d2ba] shadow-sm shadow-[black] placeholder:text-[black] text-[18px] px-[20px]' required onChange={onChangeHandler} name='street' value={formData.street} />
         
        </div>
        <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
          <input type="text" placeholder='City' className='w-[48%] h-[50px] font-serif bg-[#e9d2ba] shadow-sm shadow-[black] placeholder:text-[black] text-[18px] px-[20px]' required onChange={onChangeHandler} name='city' value={formData.city} />
          <input type="text" placeholder='State' className='w-[48%] h-[50px] font-serif bg-[#e9d2ba] shadow-sm shadow-[black] placeholder:text-[black] text-[18px] px-[20px]' required onChange={onChangeHandler} name='state' value={formData.state} />
        </div>
        <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
          <input type="text" placeholder='Pincode' className='w-[48%] h-[50px] font-serif bg-[#e9d2ba] shadow-sm shadow-[black] placeholder:text-[black] text-[18px] px-[20px]' required onChange={onChangeHandler} name='pinCode' value={formData.pinCode} />
          <input type="text" placeholder='Country' className='w-[48%] h-[50px] font-serif bg-[#e9d2ba] shadow-sm shadow-[black] placeholder:text-[black] text-[18px] px-[20px]' required onChange={onChangeHandler} name='country' value={formData.country} />
        </div>
         <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
          <input type="text" placeholder='Phone' className='w-[100%] h-[50px] font-serif bg-[#e9d2ba] shadow-sm shadow-[black] placeholder:text-[black] text-[18px] px-[20px]' required onChange={onChangeHandler} name='phone' value={formData.phone} />
         
        </div>
        <div>
          <button type='submit' className='text-[20px] hover:bg-[#fbecde] cursor-pointer bg-[#e9d2ba] py-[10px] px-[50px] absolute font-serif text-black flex items-center justify-center gap-[20px]  lg:right-[18%] bottom-[7%] right-[25%] border-[1px] border-[black] ml-[30px] mt-[20px]' >{loading? <Loading/> : "Place Order"}</button>
         </div> 
            </form>
        </div>
         <div className='lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px] '>
            <div className='lg:w-[70%] w-[90%] lg:h-[70%] h-[100%]  flex items-center justify-center gap-[10px] flex-col'>
                <CartTotal/>
                <div className='py-[10px]'>
        <Title text1={'MODE OF'} text2={'PAYMENT'}/>
        </div>
        <div className='w-[100%] h-[30vh] lg:h-[100px] flex items-start mt-[20px] lg:mt-[0px] justify-center gap-[50px]'>
        <button onClick={()=>setMethod('razorpay')} className={`w-[150px] h-[50px] ${method === 'razorpay' ? 'border-[5px] border-blue-900' : ''}`}> <img src={razorpay} className='w-[100%] h-[100%] object-fill' alt="" /></button>
        <button onClick={()=>setMethod('cod')} className={`w-[200px] h-[50px] bg-[#e9d2ba] text-[17px] px-[20px] hover:bg-[#fbecde] text-[black] font-serif ${method === 'cod' ? 'border-[1px] border-[black]' : ''}`}>Cash On Delivery</button>
        </div>
            </div>
        </div>
      
    </div>
  )
}

export default PlaceOrder



