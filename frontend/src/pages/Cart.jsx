import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from '../component/CartTotal';

function Cart() {
    const { products, currency, cartItem ,updateQuantity } = useContext(shopDataContext)
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData); 

  }, [cartItem]);
  return (
    <div className='w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-[#fbecde]'>
      <div className='h-[8%] w-[100%] text-center mt-[80px]'>
        <Title text1={'Shopping'} text2={'Bag'} />
      </div>

      <div className='w-[100%] h-[92%] flex flex-wrap gap-[20px]'>
        {
         cartData.map((item,index)=>{
             const productData = products.find((product) => product._id === item._id);
            
             return (
              <div key={index} className='w-[100%] h-[10%] border-t border-b  '>
                <div className='w-[100%] h-[80%] flex items-start gap-6 bg-[#e9d2ba]  py-[10px] px-[20px] relative '>
                    <img className='w-[100px] h-[100px]' src={productData.image1} alt="" />
                    <div className='flex items-start justify-center flex-col gap-[10px]'>
                    <p className='md:text-[25px] text-[20px] text-[black]'>{productData.name}</p>
                    <div className='flex items-center   gap-[20px]'>
                      <p className='text-[20px] text-[black]'>{currency} {productData.price}</p>
                      <p className='w-[40px] h-[40px] text-[16px] text-[black] 
                      bg-[#fbecde] mt-[5px] flex items-center justify-center border-[1px] border-[black]'>{item.size}</p>
                </div>
                </div>
                <input type="number" min={1} defaultValue={item.quantity} className=' md:max-w-20 max-w-10 md:px-2 md:py-2 py-[5px] px-[10px] text-[black] text-[18px] font-serif bg-[#fbecde] absolute md:top-[40%] top-[46%] left-[75%] md:left-[50%] border-[1px] border-[black]'  onChange={(e)=> (e.target.value === ' ' || e.target.value === '0') ? null  :  updateQuantity(item._id,item.size,Number(e.target.value))} />

                <RiDeleteBin6Line  className='text-[black] w-[25px] h-[25px] absolute top-[50%] md:top-[40%] md:right-[5%] right-1' onClick={()=>updateQuantity(item._id,item.size,0)}/>
                </div>
 
              </div>
             )
         })
        }
      </div>

      <div className='flex justify-start items-end my-20'>
        <div className='w-full sm:w-[450px]'>
            <CartTotal/>
            <button className='text-[18px] hover:bg-[@fbecde] cursor-pointer bg-[#e9d2ba] py-[10px] px-[50px] font-serif text-black flex items-center justify-center gap-[20px]  border-[1px] border-[black] ml-[30px] mt-[20px]' onClick={()=>{
                if (cartData.length > 0) {
      navigate("/placeorder");
    } else {
      console.log("Your cart is empty!");
    }
            }}>
               Go To Checkout
            </button>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
