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
import { Discover, HelpCenter } from '../NavBar'

const Footer = () => {
  return (
    <div>{/* footer */}
      <div> {/* footer_box */}
        <div> {/* footer_box_social */}
          <Image
          src={images.logo}
          alt='Logo'
          height={100}
          width={100}
          />
          <p> Empowering creators and collectors with a seamless, cutting-edge NFT experience.</p>
          <div>{/* footer_social */}
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
        <div>
          {/* footer_box_discover */}
          <h3>Discover</h3>
          <Discover/>
        </div>
        <div>
          {/* footer_box_Help */}
          <h3>Help Center</h3>
          <HelpCenter/>
        </div>
        <div>
          {/* subscribe */}
          <h3>Subscribe</h3>
          <div>
            {/* subscribe_box */}
            <input type="email" placeholder='Enter your email *' />
            <RiSendPlaneFill /> {/* subscribe_box_send */}
          </div>
          <div> {/* subscribe_box_info */}
            <p>Discover, mint, and trade NFTs seamlessly with our next-gen decentralized app. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer