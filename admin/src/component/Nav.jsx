import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

function Nav() {
    let navigate = useNavigate()
    let {serverUrl} = useContext(authDataContext)
    let {getAdmin} = useContext(adminDataContext)

    const logOut = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout", {withCredentials:true})
            console.log(result.data)
            toast.success("LogOut Successfully")
            getAdmin()
            navigate("/login")

        } catch (error) {
            console.log(error)
            toast.error("LogOut Failed")
        }
        
    }
  return (
    <div className='w-[100vw] h-[70px] bg-[#e9d2ba]/50 z-10 fixed top-0 flex  items-center justify-between px-[30px] overflow-x-hidden'>
        <div className='w-[30%]  flex items-center justify-start   gap-[10px] cursor-pointer ' onClick={()=>navigate("/")}>
        <img/>
        <h1 className='text-[25px] text-[black] font-serif'>Luxe Interiors Co.</h1>

       


        </div>
         <button className='text-[15px] border-[black] cursor-pointer bg-[#fbecde] py-[10px] px-[20px] text-black' onClick={logOut}>LogOut</button>
      
    </div>
  )
}

export default Nav
