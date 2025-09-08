import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Title from '../component/Title';
import { shopDataContext } from '../context/ShopContext';
import Card from '../component/Card';

function Collections() {

    let [showFilter, setShowFilter] = useState(false)
    let { products, search, showSearch } = useContext(shopDataContext)
    let [filterProduct, setFilterProduct] = useState([])
    let [category, setCaterory] = useState([])
    let [subCategory, setSubCaterory] = useState([])
    let [sortType, SetSortType] = useState("relavent")

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCaterory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setCaterory(prev => [...prev, e.target.value])
        }
    }

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCaterory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setSubCaterory(prev => [...prev, e.target.value])
        }
    }

    const applyFilter = () => {
        let productCopy = products.slice()

        if (showSearch && search) {
            productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length > 0) {
            productCopy = productCopy.filter(item => category.includes(item.category))
        }
        if (subCategory.length > 0) {
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProduct(productCopy)

    }


    const sortProducts = (e) => {
        let fbCopy = filterProduct.slice()

        switch (sortType) {
            case 'low-high':
                setFilterProduct(fbCopy.sort((a, b) => (a.price - b.price)))
                break;

            case 'high-low':
                setFilterProduct(fbCopy.sort((a, b) => (b.price - a.price)))
                break;
            default:
                applyFilter()
                break;
        }

    }

    useEffect(() => {
        sortProducts()
    }, [sortType])


    useEffect(() => {
        setFilterProduct(products)
    }, [products])

    useEffect(() => {
        applyFilter()
    }, [category, subCategory, search, showSearch])





// without media queries and scrollbar
//     return (
//         <div className='w-[99vw]  min-h-[100vh] bg-[#fbecde] flex items-start flex-col md:flex-row justify-start  pt-[70px] overflow-x-hidden z-[2] pb-[110px]'>
//             <div className={`bg-[#e9d2ba] md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] ${showFilter ? "h-[45vh]" : "h-[8vh]"}  p-[20px] text-black lg:fixed `}>
//                 <p className='text-[30px] font-serif flex gap-[5px] items-center justify-start cursor-pointer mt-[-20px]' onClick={() => setShowFilter(prev => !prev)}>Curate Your Space
//                     {!showFilter && <FaChevronRight className='text-[18px] md:hidden' />}
//                     {showFilter && <FaChevronDown className='text-[18px] md:hidden' />}
//                 </p>


//                 <div className={`pl-5 py-3 mt-[-10px] bg-[#e9d2ba] ${showFilter ? "" : "hidden"} md:block`}>
//                     <p className='text-[20px] text-black font-serif mt-1 mb-3'>Explore By Decor</p>
//                     <div className='w-[230px] h-[120px] mt-19 flex items-start justify-center gap-[2px] flex-col'>
//                         <p className='flex items-center justify-center gap-[10px] text-[18px] font-serif'> <input type="checkbox" value={'ArtDecor'} className='w-3' onChange={toggleCategory} />Art Decor</p>
//                         <p className='flex items-center justify-center gap-[10px] text-[18px] font-serif'> <input type="checkbox" value={'GreenDecor'} className='w-3' onChange={toggleCategory} />Green Decor</p>
//                         <p className='flex items-center justify-center gap-[10px] text-[18px] font-serif'> <input type="checkbox" value={'AccentDecor'} onChange={toggleCategory} className='w-3' />Accent Decor</p>
                      
//                     </div>
//                 </div>
//                 <div className={`pl-5 py-3 mt-6 bg-[#e9d2ba] ${showFilter ? "" : "hidden"} md:block`}>
//                     <p className='text-[20px] text-black font-serif mt-17'>Explore By Theme</p>
//                     <div className='w-[230px] h-[120px] mt-5  flex items-start justify-center gap-[10px] flex-col'>
//                         <p className='flex items-center justify-center gap-[10px] text-[18px] font-serif'> <input type="checkbox" value={'TopWear'} className='w-3' onChange={toggleSubCategory} />Classic</p>
//                         <p className='flex items-center justify-center gap-[10px] text-[18px] font-serif'> <input type="checkbox" value={'BottomWear'} className='w-3' onChange={toggleSubCategory} />Minimalist</p>
//                         <p className='flex items-center justify-center gap-[10px] text-[18px] font-serif'> <input type="checkbox" value={'WinterWear'} className='w-3' onChange={toggleSubCategory} />Bohemian</p>
//                     </div>
//                 </div>

//             </div>
//             <div className='lg:pl-[20%] md:py-[10px] '>
//                 <div className=' md:w-[80vw] w-[100vw]  flex  justify-between flex-col lg:flex-row lg:px-[50px] '>
//                     <Title text1={"All"} text2={"Collections"} />

//                     <select name="" id="" className='font-serif bg-[#e9d2ba] w-[60%] md:w-[155px] h-[50px] px-[10px] text-black' onChange={(e) => SetSortType(e.target.value)}>
//                         <option value="relavent" className='w-[100%] h-[100%] font-serif'>Shop By Budget</option>
//                         <option value="low-high" className='w-[100%] h-[100%] font-serif'>Low - High</option>
//                         <option value="high-low" className='w-[100%] h-[100%] font-serif'>High - Low</option>
//                     </select>
//                 </div>
//                 <div className='lg:w-[80vw] md:w-[60vw]   w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]'>
//                     {
//                         filterProduct.map((item, index) => (
//                             <Card key={index} id={item._id} name={item.name} price={item.price} image={item.image1} />
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Collections


// Included midea queries and webkit scrollbar which is hidden

return (
 <div className='w-[99vw]  min-h-[100vh] bg-[#fbecde] flex items-start flex-col md:flex-row justify-start  pt-[70px] overflow-x-hidden z-[2] pb-[110px]'>

      {/* FILTER SIDEBAR */}
      <div
        className={`bg-[#e9d2ba] w-[100vw] md:w-[30vw] lg:w-[20vw] 
          md:min-h-[100vh] p-[20px] text-black 
          ${showFilter ? "h-auto" : "h-[8vh]"} 
          md:h-auto lg:fixed transition-all duration-300`}
      >
        {/* FILTER HEADER */}
        <p
          className="text-[22px] md:text-[30px] font-serif flex gap-[5px] items-center justify-between cursor-pointer mt-[-10px] md:mt-0"
          onClick={() => setShowFilter(prev => !prev)}
        >
          Curate Your Space
          <span className="md:hidden">
            {!showFilter && <FaChevronRight className="text-[18px]" />}
            {showFilter && <FaChevronDown className="text-[18px]" />}
          </span>
        </p>

        {/* FILTER BY DECOR */}
        <div className={`${showFilter ? "block" : "hidden"} md:block`}>
          <p className="text-[18px] md:text-[20px] text-black font-serif mt-3 mb-3">Explore By Decor</p>
          <div className="flex flex-col gap-3 max-h-[250px] overflow-y-auto pr-2 scrollbar-hide">
            {[
              "Art Decor",
              "Green Decor",
              "Accent Decor",
              "Chandeliers",
              "Lights",
              "Candles",
              "Mirrors",
              "Vase"
            ].map((item, index) => (
              <label key={index} className="flex items-center gap-3 text-[16px] md:text-[18px] font-serif">
                <input
                  type="checkbox"
                  value={item.replace(" ", "")}
                  className="w-4 h-4 accent-black"
                  onChange={toggleCategory}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* FILTER BY THEME */}
        <div className={`${showFilter ? "block" : "hidden"} md:block mt-6`}>
          <p className="text-[18px] md:text-[20px] text-black font-serif mb-3">Explore By Theme</p>
          <div className="flex flex-col gap-3">
            {[
              { name: "Vintage", value: "Vintage" },
              { name: "Minimalist", value: "Minimalist" },
              { name: "Bohemian", value: "Bohemian" },
              // { name: "Luxury", value: "Luxury" }
            ].map((theme, index) => (
              <label key={index} className="flex items-center gap-3 text-[16px] md:text-[18px] font-serif">
                <input
                  type="checkbox"
                  value={theme.value}
                  className="w-4 h-4 accent-black"
                  onChange={toggleSubCategory}
                />
                {theme.name}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCT LISTING */}
      <div className="w-[100vw] md:w-[70vw] lg:w-[80vw] md:ml-[30vw] lg:ml-[20vw] px-3 md:px-5 lg:px-[50px]">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
          <Title text1={"All"} text2={"Collections"} />

          <select
            className="font-serif bg-[#e9d2ba] w-[70%] md:w-[180px] h-[45px] px-3 text-black rounded-md shadow-sm"
            onChange={(e) => SetSortType(e.target.value)}
          >
            <option value="relavent">Shop By Budget</option>
            <option value="low-high">Low - High</option>
            <option value="high-low">High - Low</option>
          </select>
        </div>

        {/* PRODUCTS */}
        <div className="w-[100%] flex flex-wrap justify-center gap-[20px] md:gap-[30px] min-h-[70vh]">
          {filterProduct.map((item, index) => (
            <Card
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;