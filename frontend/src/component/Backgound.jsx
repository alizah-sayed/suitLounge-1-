import React from 'react'
import back1 from "../assets/back1.jpg"
import back2 from "../assets/back2.jpg"
import back3 from "../assets/back3.jpg"
import back4 from "../assets/back4.jpg"


function Backgound({heroCount}) {
  
    if(heroCount === 0){
        return  <img src={back1} alt="" className='w-[100%] h-[100%]  float-left overflow-auto  object-cover'/>
    }else if(heroCount === 1){
       return  <img src={back2} alt="" className='w-[100%] h-[100%] float-left overflow-auto  object-cover'/>

    }else if(heroCount === 2){
       return  <img src={back3} alt="" className='w-[100%]  h-[100%] float-left overflow-auto  object-cover'/>

    }else if(heroCount === 3){
       return  <img src={back4} alt="" className='w-[100%] h-[100%] float-left overflow-auto  object-cover'/>
    }
   
}

export default Backgound


// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import back1 from "../assets/back1.jpg"
// import back2 from "../assets/back2.jpg"
// import back3 from "../assets/back3.jpg"
// import back4 from "../assets/back4.jpg"

// function Background({ heroCount }) {
//   const navigate = useNavigate();

//   const backgrounds = [back1, back2, back3, back4];
//   const buttonLabels = ["Shop Now", "Explore Collection", "Discover More", "Buy Now"];

//   // 👇 define function inside the component
//   const handleClick = () => {
//     navigate("/Collections"); // must match the route in App.jsx
//   };

//   return (
//     <div className="relative w-[100%] h-[100%]">
//       {/* Background image */}
//       <img
//         src={backgrounds[heroCount]}
//         alt="Background"
//         className="w-[100%] h-[100%] object-cover"
//       />

//       {/* Button overlay */}
//       <button
//         onClick={handleClick}
//         className="absolute bottom-[15%] left-[50%] -translate-x-1/2 
//         bg-[#e9d2ba] hover:bg-[#fbecde] text-black font-serif text-lg 
//         px-6 py-3 rounded-xl shadow-lg"
//       >
//         {buttonLabels[heroCount]}
//       </button>
//     </div>
//   );
// }

// export default Background;
