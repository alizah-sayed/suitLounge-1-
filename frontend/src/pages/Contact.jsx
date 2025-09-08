// import React from 'react'
// import Title from '../component/Title'
// import contact from "../assets/contact.jpg"
// import NewLetterBox from '../component/NewLetterBox'

// function Contact() {
//   return (
//     <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col  bg-[#fbecde] gap-[50px] pt-[80px]'>
//       <Title  text1={'Your Home, Your Questions'} text2={'- Answered'}/>
//       <div className='w-[100%]  flex items-center justify-center flex-col lg:flex-row'>
//         <div className='lg:w-[50%] w-[100%] flex items-center justify-center '>
//           <img src={contact} alt=""  className='lg:w-[70%] w-[80%] shadow-md shadow-black rounded-sm'/>
//         </div>
//         <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px]  flex-col mt-[-30px]'>
//         <p className='lg:w-[80%] w-[100%] text-[black] font-serif lg:text-[18px] text-[15px]'>At Luxe Interiors Co, your satisfaction is at the heart of everything we do. Whether you’re curious about our collections, need assistance with your order, or seek design guidance to elevate your space, our team is here to offer prompt, reliable, and personalized support—crafted with the same care and elegance as our designs.</p>
//         <p className='lg:w-[80%] w-[100%]  font-serif text-[black] md:text-[16px] text-[13px]'>
//           <p>📞 Call Us
// Speak directly with our support team for quick assistance.
// </p>
//           <p>Phone: +91 9167348226</p>
//         </p>
//         <p className='lg:w-[80%] w-[100%]  font-serif text-[black] md:text-[16px] text-[13px]'>
//           <p>📧 Email Us
// We’ll get back to you within 24 hours.</p>
//           <p>Email: luxeinteriorsco@gmail.com</p>
//         </p>
//          <p className='lg:w-[80%] w-[100%]  font-serif text-[black] md:text-[16px] text-[13px]'>
//           <p>📍 Visit Us
// Come see us in person for a curated home shopping experience.</p>
//           <p>Address: 123 Luxury Street, Mumbai, India</p>
//         </p>
//          <p className='lg:w-[80%] w-[100%]  font-serif text-[black] md:text-[16px] text-[13px]'>
//           <p>🕒 Support Hours
// Mon–Sat: 9:00 AM – 7:00 PM
// </p>
//           <p>Sun: Closed</p>
//         </p>
//          <p className='lg:w-[80%] w-[100%]  font-serif text-[black] md:text-[16px] text-[13px]'>
//           <p>We look forward to assisting you and making your home shopping experience seamless, stylish, and stress-free.
// </p>
//         </p>
//         <p className='lg:w-[80%] w-[100%] text-[15px]  font-serif text-[black] lg:text-[18px] mt-[2px]'>Careers at Luxe Interiors Co.</p>
//         <p className='lg:w-[80%] w-[100%] text-[black]  font-serif md:text-[16px] text-[13px]'>Looking to build a career where passion meets purpose? Explore our open roles and join us in redefining luxury living.</p>
//         <button className='px-[30px] py-[10px] flex items-center justify-center  cursor-pointer font-serif text-[black] bg-[#e9d2ba] hover:bg-[#fbecde] border' >Explore Jobs</button>
//         </div>
//       </div>
//       <NewLetterBox/>
      
//     </div>
//   )
// }

// export default Contact

//code with proper media queries
import React from 'react'
import Title from '../component/Title'
import contact from "../assets/contact.jpg"
import NewLetterBox from '../component/NewLetterBox'

function Contact() {
  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col items-center justify-center bg-[#fbecde] gap-12 pt-20">
      
      {/* Section Title */}
      <Title text1={'Your Home, Your Questions'} text2={'- Answered'} />
      
      {/* Content Wrapper */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-16">
        
        {/* Left Image */}
        <div className="lg:w-1/2 w-full flex items-center justify-center mt-0 sm:mt-0 md:mt-0 lg:mt-[-200px]">
          <img 
            src={contact} 
            alt="Contact Luxe Interiors" 
            className="lg:w-[70%] w-[85%] shadow-md shadow-black rounded-lg"
          />
        </div>
        
        {/* Right Content */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6 mt-6 lg:mt-0">
          <p className="w-full lg:w-[85%] text-black font-serif text-[15px] md:text-[16px] lg:text-[18px]">
            At Luxe Interiors Co, your satisfaction is at the heart of everything we do. Whether you’re curious about our collections, need assistance with your order, or seek design guidance to elevate your space, our team is here to offer prompt, reliable, and personalized support—crafted with the same care and elegance as our designs.
          </p>

          <div className="space-y-2 w-full lg:w-[85%] font-serif text-black text-[13px] md:text-[15px] lg:text-[16px]">
            <p>📞 <b>Call Us</b> – Speak directly with our support team for quick assistance.</p>
            <p>Phone: +91 9167348226</p>
          </div>

          <div className="space-y-2 w-full lg:w-[85%] font-serif text-black text-[13px] md:text-[15px] lg:text-[16px]">
            <p>📧 <b>Email Us</b> – We’ll get back to you within 24 hours.</p>
            <p>Email: luxeinteriorsco@gmail.com</p>
          </div>

          <div className="space-y-2 w-full lg:w-[85%] font-serif text-black text-[13px] md:text-[15px] lg:text-[16px]">
            <p>📍 <b>Visit Us</b> – Come see us in person for a curated home shopping experience.</p>
            <p>Address: 123 Luxury Street, Mumbai, India</p>
          </div>

          <div className="space-y-2 w-full lg:w-[85%] font-serif text-black text-[13px] md:text-[15px] lg:text-[16px]">
            <p>🕒 <b>Support Hours</b></p>
            <p>Mon–Sat: 9:00 AM – 7:00 PM</p>
            <p>Sun: Closed</p>
          </div>

          <p className="w-full lg:w-[85%] font-serif text-black text-[13px] md:text-[15px] lg:text-[16px]">
            We look forward to assisting you and making your home shopping experience seamless, stylish, and stress-free.
          </p>

          <div className="w-full lg:w-[85%]">
            <p className="text-black font-serif text-[15px] md:text-[17px] lg:text-[18px] font-semibold mb-2">Careers at Luxe Interiors Co.</p>
            <p className="text-black font-serif text-[13px] md:text-[15px] lg:text-[16px] mb-4">
              Looking to build a career where passion meets purpose? Explore our open roles and join us in redefining luxury living.
            </p>
            <button className="px-6 py-3 bg-[#e9d2ba] hover:bg-[#fbecde] border border-black font-serif text-black text-[14px] md:text-[16px] transition duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      
      {/* Newsletter */}
      <NewLetterBox />
    </div>
  )
}

export default Contact
