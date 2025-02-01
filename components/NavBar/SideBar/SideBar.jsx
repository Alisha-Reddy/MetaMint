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
import Button from "@/components/Button/Button"

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
    <div className='sideBar'>
      <GrClose className='sideBar_closeBtn' onClick={()=>setSideMenu(false)}/>
        <div className='sideBar_box'>
          <Image
          src={images.logo}
          alt='logo'
          width={150}
          height={150}
          />
          <p>
            Discover the most outstanding articles on all topics of NFT & your own stories and share them
          </p>
          <div className='sideBar_social'>
            <a href="#">
              <TiSocialFacebook/>
            </a>
            <a href="#">
              <TiSocialLinkedin/>
            </a>
            <a href="#">
              <TiSocialTwitter/>
            </a>
            <a href="#">
              <TiSocialYoutube/>
            </a>
            <a href="#">
              <TiSocialInstagram/>
            </a>
          </div>
        </div>
        <div className='sideBar_menu'>
          <div>
            <div className='sideBar_menu_box' onClick={() => setOpenDiscover((prev) => !prev)}>
              <p>Discover</p>
              <TiArrowSortedDown/>
            </div>
            {
              openDiscover && (
                <div className='sideBar_discover'>
                  {discover.map((el, i) =>(
                    <p key={i + 1}>
                      <Link href={el.link}>
                        {el.name}
                      </Link>
                    </p>
                  ))}
                </div>
              )
            }
          </div>
          <div>
            <div className='sideBar_menu_box' onClick={() => setOpenHelp((prev) => !prev)}>
              <p>Help Center</p>
              <TiArrowSortedDown/>
            </div>
            {
              openHelp && (
                <div className='sideBar_discover'>
                  {helpCenter.map((el, i) =>(
                    <p key={i + 1}>
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
        <div className='sideBar_button'>
          <Button btnName="Create" />
          <Button btnName="COnnect Wallet" />
        </div>
    </div>
  )
}

export default SideBar