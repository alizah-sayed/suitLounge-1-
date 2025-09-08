import React from 'react'
import Logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import google from '../assets/google.png'
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from 'react';
import { useContext } from 'react';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import { userDataContext } from '../context/UserContext';
import Loading from '../component/Loading';

function Login() {
    let [show,setShow] = useState(false)
        let [email,setEmail] = useState("")
        let [password,setPassword] = useState("")
        let {serverUrl} = useContext(authDataContext)
        let {getCurrentUser} = useContext(userDataContext)
        let [loading,setLoading] = useState(false)

    let navigate = useNavigate()

    const handleLogin = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            let result = await axios.post(serverUrl + '/api/auth/login',{
                email,password
            },{withCredentials:true})
            console.log(result.data)
            setLoading(false)
            getCurrentUser()
            navigate("/")
            toast.success("User Login Successful")
            
        } catch (error) {
            console.log(error)
            toast.error("User Login Failed")
        }
    }
     const googlelogin = async () => {
            try {
                const response = await signInWithPopup(auth , provider)
                let user = response.user
                let name = user.displayName;
                let email = user.email
    
                const result = await axios.post(serverUrl + "/api/auth/googlelogin" ,{name , email} , {withCredentials:true})
                console.log(result.data)
                getCurrentUser()
            navigate("/")
    
            } catch (error) {
                console.log(error)
            }
            
        }
  return (
    <div className='w-[100vw] h-[100vh] bg-[#fbecde] text-[black] flex flex-col items-center justify-start'>
    <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer' onClick={()=>navigate("/")}>
    <img/>
    <h1 className='text-[22px] font-serif'>Luxe Interiors Co.</h1>
    </div>

    <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
        <span className='text-[25px] font-serif'>Login</span>
        <span className='text-[16px]'>Welcome to Luxe Interiors Co.</span>

    </div>
    <div className='max-w-[600px] w-[90%] h-[500px] bg-[#e9d2ba] border-[1px] border-[black] backdrop:blur-2xl shadow-lg flex items-center justify-center '>
        <form action="" onSubmit={handleLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
            <div className='w-[90%] h-[50px] bg-[#fbecde] flex items-center justify-center gap-[10px] py-[20px] cursor-pointer' onClick={googlelogin}>
                <img src={google} alt="" className='w-[20px]'/> Login account with Google
            </div>
            <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
             <div className='w-[40%] h-[1px] bg-[#fbecde] font-serif'></div> OR <div className='w-[40%] h-[1px] bg-[#fbecde]'></div>
            </div>
            <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]  relative'>
              
                 <input type="text" className='w-[100%] h-[50px] border-[2px] border-[black] backdrop:blur-sm shadow-lg bg-[#fbecde] placeholder-[black] px-[20px] font-serif' placeholder='Email' required  onChange={(e)=>setEmail(e.target.value)} value={email}/>
                  <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[black] backdrop:blur-sm  shadow-lg bg-[#fbecde] placeholder-[black] px-[20px] font-serif' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                  {!show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[57%]' onClick={()=>setShow(prev => !prev)}/>}
                  {show && <IoEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[57%]' onClick={()=>setShow(prev => !prev)}/>}
                  <button className='w-[100%] h-[50px] bg-[#fbecde] flex items-center justify-center mt-[20px] text-[17px] font-serif'>{loading? <Loading/> : "Login"}</button>
                  <p className='flex  gap-[10px]'>You haven't any account? <span className='text-[black] text-[17px] font-serif cursor-pointer' onClick={()=>navigate("/signup")}>Create New Account</span></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login
