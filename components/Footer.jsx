import React from 'react'
import Image from 'next/image'
import {
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialInstagram, 
  TiSocialYoutube, 
  TiArrowSortedDown,
} from "react-icons/ti"
import {RiSendPlaneFill} from 'react-icons/ri'
import images from '@/img'
import { Discover, HelpCenter } from './NavBar'

const Footer = () => {
  return (
    <div className='w-full relative p-6'>
      <div className='w-[95%] mx-0 my-auto grid gris-cols[1fr]  sm:grid-cols-[1fr_1fr_1fr_2fr] items-start justify-between gap-12'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <Image
          src={images.logo}
          alt='Logo'
          height={100}
          width={100}
          />
          <p> Empowering creators and collectors with a seamless, cutting-edge NFT experience.</p>
            <div className='flex gap-5 text-xl items-center'>
              <a href="#" className='p-1 rounded-full transition-all duration-300 ease-in grid hover:bg-[var(--icons-color)] hover:text-[var(--modal-solid-bg)] hover:shadow-md hover:shadow-[var(--shadow-dark-color)]'>
                <TiSocialFacebook/>
              </a>
              <a href="#" className='p-1 rounded-full transition-all duration-300 ease-in grid hover:bg-[var(--icons-color)] hover:text-[var(--modal-solid-bg)] hover:shadow-md hover:shadow-[var(--shadow-dark-color)]'>
                <TiSocialLinkedin/>
              </a>
              <a href="#" className='p-1 rounded-full transition-all duration-300 ease-in grid hover:bg-[var(--icons-color)] hover:text-[var(--modal-solid-bg)] hover:shadow-md hover:shadow-[var(--shadow-dark-color)]'>
              <TiSocialTwitter/>
              </a>
              <a href="#" className='p-1 rounded-full transition-all duration-300 ease-in grid hover:bg-[var(--icons-color)] hover:text-[var(--modal-solid-bg)] hover:shadow-md hover:shadow-[var(--shadow-dark-color)]'>
                <TiSocialYoutube/>
              </a>
              <a href="#" className='p-1 rounded-full transition-all duration-300 ease-in grid hover:bg-[var(--icons-color)] hover:text-[var(--modal-solid-bg)] hover:shadow-md hover:shadow-[var(--shadow-dark-color)]'>
                <TiSocialInstagram/>
              </a>
            </div>
        </div>
        <div>
          <h1 className='font-bold text-xl'>Discover</h1>
          <Discover/>
        </div>
        <div>
          <h1 className='font-bold text-xl'>Help Center</h1>
          <HelpCenter/>
        </div>
        <div>
          <h1 className='font-bold text-xl'>Subscribe</h1>
          <div className='w-full flex justify-between items-center px-6 py-3 bg-[var(--icons-bg-color)] rounded-3xl mt-4'>
            <input type="email" placeholder='Enter your email' className='bg-transparent border-none outline-none w-[90%] text-[var(--icons-dark-color)] placeholder-[var(--icons-dark-color)]' />
            <RiSendPlaneFill className='text-[var(--icons-dark-color)] text-2xl cursor-pointer' /> 
          </div>
          <div className='px-2 py-8'>
            <p>Discover, mint, and trade NFTs seamlessly with our next-gen decentralized app. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer