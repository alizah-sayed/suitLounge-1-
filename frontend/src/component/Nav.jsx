import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { userDataContext } from '../context/UserContext';
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import axios from 'axios';
import { authDataContext } from '../context/AuthContext';
import { shopDataContext } from '../context/ShopContext';
function Nav() {
    let {getCurrentUser , userData} = useContext(userDataContext)
    let {serverUrl} = useContext(authDataContext)
    let {showSearch,setShowSearch,search,setSearch,getCartCount} = useContext(shopDataContext)
    let [showProfile,setShowProfile] = useState(false)
    let navigate = useNavigate()


    const handleLogout = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout" , {withCredentials:true})
            console.log(result.data)
           
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
        
    }


//   return (
//     <div className='w-[100vw] h-[70px] bg-[#e9d2ba]/50 z-10 fixed top-0 flex  items-center justify-between px-[30px]'> 

//         <div className='w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px] '>
//             <h1 className='text-[35px] text-[black] font-serif '>Luxe Interiors Co.</h1>
//         </div>
//         <div className='w-[50%] lg:w-[40%] hidden md:flex ml-30'>
//             <ul className='flex items-center justify-center gap-[19px] font-serif text-[black] '>
//                 <li className='text-[20px] cursor-pointer' onClick={()=>navigate("/")}>Home</li>
//                 <li className='text-[20px] cursor-pointer' onClick={()=>navigate("/collection")}>Collections</li>
//                 <li className='text-[20px] cursor-pointer' onClick={()=>navigate("/about")}>About</li>
//                 <li className='text-[20px] cursor-pointer' onClick={()=>navigate("/contact")}>Contact</li>
//             </ul>
//         </div>
//         <div className='w-[30%] flex items-center justify-end gap-[20px]'>
//          {!showSearch && <IoSearchCircleOutline  className='w-[38px] h-[38px] text-[black]  cursor-pointer' onClick={()=>{setShowSearch(prev=>!prev);navigate("/collection")}}/>}
//            {showSearch && <IoSearchCircleSharp  className='w-[38px] h-[38px] text-[black]  cursor-pointer' onClick={()=>setShowSearch(prev=>!prev)}/>}
//          {!userData && <FaCircleUser className='w-[29px] h-[29px] text-[black]  cursor-pointer' onClick={()=>setShowProfile(prev=>!prev)}/>}
//          {userData && <div className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center cursor-pointer' onClick={()=>setShowProfile(prev=>!prev)}>{userData?.name.slice(0,1)}</div>}
//          <MdOutlineShoppingCart className='w-[30px] h-[30px] text-[black]  cursor-pointer hidden md:block' onClick={()=>navigate("/cart")}/>
//          <p className='absolute w-[18px] h-[18px] items-center  justify-center bg-black px-[5px] py-[2px] text-white  rounded-full text-[9px] top-[10px] right-[23px] hidden md:block'>{getCartCount()}</p>
//         </div>
//        {showSearch && <div className='w-[100%]  h-[80px] bg-[#e9d2ba]/50 absolute top-[100%] left-0 right-0 flex items-center justify-center '>
//             <input type="text" className='font-serif lg:w-[50%] w-[80%] h-[60%] bg-[#fbecde] px-[50px] placeholder:text-black text-[black] text-[18px]' placeholder='Search' onChange={(e)=>{setSearch(e.target.value)}} value={search} />
//         </div>}

//        {showProfile && <div className='absolute w-[220px] h-[150px] bg-[#e9d2ba] top-[110%] right-[4%] border-[1px] border-[black] z-10'>
//         <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-[black]'>
//             {!userData && <li className='w-[100%] hover:bg-[#2f2f2f]  px-[15px] py-[10px] cursor-pointer' onClick={()=>{
//                 navigate("/login");setShowProfile(false)
//             }}>Login</li>}
//             {userData && <li className='w-[100%] hover:bg-[#fbecde] font-serif px-[15px] py-[10px] cursor-pointer' onClick={()=>{handleLogout();setShowProfile(false)}}>LogOut</li>}
//             <li className='w-[100%] hover:bg-[#fbecde] font-serif px-[15px] py-[10px] cursor-pointer'onClick={()=>{navigate("/order");setShowProfile(false)}} >My Orders</li>
//             <li className='w-[100%] hover:bg-[#fbecde] font-serif px-[15px] py-[10px] cursor-pointer'onClick={()=>{navigate("/about");setShowProfile(false)}} >About</li>
//         </ul>

//         </div>}
//         <div className='w-[100vw] h-[90px] flex items-center justify-between px-[20px] text-[12px]
//          fixed bottom-0 left-0 bg-[#191818]   md:hidden'>
//             <button className='text-[black] flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("/")}><IoMdHome className='w-[28px] h-[28px] text-[black] md:hidden'/> Home</button>
//              <button className='text-[black] flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("collection")}><HiOutlineCollection className='w-[28px] h-[28px] text-[black] md:hidden'/> Collections</button>
//               <button className='text-[black] flex items-center justify-center flex-col gap-[2px] ' onClick={()=>navigate("/contact")}><MdContacts className='w-[28px] h-[28px] text-[black] md:hidden'/>Contact</button>
//                <button className='text-[black] flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("/cart")}><MdOutlineShoppingCart className='w-[28px] h-[28px] text-[black] md:hidden'/> Cart</button>
//                <p className='absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px] py-[2px] text-black font-semibold  rounded-full text-[9px] top-[8px] right-[18px]'>{getCartCount()}</p>

//         </div>
    
//     </div>
//   )
// }

// export default Nav



  return (
    <div className="w-full h-[70px] bg-[#e9d2ba]/50 z-20 fixed top-0 flex items-center justify-between px-4 md:px-8">

      {/* Logo / Company */}
      <div className="flex items-center gap-2 w-auto">
        <h1 className="text-[28px] md:text-[35px] text-black font-serif">Luxe Interiors Co.</h1>
      </div>

      {/* Center Menu (hidden on mobile) */}
      <div className="hidden md:flex flex-1 justify-end">
        <ul className="flex items-center gap-6 font-serif text-black mr-10">
          <li className="text-[20px] cursor-pointer" onClick={() => navigate("/")}>Home</li>
          <li className="text-[20px] cursor-pointer" onClick={() => navigate("/collection")}>Collections</li>
          <li className="text-[20px] cursor-pointer" onClick={() => navigate("/about")}>About</li>
          <li className="text-[20px] cursor-pointer" onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 w-auto">
        {/* Search Toggle */}
        {!showSearch && (
          <IoSearchCircleOutline
            className="w-[32px] h-[32px] md:w-[38px] md:h-[38px] text-black cursor-pointer"
            onClick={() => { setShowSearch(prev => !prev); navigate("/collection") }}
          />
        )}
        {showSearch && (
          <IoSearchCircleSharp
            className="w-[32px] h-[32px] md:w-[38px] md:h-[38px] text-black cursor-pointer"
            onClick={() => setShowSearch(prev => !prev)}
          />
        )}

        {/* Profile */}
        {!userData && (
          <FaCircleUser
            className="w-[26px] h-[26px] md:w-[29px] md:h-[29px] text-black cursor-pointer"
            onClick={() => setShowProfile(prev => !prev)}
          />
        )}
        {userData && (
          <div
            className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowProfile(prev => !prev)}
          >
            {userData?.name.slice(0, 1)}
          </div>
        )}

        {/* Cart (desktop only) */}
        <div className="relative hidden md:block">
          <MdOutlineShoppingCart
            className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] text-black cursor-pointer"
            onClick={() => navigate("/cart")}
          />
          <p className="absolute -top-2 -right-2 w-[18px] h-[18px] flex items-center justify-center bg-black text-white rounded-full text-[10px]">
            {getCartCount()}
          </p>
        </div>
      </div>

      {/* Search Bar (full width when active) */}
      {showSearch && (
        <div className="absolute w-full h-[70px] bg-[#e9d2ba]/70 top-[70px] left-0 flex items-center justify-center px-4">
          <input
            type="text"
            className="font-serif w-[85%] md:w-[50%] h-[45px] bg-[#fbecde] px-4 placeholder:text-black text-black text-[16px] md:text-[18px] rounded-md"
            placeholder="Search"
            onChange={(e) => { setSearch(e.target.value) }}
            value={search}
          />
        </div>
      )}

      {/* Profile Dropdown */}
      {showProfile && (
        <div className="absolute w-[200px] md:w-[220px] bg-[#e9d2ba] top-[75px] right-4 border border-black z-30 shadow-md">
          <ul className="flex flex-col text-[15px] md:text-[17px] font-serif text-black">
            {!userData && (
              <li
                className="hover:bg-[#fbecde] px-4 py-2 cursor-pointer"
                onClick={() => { navigate("/login"); setShowProfile(false) }}
              >
                Login
              </li>
            )}
            {userData && (
              <li
                className="hover:bg-[#fbecde] px-4 py-2 cursor-pointer"
                onClick={() => { handleLogout(); setShowProfile(false) }}
              >
                Logout
              </li>
            )}
            <li
              className="hover:bg-[#fbecde] px-4 py-2 cursor-pointer"
              onClick={() => { navigate("/order"); setShowProfile(false) }}
            >
              My Orders
            </li>
            <li
              className="hover:bg-[#fbecde] px-4 py-2 cursor-pointer"
              onClick={() => { navigate("/about"); setShowProfile(false) }}
            >
              About
            </li>
          </ul>
        </div>
      )}

      {/* Bottom Navigation (Mobile only) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-[65px] bg-[#e9d2ba] flex items-center justify-around text-black z-20">
        <button onClick={() => navigate("/")} className="flex flex-col items-center font-serif text-[12px]">
          <IoMdHome className="w-[24px] h-[24px]" /> Home
        </button>
        <button onClick={() => navigate("/collection")} className="flex flex-col font-serif items-center text-[12px]">
          <HiOutlineCollection className="w-[24px] h-[24px]" /> Collections
        </button>
        <button onClick={() => navigate("/contact")} className="flex flex-col font-serif items-center text-[12px]">
          <MdContacts className="w-[24px] h-[24px]" /> Contact
        </button>
        <button onClick={() => navigate("/cart")} className="relative flex flex-col items-center text-[12px]">
          <MdOutlineShoppingCart className="w-[24px] h-[24px]" /> Cart
          <span className="absolute -top-1 right-1 w-[16px] h-[16px] bg-black text-white rounded-full text-[9px] flex items-center justify-center">
            {getCartCount()}
          </span>
        </button>
      </div>
    </div>
  )
}

export default Nav
