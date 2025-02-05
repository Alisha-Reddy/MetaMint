"use client"
import React from 'react'
import Image from 'next/image'
import images from "@/img"
import {Button} from "../index"

const HeroSection = () => {
  return (
    <div className='w-[95%] sm:w-[90%] mx-12 my-auto'>{/* hroSection */}
        <div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>{/* hroSection_box */}
            <div className='pr-8 sm:pr-24'>{/* hroSection_box_left */}
                <h1 className='text-5xl sm:text-7xl'>Discover, mint, and trade NFTs seamlessly with our next-gen decentralized app.</h1>
                <p className='mb-8'>Empowering creators and collectors with a seamless, cutting-edge NFT experience.</p>
                <Button btnName="Start your search" handleClick={()=>{}}/>
            </div>
            <div>{/* hroSection_box_left */}
                <Image 
                src={images.hero} 
                alt='Hero section' 
                width={600}
                height={600}
                />
            </div>
        </div>
    </div>
  )
}

export default HeroSection