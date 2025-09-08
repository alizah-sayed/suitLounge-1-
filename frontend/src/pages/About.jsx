// import React from 'react'
// import Title from '../component/Title'
// import about from '../assets/about.jpg'
// import NewLetterBox from '../component/NewLetterBox'

// function About() {
//   return (
//     <div className=' w-[99vw] min-h-[100vh] flex items-center justify-center flex-col  bg-[#fbecde] gap-[50px] pt-[80px]'>
//       <Title text1={'The Luxe Interiors'} text2={'Journey'}/>
//       <div className='w-[100%]  flex items-center justify-center flex-col lg:flex-row'>

//         <div className='lg:w-[50%] w-[100%] flex items-center justify-center '>
//           <img src={about} alt="" className='lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm' />
//         </div>
//         <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px]  flex-col mt-[-90px]'>
//           <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px] font-serif'>
// Luxe Interiors was born from a passion for transforming houses into masterpieces of design and elegance. We believe that home décor is more than just furnishings—it’s about curating spaces that reflect comfort, sophistication, and timeless style.</p>
//           <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px] font-serif'>
// At Luxe Interiors, every piece is thoughtfully selected to bring harmony, beauty, and luxury into your home. From art décor and lighting to green accents and statement pieces, our collections blend modern aesthetics with timeless craftsmanship, offering you more than just décor—an experience of refined living.</p>
//           <p className='lg:w-[80%] w-[100%] text-[15px] text-[black] lg:text-[18px] mt-[10px] font-serif'>Our Mission</p>
//           <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px] font-serif'>
// Our mission is to redefine luxury home décor by combining curated craftsmanship, contemporary design, and unmatched quality. We aim to create spaces that inspire, comfort, and elevate everyday living—turning every corner of your home into a story of elegance and style.</p>
//         </div>
//       </div>
//       <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
//         <Title text1={'The Luxe'} text2={'Advantage'}/>
//         <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col gap-[30px] py-[40px]'>

//           <div className='lg:w-[33%] w-[90%] h-[250px] border-[#e9d2ba] rounded-4xl flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[black] backdrop-blur-[5px] bg-[#e9d2ba]'>
//             <b className='text-[25px] font-serif text-black'>Premium Standards</b>
//             <p className="font-serif">We uphold the finest quality checks, bringing you decor that blends luxury, reliability, and timeless appeal.</p>
//           </div>
//            <div className='lg:w-[33%] w-[90%] h-[250px] border-[#e9d2ba] rounded-4xl flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[black] backdrop-blur-[2px] bg-[#e9d2ba]'>
//             <b className='text-[25px] font-serif text-black'>Seamless Experience</b>
//             <p className="font-serif">
// We bring you intuitive navigation, secure checkout, and fast delivery—all in one effortless flow.            </p>
//           </div>
//            <div className='lg:w-[33%] w-[90%] h-[250px] rounded-4xl border-[#e9d2ba] flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[black] backdrop-blur-[2px] bg-[#e9d2ba]'>
//             <b className='text-[25px] font-serif text-black mt-6'>Trusted Assistance</b>
//             <p className="font-serif">
// Our dedicated support team is always ready to provide quick responses, helpful solutions, and reliable guidance whenever you need it.</p>
//           </div>
//         </div>
//       </div>
//       <NewLetterBox/>
      
//     </div>
//   )
// }

// export default About



import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import NewLetterBox from '../component/NewLetterBox'

function About() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start bg-[#fbecde] gap-12 pt-24 px-4 lg:px-20'>
      
      {/* Section Title */}
      <Title text1={'The Luxe Interiors'} text2={'Journey'}/>
       <p className='w-full lg:w-4/5 text-black text-sm md:text-base font-serif leading-relaxed text-center mt-[-50px]'>
  “Where every detail speaks of craftsmanship, comfort, and style.”
</p>


      {/* About Section */}
      <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16'>

        {/* Image */}
        <div className='w-full lg:w-1/2 flex items-center justify-center'>
          <img 
            src={about} 
            alt="About Luxe Interiors" 
            className='w-4/5 lg:w-2/3 shadow-md shadow-black rounded-md'
          />
        </div>

        {/* Text */}
        <div className='w-full lg:w-1/2 flex flex-col items-start gap-4 lg:mt-0 mt-[-20px]'>
          <p className='w-full lg:w-4/5 text-black text-sm md:text-base font-serif leading-relaxed'>
            Luxe Interiors was born from a passion for transforming houses into masterpieces of design and elegance. We believe that home décor is more than just furnishings—it’s about curating spaces that reflect comfort, sophistication, and timeless style.
          </p>
          <p className='w-full lg:w-4/5 text-black text-sm md:text-base font-serif leading-relaxed'>
            At Luxe Interiors, every piece is thoughtfully selected to bring harmony, beauty, and luxury into your home. From art décor and lighting to green accents and statement pieces, our collections blend modern aesthetics with timeless craftsmanship, offering you more than just décor—an experience of refined living.
          </p>
          <p className='w-full lg:w-4/5 text-black text-base lg:text-lg mt-2 font-serif font-semibold'>Our Mission</p>
          <p className='w-full lg:w-4/5 text-black text-sm md:text-base font-serif leading-relaxed'>
            Our mission is to redefine luxury home décor by combining curated craftsmanship, contemporary design, and unmatched quality. We aim to create spaces that inspire, comfort, and elevate everyday living—turning every corner of your home into a story of elegance and style.
          </p>
        </div>
      </div>

      {/* Luxe Advantage Section */}
      <div className='w-full flex flex-col items-center gap-8'>
        <Title text1={'The Luxe'} text2={'Advantage'}/>
        <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 py-10 mt-[-40px]'>

          {/* Card 1 */}
          <div className='w-11/12 md:w-2/3 lg:w-1/3 h-[250px] rounded-3xl bg-[#e9d2ba] backdrop-blur-sm flex flex-col items-center justify-center gap-3 px-6 py-4 text-black'>
            <b className='text-xl md:text-2xl font-serif'>Premium Standards</b>
            <p className="text-sm md:text-base font-serif text-center">
              We uphold the finest quality checks, bringing you decor that blends luxury, reliability, and timeless appeal.
            </p>
          </div>

          {/* Card 2 */}
          <div className='w-11/12 md:w-2/3 lg:w-1/3 h-[250px] rounded-3xl bg-[#e9d2ba] backdrop-blur-sm flex flex-col items-center justify-center gap-3 px-6 py-4 text-black'>
            <b className='text-xl md:text-2xl font-serif text-center'>Seamless Experience</b>
            <p className="text-sm md:text-base font-serif text-center">
              We bring you intuitive navigation, secure checkout, and fast delivery—all in one effortless flow.
            </p>
          </div>

          {/* Card 3 */}
          <div className='w-11/12 md:w-2/3 lg:w-1/3 h-[250px] rounded-3xl bg-[#e9d2ba] backdrop-blur-sm flex flex-col items-center justify-center gap-3 px-6 py-4 text-black'>
            <b className='text-xl md:text-2xl font-serif text-center'>Trusted Assistance</b>
            <p className="text-sm md:text-base font-serif text-center">
              Our dedicated support team is always ready to provide quick responses, helpful solutions, and reliable guidance whenever you need it.
            </p>
          </div>

        </div>
      </div>

      {/* Newsletter Section */}
      <NewLetterBox/>

    </div>
  )
}

export default About
