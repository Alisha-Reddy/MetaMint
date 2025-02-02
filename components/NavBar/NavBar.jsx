"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import {MdNotifications} from 'react-icons/md'
import {BsSearch} from "react-icons/bs"
import {CgMenuLeft, CgMenuRight} from "react-icons/cg"
import {Discover, HelpCenter, Notification, Profile, SideBar} from "./index"
import {Button} from "../index"
import images from "../../img"

const NavBar = () => {

  const [activeMenu, setActiveMenu] = useState(null)
  const [sideMenu, setSideMenu] = useState(false)

  const toggleMenu = (menuName) =>{
    setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName))
  }

  return (
    <div className='relative w-[100%] p-2 z-40'>
      <div className='w-[80%] m-auto grid grid-cols-2 justify-between items-center gap-4'>
        <div className='grid grid-cols-[1fr_2fr] items-center'> 
          <div className='w-[60%] border '>
            <Image 
            src={images.logo}
            alt = "Meta Mint"
            width={100}
            height={100}
            />
          </div>
          <div className="w-[60%] flex items-center justify-between p-2 border-2 rounded-3xl overflow-hidden">
            <input
              type="text"
              placeholder="Search NFT"
              className="bg-transparent flex-1 min-w-0 outline-none px-2"
            />
            <BsSearch className="cursor-pointer text-xl" onClick={() => {}} />
          </div>

        </div>
        <div className='grid grid-cols-[1fr_1fr_.5fr_1fr_.3fr] gap-4 items-center slef-end'>
          <div className='relative cursor-pointer'> 
            <button onClick={() => toggleMenu('discover')}> Discover</button>
            {activeMenu === 'discover' && (
              <div className='absolute px-4 py-2 shadow-[var(--box-shadow)] w-60 rounded-lg bg-[var(--main-bg-color)]'>
                <Discover />
              </div>
            )}
          </div>

          <div className='relative cursor-pointer'> 
            <button onClick={() => toggleMenu('help')}> Help</button>
            {activeMenu === 'help' && (
              <div className='absolute px-4 py-2 shadow-[var(--box-shadow)] w-60 rounded-lg bg-[var(--main-bg-color)]'> 
                <HelpCenter />
              </div>
            )}
          </div>

          <div className='relative cursor-pointer'>
            <button onClick={() => toggleMenu('notification')}> 
              <MdNotifications className='text-3xl' />
            </button>
            {activeMenu === 'notification' && (
              <div className="dropdown">
                <Notification />
              </div>
            )}
          </div>

          <div className='relative cursor-pointer'>
            <Button btnText="Create"></Button>
          </div>

          <div className='relative cursor-pointer'>
            <div className='rounded-full'> 
              <Image 
              src={images.user1} 
              alt='Profile' 
              width={40}
              onClick={() => toggleMenu('profile')} 
              className='rounded-full'
              />
            </div>
            {activeMenu === 'profile' && (
                <Profile />
            )}
          </div>

          <div className='hidden'>
            <CgMenuLeft className='cursor-pointer text-4xl' onClick={() => {setSideMenu((prev) => !prev)}} />
          </div>
        </div>
      </div>

      {
        sideMenu && (
          <div className='custom-scrollbar fixed top-0 w-96 bg-[var(--main-bg-color)] shadow-[var(--box-shadow)] h-[100vh] overflow-y-auto hidden z-40'>
            <SideBar setSideMenu={setSideMenu}/> 
          </div>
        )
      }
    </div>
  )
}

export default NavBar