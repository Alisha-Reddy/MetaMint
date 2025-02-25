"use client"
import React from 'react'
import Image from 'next/image'
import images from "@/img"
import { Button } from '.'

const Brand = () => {
  return (
    <div>
      <div className="my-4 sm:my-14 grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-[5rem] items-center">
        <div>
          <Image src={images.logo} alt="brand logo" width={100} height={100} />
          <h1 className="text-[5rem] leading-[1.3] font-bold md:text-[2.5rem]">Collect, Trade & Earn Crypto with MetaMint!</h1>
          <p className="text-[1.3rem] mt-[-2rem] md:mt-[-0.5rem]">ump into the world of NFTs! Buy, sell, and discover rare digital treasures.</p>

          <div className='flex justify-between items-center mt-4 sm:mx-4'>
            <Button btnName="Create"  handleClick={()=>{}}/>
            <Button btnName="Discover"  handleClick={()=>{}}/>
          </div>
        </div>
        <div>
          <Image src={images.eran} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  )
}

export default Brand