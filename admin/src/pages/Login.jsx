import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import axios from 'axios'
import { authDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  let [show,setShow] = useState(false)
          let [email,setEmail] = useState("")
          let [password,setPassword] = useState("")
          let {serverUrl} = useContext(authDataContext)
          let {adminData , getAdmin} = useContext(adminDataContext)
          let navigate = useNavigate()
          const [loading,setLoading] = useState(false)

          const AdminLogin = async (e) => {
            setLoading(true)
            e.preventDefault()
            try {
              const result = await axios.post(serverUrl + '/api/auth/adminlogin',{email , password} , {withCredentials:true})
              console.log(result.data)
              toast.success("AdminLogin Successfully")
              getAdmin()
              navigate("/")
              setLoading(false)
            } catch (error) {
              console.log(error)
              toast.error("AdminLogin Failed")
              setLoading(false)
            }
            
          }
  return (
    <div className='w-[100vw] h-[100vh] bg-[#fbecde] text-[black] flex flex-col items-center justify-start'>
       <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer' >
       <img/>
       <h1 className='text-[22px] font-serif'>Luxe Interiors Co.</h1>
       </div>
   
       <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
           <span className='text-[25px] font-serif'>Admin's Page</span>
           <span className='text-[16px] font-serif'>Luxe Interiors Co. Admin Login</span>
   
       </div>
       <div className='max-w-[600px] w-[90%] h-[400px] bg-[#e9d2ba] border-[1px] border-[black] backdrop:blur-2xl shadow-lg flex items-center justify-center '>
           <form action="" onSubmit={AdminLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
               
               
               <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]  relative'>
                 
                    <input type="text" className='w-[100%] h-[50px] border-[2px] border-[black] backdrop:blur-sm  shadow-lg bg-[#fbecde] placeholder-[black] px-[20px] font-serif' placeholder='Email' required  onChange={(e)=>setEmail(e.target.value)} value={email}/>
                     <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[black] backdrop:blur-sm shadow-lg bg-[#fbecde] placeholder-[black] px-[20px] font-serif' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                     {!show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]' onClick={()=>setShow(prev => !prev)}/>}
                     {show && <IoEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]' onClick={()=>setShow(prev => !prev)}/>}
                     <button className='w-[100%] h-[50px] border-[2px] border-[black] bg-[#fbecde] flex items-center justify-center mt-[20px] text-[17px] font-serif'>Login</button>
                    
               </div>
           </form>
       </div>
       </div>
  )
}

export default Login
