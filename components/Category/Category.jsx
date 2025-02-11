import React from 'react'
import Image from 'next/image'
import {BsCircleFill} from "react-icons/bs"
import images from "@/img"
import { Title } from '../index'

const Category = () => {
    const CategoryArray = [1, 2, 3, 4, 5, 6]
  return (
    <div className='w-[90%] mx-auto flex flex-col gap-6'>
      <Title
        heading="Browse by category"
        paragraph= "Explore the NFTs in the most featured categories."
      />
      <div className='grid sm:grid-cols-2 md:grid-cols-6 gap-8 '>{/* category */}
      
      {CategoryArray.map((el, i) =>(
        <div key={i+1} className='transition-all duration-300 ease-in rounded-2xl overflow-hidden cursor-pointer  pb-4 hover:shadow-[0px_0px_30px_blue]'>{/* category_box */}
          <Image
          src={images.creatorBackground1}
          alt= "Backgrund image"
          width={350}
          height={250}
          objectFit='cover'
          className='rounded-2xl'
          />{/* category_box_image */}
          <div className='flex items-center p-3 gap-4'>{/* category_box_title */}
              <span className='text-3xl'>
                  <BsCircleFill/>
              </span>
              <div>{/* category_box_title_info */}
                  <h4 className='font-semibold'>Entertainment</h4>
                  <small>1995 NFTS</small>
              </div>
          </div>
        </div> 
      ))}
      </div>
    </div>
  )
}

export default Category