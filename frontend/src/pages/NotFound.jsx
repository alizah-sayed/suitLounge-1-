import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    let navigate = useNavigate()
  return (
    <div className='w-[100vw] h-[100vh] bg-[#fbecde] md:text-[70px] text-[30px] flex items-center justify-center text-[black] flex-col gap-[20px]'>
      404 Page Not Found
      <button className='font-serif bg-[black] px-[20px] py-[10px] text-[18px] text-[black] cursor-pointer' onClick={()=>navigate("/login")}>Login</button>
    </div>
  )
}

export default NotFound
