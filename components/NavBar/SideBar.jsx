"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {GrClose} from "react-icons/gr"
import {
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialInstagram, 
  TiSocialYoutube, 
  TiArrowSortedDown,
} from "react-icons/ti"
import images from "@/img"
import { Button } from '..'

const SideBar = ({setSideMenu}) => {
  const [openDiscover, setOpenDiscover] = useState(false)
  const [openHelp, setOpenHelp] = useState(false)

  const discover = [
    { name: "Collection", link: "collection" },
    { name: "Search", link: "search" },
    { name: "Author Profile", link: "author-profile" },
    { name: "NFT Details", link: "NFT-details" },
    { name: "Account Setting", link: "account-setting" },
    { name: "Connect Wallet", link: "connect-wallet" },
    { name: "Blog", link: "blog" },
  ];

  const helpCenter = [
    { name: "About", link: "about" },
    { name: "Contact Us", link: "contact-us" },
    { name: "Sign Up", link: "sign-up" },
    { name: "Sign In", link: "sign-in" },
    { name: "Subscription", link: "subscription" },
  ];

  return (
    <div>
      <GrClose className='absolute top-12 right-8 transition-all duration-200 ease-in-out cursor-pointer shadow-[var(--box-shadow)] hover:rotate-90' onClick={()=>setSideMenu(false)}/>
        <div className='p-6 border-b-2 border-b-[var(--shadow-light-color)] '>
          <Image
          src={images.logo}
          alt='logo'
          width={100}
          height={100}
          />
          <p className='mt-4'>
            Discover the most outstanding articles on all topics of NFT & your own stories and share them
          </p>
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
        <div className='flex flex-col gap-4 p-8 uppercase font-medium'>
          <div className='cursor-pointer'>
            <div className='flex justify-between items-center' onClick={() => setOpenDiscover((prev) => !prev)}>
              <p>Discover</p>
              <TiArrowSortedDown/>
            </div>
            {
              openDiscover && (
                <div className='px-4 mt-2'>
                  {discover.map((el, i) =>(
                    <p key={i + 1} className='text-sm py-1'>
                      <Link href={el.link}>
                        {el.name}
                      </Link>
                    </p>
                  ))}
                </div>
              )
            }
          </div>
          <div className='cursor-pointer'>
            <div className='flex justify-between items-center' onClick={() => setOpenHelp((prev) => !prev)}>
              <p>Help Center</p>
              <TiArrowSortedDown/>
            </div>
            {
              openHelp && (
                <div className='px-4'>
                  {helpCenter.map((el, i) =>(
                    <p key={i + 1} className='text-sm py-1'>
                      <Link href={el.link}>
                        {el.name}
                      </Link>
                    </p>
                  ))}
                </div>
              )
            }
          </div>
        </div>
        <div className='p-8 flex items-center justify-between'>
          <Button btnName="Create" handleClick={()=>{}} />
          <Button btnName="Connect Wallet" handleClick={()=>{}} />
        </div>
    </div>
  )
}

export default SideBar