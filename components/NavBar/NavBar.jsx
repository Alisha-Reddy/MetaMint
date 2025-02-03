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
      <div className='w-[95%] m-auto grid grid-cols-2 justify-between items-center gap-4'>
        <div className='grid grid-cols-[1fr_2fr] items-center'> 
          <div className='w-[50%]'>
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
        <div className='grid lg:grid-cols-[1fr_1fr_.5fr_1fr_.3fr] sm:grid-cols-[1fr_.5fr_.5fr_1fr_1fr_.5fr] gap-4 items-center'>
          <div className='relative cursor-pointer'> 
            <button onClick={() => toggleMenu('discover')}> Discover</button>
            {activeMenu === 'discover' && (
              <div className='absolute top-10 px-4 py-2 shadow-[1rem_1rem_2rem_rgba(0,0,0,0.25)] w-44 rounded-lg bg-[var(--modal-bg-color)]'>
              <Discover />
            </div>                       
            )}
          </div>

          <div className='relative cursor-pointer'> 
            <button onClick={() => toggleMenu('help')}> Help</button>
            {activeMenu === 'help' && (
              <div className='absolute top-10 px-4 py-2 shadow-[1rem_1rem_2rem_rgba(0,0,0,0.25)] w-44 rounded-lg bg-[var(--modal-bg-color)]'> 
                <HelpCenter />
              </div>
            )}
          </div>

          <div className='relative cursor-pointer flex'>
            <button onClick={() => toggleMenu('notification')}> 
              <MdNotifications className='text-2xl hover:-rotate-12 hover:text-yellow-200' />
            </button>
            {activeMenu === 'notification' && (
              <div className='absolute top-11 px-6 py-4 shadow-[1rem_1rem_2rem_rgba(0,0,0,0.25)] w-80 rounded-2xl z-50 bg-[var(--modal-bg-color)]'>
                <Notification />
              </div>
            )}
          </div>

          <div className='relative cursor-pointer'>
            <Button btnName="Create" styleName='glowing'  handleClick={()=>{}}/>
          </div>

          <div className='relative cursor-pointer'>
            <div className='rounded-full'> 
              <Image 
              src={images.user1} 
              alt='Profile' 
              width={50}
              onClick={() => toggleMenu('profile')} 
              className='rounded-full'
              />
            </div>
            {activeMenu === 'profile' && (
                  // <div className='absolute px-4 py-2 shadow-[1rem_1rem_2rem_rgba(0,0,0,0.25)] text-4 w-80 rounded-2xl -left-36 top-16 z-50 bg-[var(--modal-bg-color)]'>
              <div className='absolute top-16 right-0 px-4 py-2 text-4 shadow-[1rem_1rem_2rem_rgba(0,0,0,0.25)] w-80 rounded-2xl z-50 bg-[var(--modal-bg-color)]'>
                <Profile />
              </div>
            )}

          </div>
          <div className='sm:display lg:hidden'>
            <CgMenuLeft className='cursor-pointer text-2xl' onClick={() => {setSideMenu((prev) => !prev)}} />
          </div>
        </div>

      {
        sideMenu && (
          <div className='custom-scrollbar sm:display lg:hidden fixed top-0 left-0 w-96 bg-[var(--modal-solid-bg)] shadow-[0.8rem_1rem_5rem_0.5rem] shadow-[var(--shadow-light-color)] h-[100vh] overflow-y-auto z-40'>
            <SideBar setSideMenu={setSideMenu}/> 
          </div>
        )
      }
    </div>
      </div>
  )
}

export default NavBar