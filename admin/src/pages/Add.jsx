import React, { useContext } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import upload from '../assets/upload image.jpg'
import { useState } from 'react'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../component/Loading'

function Add() {
  let [image1, setImage1] = useState(false)
  let [image2, setImage2] = useState(false)
  let [image3, setImage3] = useState(false)
  let [image4, setImage4] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("ArtDecor")
  const [price, setPrice] = useState("")
  const [subCategory, setSubCategory] = useState("Vintage")
  const [bestseller, setBestSeller] = useState(false)
  const [sizes, setSizes] = useState([])
  const [loading, setLoading] = useState(false)
  let { serverUrl } = useContext(authDataContext)

  const handleAddProduct = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      let formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))
      formData.append("image1", image1)
      formData.append("image2", image2)
      formData.append("image3", image3)
      formData.append("image4", image4)

      let result = await axios.post(serverUrl + "/api/product/addproduct", formData, { withCredentials: true })

      console.log(result.data)
      toast.success("ADD Product Successfully")
      setLoading(false)

      if (result.data) {
        setName("")
        setDescription("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice("")
        setBestSeller(false)
        setCategory("ArtDecor")
        setSubCategory("Vintage")
      }


    } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error("Add Product Failed")
    }


  }
  return (
    <div className='w-[100vw] min-h-[100vh] bg-[#fbecde] text-[black] overflow-x-hidden relative'>
      <Nav />
      <Sidebar />


      <div className='w-[82%] h-[100%] flex items-center justify-start overflow-x-hidden absolute  right-0 bottom-[5%] '>

        <form action="" onSubmit={handleAddProduct} className='w-[100%] md:w-[90%] h-[100%]  mt-[70px] flex flex-col gap-[30px] py-[90px] px-[30px] md:px-[60px]'>
          <div className='w-[400px] h-[50px] text-[25px] md:text-[40px] text-black font-serif'>Add Inventory</div>

          <div className='w-[80%] h-[130px] flex items-start justify-center flex-col mt-[20px]  gap-[10px] '>
            <p className='text-[20px] md:text-[25px]  font-serif'>
              Upload Products
            </p>
            <div className='w-[100%] h-[100%] flex items-center justify-start '>
              <label htmlFor="image1" className=' w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[black]'>
                <img src={!image1 ? upload : URL.createObjectURL(image1)} alt="" className='w-[80%] h-[80%] shadow-2xl hover:border-[black] border-[2px]' />
                <input type="file" id='image1' hidden onChange={(e) => setImage1(e.target.files[0])} required />

              </label>
              <label htmlFor="image2" className=' w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[black]'>
                <img src={!image2 ? upload : URL.createObjectURL(image2)} alt="" className='w-[80%] h-[80%] shadow-2xl hover:border-[black] border-[2px]' />
                <input type="file" id='image2' hidden onChange={(e) => setImage2(e.target.files[0])} required />

              </label>
              <label htmlFor="image3" className=' w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[black]'>
                <img src={!image3 ? upload : URL.createObjectURL(image3)} alt="" className='w-[80%] h-[80%] shadow-2xl hover:border-[black] border-[2px]' />
                <input type="file" id='image3' hidden onChange={(e) => setImage3(e.target.files[0])} required />

              </label>
              <label htmlFor="image4" className=' w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[black]'>
                <img src={!image4 ? upload : URL.createObjectURL(image4)} alt="" className='w-[80%] h-[80%] shadow-2xl hover:border-[black] border-[2px]' />
                <input type="file" id='image4' hidden onChange={(e) => setImage4(e.target.files[0])} required />

              </label>

            </div>

          </div>

          <div className='w-[80%] h-[100px] flex items-start justify-center flex-col  gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-serif'>
              Product Name
            </p>
            <input type="text" placeholder='Type here'
              className='font-serif w-[600px] max-w-[98%] h-[40px] hover:border-[black] border-[2px] cursor-pointer bg-[#e9d2ba] px-[20px] text-[18px] placeholder:text-[black]' onChange={(e) => setName(e.target.value)} value={name} required />
          </div>

          <div className='w-[80%] flex items-start justify-center flex-col  gap-[10px]'>
            <p className='text-[20px] md:text-[25px]  font-serif'>
              Product Description
            </p>
            <textarea type="text" placeholder='Type here'
              className='w-[600px] max-w-[98%] h-[100px] hover:border-[black] border-[2px] cursor-pointer bg-[#e9d2ba] px-[20px] py-[10px] text-[18px] placeholder:text-[black] font-serif' onChange={(e) => setDescription(e.target.value)} value={description} required />
          </div>

          <div className='w-[80%]  flex items-center  gap-[10px] flex-wrap '>
            <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col  gap-[10px]'>
              <p className='text-[20px] md:text-[25px]  font-serif w-[100%]'>Product Category</p>
              {/* <select name="" id="" className='bg-[#e9d2ba] w-[60%] px-[10px] py-[7px] hover:border-[black] border-[2px]' onChange={(e) => setCategory(e.target.value)}>
                <option value="ArtDecor">Art Decor</option>
                <option value="GreenDecor">Green Decor</option>
                <option value="AccentDecor">Accent Decor</option>
                <option value="Chandeliers">Chandeliers</option>
                <option value="Lights">Lights</option>
                <option value="Candles">Candles</option>
                <option value="Mirrors">Mirrors</option>
                <option value="Vase">Vase</option>

              </select> */}

              <select 
  value={category} 
  onChange={(e) => setCategory(e.target.value)}
  className='bg-[#e9d2ba] w-[60%] px-[10px] py-[7px] hover:border-[black] border-[2px]'
>
  <option value="ArtDecor">Art Decor</option>
  <option value="GreenDecor">Green Decor</option>
  <option value="AccentDecor">Accent Decor</option>
  <option value="Chandeliers">Chandeliers</option>
  <option value="Lights">Lights</option>
  <option value="Candles">Candles</option>
  <option value="Mirrors">Mirrors</option>
  <option value="Vase">Vase</option>
</select>

            </div>
            <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col  gap-[10px]'>
              <p className='text-[20px] md:text-[25px]  font-serif w-[100%]'>Sub-Category</p>
              {/* <select name="" id="" className='bg-[#e9d2ba] w-[60%] px-[10px] py-[7px] hover:border-[black] border-[2px] ' onChange={(e) => setSubCategory(e.target.value)
              }>
                <option value="Vintage">Vintage</option>
                <option value="Minimalist">Minimalist</option>
                <option value="Bohemian">Bohemian</option>

              </select> */}

              
<select 
  value={subCategory} 
  onChange={(e) => setSubCategory(e.target.value)}
  className='bg-[#e9d2ba] w-[60%] px-[10px] py-[7px] hover:border-[black] border-[2px]'
>
  <option value="Vintage">Vintage</option>
  <option value="Minimalist">Minimalist</option>
  <option value="Bohemian">Bohemian</option>
</select>

            </div>
          </div>
          <div className='w-[80%] h-[100px] flex items-start justify-center flex-col  gap-[10px]'>
            <p className='text-[20px] md:text-[25px]  font-serif'>
              Product Price
            </p>
            <input type="number" placeholder='₹ 2000'
              className='w-[600px] max-w-[98%] h-[40px] hover:border-[black] border-[2px] cursor-pointer bg-[#e9d2ba] px-[20px] text-[18px] placeholder:text-[black]' onChange={(e) => setPrice(e.target.value)} value={price} required />
          </div>


          <div className='w-[80%] h-[220px] md:h-[100px] flex items-start justify-center flex-col gap-[10px] py-[10px] md:py-[0px]'>
            <p className='text-[20px] md:text-[25px]  font-serif'>Product Size</p>

            <div className='flex items-center justify-start gap-[15px] flex-wrap'>
              <div className={`font-serif px-[20px] py-[7px] bg-[#e9d2ba] text-[18px] border-[#black] border-[2px] cursor-pointer ${sizes.includes("S") ? "bg-[#fbecde] text-black border-[black]" : ""}`} onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])}>S</div>

              <div className={`font-serif px-[20px] py-[7px]  bg-[#e9d2ba] text-[18px] border-[black] border-[2px] cursor-pointer ${sizes.includes("M") ? "bg-[#fbecde] text-black border-[black]" : ""}`} onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>M</div>

              <div className={`font-serif px-[20px] py-[7px]  bg-[#e9d2ba] text-[18px] border-[black] border-[2px] cursor-pointer ${sizes.includes("L") ? "bg-[#fbecde] text-black border-[black]" : ""}`} onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>L</div>

            </div>

          </div>

          <div className='w-[80%] flex items-center justify-start gap-[10px] mt-[20px]'>
            <input type="checkbox" id='checkbox' className='w-[25px] h-[25px] cursor-pointer' onChange={() => setBestSeller(prev => !prev)} />
            <label htmlFor="checkbox" className='text-[18px] md:text-[22px]  font-serif'>
              Add To Customer Choice
            </label>

          </div>

          <button className='w-[140px] px-[20px] py-[20px] bg-[#e9d2ba] flex items-center justify-center gap-[10px] text-black active:bg-[#fbecde] active:text-black active:border-[2px] border-[black] border-[2px]'>{loading ? <Loading /> : "Add Product"}</button>




        </form>
      </div>
    </div>
  )
}

export default Add
