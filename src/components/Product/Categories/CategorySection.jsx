import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import UpdateCategory from './UpdateCategory'
import { useSelector } from 'react-redux'
import { FaAngleRight } from "react-icons/fa6";

const CategorySection = () => {

  const {category} = useSelector((state)=>state.category);
  console.log("category is: ", category);

  return (
    <div className='py-4 text-gray-50 '>

        <div className='flex flex-col gap-3 py-4 '>
            <h1 className='text-3xl font-semibold text-gray-200 '>Category Section</h1>
            <p className='text-sm font-serif italic'>Technology is best when it brings people together.</p>

        </div>
        
        <div className='flex flex-row gap-6 w-full  '>

          <div className='text-gray-200 flex flex-col items-center w-[25%] '>

              {
                category?.map((element,index)=>(
                  <details  key={index} className='w-full text-center flex flex-col items-center'>

                        <summary className='flex  justify-between items-center border
                            border-gray-500  px-5 py-2 border-b-4 border-b-gray-200  w-full '>
                          <div className='flex justify-between items-center gap-x-3 '>
                              <FaAngleRight className="text-2xl text-richblack-50"/>
                              <p className="font-semibold text-richblack-50">{element?.categoryName}</p>
                          </div>
                        </summary>

                        <div className='bg-gray-500 text-gray-50  xl:w-[240px] lg:w-[180px]'>
                            {
                              element?.subCategory?.map((tag,index)=>(
                                <div  key={index} className='border border-gray-200  text-left pl-7'>
                                    <h4>{tag.TagName}</h4>
                                </div>
                              ))
                            }
                        </div>
                  </details>
                ))
              }
          </div>

          <div className='flex flex-col gap-6  w-[80%] '>
            <AddCategory   />
            <UpdateCategory />
            {/* delete tag  */}
          </div>
        </div>
    
    </div>
  )
}

export default CategorySection