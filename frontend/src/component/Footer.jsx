// import React from 'react'
// import logo from "../assets/logo.png"
// function Footer() {
//   return (
//     <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]'>
//         <div className='w-[100%] md:h-[30vh] h-[15vh]  md:mb-[0px] bg-[#fbecde] flex items-center justify-center md:px-[50px] px-[5px]'>
//             <div className='md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px]  '>
//                 <div className='flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]'>
//                     <img/>
//                     <p className='text-[19px] md:text-[20px] text-[black] font-serif'>Luxe Interiors Co.</p>
            
//                 </div>
//                 <p className='font-serif text-[15px] text-[#1e2223] hidden md:block'>Luxe Interiors Co. brings timeless elegance into every space with curated home décor that blends artistry and functionality. From statement chandeliers and handcrafted art to lush greenery and accent pieces, we design collections that transform houses into sophisticated homes.</p>
//                     <p className='font-serif text-[15px] text-[#1e2223] flex md:hidden'></p>

                
//             </div>
//             <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
//                     <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
//                         <p className='font-serif text-[19px] md:text-[20px] text-[#1e2223]'>COMPANY</p>

//                     </div>
//                     <ul>
//                          <li className='font-serif text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Home</li>
//                         <li className='font-serif text-[15px] text-[#1e2223] cursor-pointer '>About us</li>
//                         <li className='font-serif text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Delivery</li>
//                         <li className='font-serif text-[15px] text-[#1e2223] cursor-pointer'>Privacy Policy</li>
//                     </ul>
//                 </div>

//                 <div className='md:w-[25%] w-[40%]  h-[100%] flex items-center justify-center flex-col text-center '>
//                      <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
//                         <p className='text-[19px] md:text-[20px] text-[#1e2223] font-serif '>GET IN TOUCH</p>

//                     </div>
//                      <ul>
//                          <li className='font-serif text-[15px] text-[#1e2223] '>+91 9167348226</li>
//                         <li className='font-serif text-[15px] text-[#1e2223] '>contact@luxeinteriorsco.com</li>
//                         <li className='font-serif text-[15px] text-[#1e2223] hidden md:block'>+91 9167348226</li>
//                         <li className='font-serif text-[15px] text-[#1e2223] hidden md:block'>luxeinteriorsco.com</li>
//                     </ul>
//                 </div>

//         </div>
//         <div className='w-[100%] h-[1px] bg-[black]'></div>
//         <div className='font-serif w-[100%] h-[5vh] bg-[#fbecde] flex items-center justify-center'>Copyright 2025@luxeinteriorsco.com All Rights Reserved</div>
      
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <div className="w-full bg-[#e9d2ba] font-serif">
      {/* Main Footer */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:px-[50px] px-[20px] py-[30px] md:py-[40px] gap-[30px]">
        
        {/* Left - Company Info */}
        <div className="w-full md:w-1/3 flex flex-col gap-3 text-left">
          <div className="flex items-center gap-2">
            <img/>
            <p className="text-[20px] text-black -ml-2">Luxe Interiors Co.</p>
          </div>
          <p className="text-[15px] text-[#1e2223]">
            Luxe Interiors Co. brings timeless elegance into every space with curated home décor 
            that blends artistry and functionality. From statement chandeliers and handcrafted art 
            to lush greenery and accent pieces, we design collections that transform houses into 
            sophisticated homes.
          </p>
        </div>

        {/* Middle - Company Links */}
        <div className="w-full md:w-1/4 flex flex-col text-left">
          <p className="text-[20px] text-[#1e2223] mb-3">Company</p>
          <ul className="space-y-2">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Order & Shipping</li>
            <li className="cursor-pointer">T&C</li>
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div className="w-full md:w-1/4 flex flex-col text-left">
          <p className="text-[20px] text-[#1e2223] mb-3">Contact</p>
          <ul className="space-y-2">
            <li>+91 9167348226</li>
            <li>luxeinteriorsco@gmail.com</li>
            <li>luxeinteriorsco.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-black"></div>

      {/* Bottom Bar */}
      <div className="w-full py-3 text-center text-[14px] bg-[#e9d2ba]">
        © 2025 luxeinteriorsco.com | All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
