"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
    <div> {/* Navbar */}
      <div> {/* navbar contaainer */}
        <div> {/* navbar contaainer left*/}
          <div> {/* logo*/}
            <Image 
            src={images.logo}
            alt = "Meta Mint"
            width={100}
            height={100}
            />
          </div>
          <div> {/* navbar contaainer left box input*/}
            <div>{/* navbar contaainer left box input box*/}
              <input type="text" placeholder='Search NFT' />
              <BsSearch onClick={() =>{}} /> {/* search icon*/}
            </div>
          </div>
        </div>
        <div> {/* navbar contaainer right*/}
          <div> {/* navbar contaainer right dicover*/}
            <button onClick={() => toggleMenu('discover')}> Discover</button>
            {activeMenu === 'discover' && (
              <div> {/* navbar contaainer right discover box*/}
                <Discover />
              </div>
            )}
          </div>

          <div> {/* navbar contaainer right help*/}
            <button onClick={() => toggleMenu('help')}> Help</button>
            {activeMenu === 'help' && (
              <div> {/* navbar contaainer right help box*/}
                <HelpCenter />
              </div>
            )}
          </div>

          <div> {/* navbar contaainer right notify*/}
            <button onClick={() => toggleMenu('notification')}> 
              <MdNotifications /> {/* notify*/}
              Notification
            </button>
            {activeMenu === 'notification' && (
              <div className="dropdown">
                <Notification />
              </div>
            )}
          </div>

          <div>{/* navbar container right button */}
            <Button btnText="Create"></Button>
          </div>

          <div> {/* navbar container right profile box */}
            <div> {/* navbar container right profile */}
              <Image 
              src={images.user1} 
              alt='Profile' 
              width={40}
              onClick={() => toggleMenu('profile')}
              /> {/* navbar container right profile */}
            </div>
            {activeMenu === 'profile' && (
                <Profile />
            )}
          </div>

          <div> {/* navbar container right menuBtn  */}
            <CgMenuLeft onClick={() => {setSideMenu((prev) => !prev)}} /> {/* menuIcon */}
          </div>
        </div>
      </div>

      {
        sideMenu && (
          <div> {/* sidebar*/}
            <SideBar setSideMenu={setSideMenu}/> 
          </div>
        )
      }
    </div>
  )
}

export default NavBar