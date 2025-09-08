import React from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  return (
    <div className='w-[100vw] h-[100vh] md:h-[70vh] flex items-center justify-start flex-col  bg-[#fbecde] gap-[50px] '>
        <div className='h-[8%] w-[100%] text-center mt-[70px] '>
            <Title text1={"How We"} text2={"Work"}/>
            <p className='font-serif w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-black'>Customer Care Standards – Bringing Luxury, Comfort, and Timeless Style to Your Home.</p>
        </div>
      <div className='w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap lg:gap-[50px] gap-[80px]'>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] '>
        <RiExchangeFundsLine  className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#a79581]'/>
        <p className='font-serif md:text-[25px] text-[19px] text-black'>Smooth & Secure Delivery</p>
        <p className='font-serif md:text-[18px] text-[12px] text-black text-center'>Seamless Delivery – Fast, Safe, and Stress-Free Shipping to Your Home.</p>

        </div>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] '>
        <TbRosetteDiscountCheckFilled  className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#a79581]'/>
        <p className='font-serif md:text-[25px] text-[19px] text-black'>Secure Payments</p>
        <p className='font-serif md:text-[18px] text-[12px] text-black text-center'>Shop with Peace of Mind – Safe and Secure Payment Options.</p>

        </div>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] '>
        <BiSupport  className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#a79581]'/>
        <p className='font-serif md:text-[25px] text-[19px] text-black'>Customer Care</p>
        <p className='font-serif md:text-[18px] text-[12px] text-black text-center'>Dedicated Support – Tailored Help for Your Unique Home Needs.</p>

        </div>
      </div>
    </div>
  )
}

export default OurPolicy
