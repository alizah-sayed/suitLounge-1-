import React from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { useState } from 'react'
import { useContext } from 'react'
import { authDataContext } from '../context/AuthContext'
import { useEffect } from 'react'
import axios from 'axios'

function Home() {
    const [totalProducts, setTotalProducts] = useState(0)
  const [totalOrders, setTotalOrders] = useState(0)
  
  const { serverUrl } = useContext(authDataContext)

 const fetchCounts = async () => {
    try {
      const products = await axios.get(`${serverUrl}/api/product/list`, {} ,{withCredentials:true})
      setTotalProducts(products.data.length)

      const orders = await axios.post(`${serverUrl}/api/order/list`, {} ,{withCredentials:true})
      setTotalOrders(orders.data.length)
    } catch (err) {
      console.error("Failed to fetch counts", err)
    }
  }

   useEffect(() => {
    fetchCounts()
  }, [])
  return (
   
    <div className='w-[100vw] h-[100vh] bg-[#fbecde] text-[black] relative'>
       <Nav/>
       <Sidebar/>

       <div className='w-[70vw] h-[100vh] absolute left-[25%] flex items-Start justify-start flex-col  gap-[40px] py-[100px]'>
         <h1 className='text-[35px] text-[black] font-serif'>Luxe Interiors Co. Admin Panel</h1>
         <div className='flex items-center justify-start gap-[50px] flex-col md:flex-row'>
          <div  className='text-[black] w-[400px] max-w-[90%] h-[200px] bg-[#e9d2ba]/50 flex items-center justify-center flex-col gap-[20px] shadow-sm shadow-black backdrop:blur-lg  md:text-[25px] text-[20px] border-[1px] font-serif border-[black]'>Total No. of Products : <span className='px-[20px] py-[10px] bg-[#fbecde] flex items-center justify-center border-[1px] border-[black]'>{totalProducts}</span></div>
          <div  className='text-[black] w-[400px] max-w-[90%] h-[200px] bg-[#e9d2ba]/50 flex items-center justify-center flex-col gap-[20px] shadow-sm shadow-black backdrop:blur-lg  md:text-[25px] text-[20px] border-[1px] font-serif border-[black]'>Total No. of Orders : <span className='px-[20px] py-[10px] bg-[#fbecde] flex items-center justify-center border-[1px] border-[black]'>{totalOrders}</span></div>

         </div>
       </div>

      
    </div>
  )
}

export default Home
