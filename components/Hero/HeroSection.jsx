"use client"
import React from 'react'
import Image from 'next/image'
import images from "@/img"
import {Button} from "../index"

const HeroSection = () => {
  return (
    <div className='w-[90%] mx-7 my-4 sm:my-10'>
        <div className='grid sm:grid-cols-2 gap-4 sm:gap-8 justify-items-center justify-center items-center text-center'>
            
                <Image 
                src={images.hero} 
                alt='Hero section' 
                height={500}
                />
            
            <div className='pr-8 sm:pr-24'>
                <h1 className='text-xl sm:text-3xl md:text-5xl py-1 sm:py-4'>Discover, mint, and trade NFTs seamlessly with our next-gen dapp.</h1>
                <p className='mb-8 text-xs sm:text-sm md:text-base'>Empowering creators and collectors with a seamless, cutting-edge NFT experience.</p>
                <Button btnName="Start your search" styleName='glowing' handleClick={()=>{}}/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection