"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import {
    MdVerified,
    MdCloudUpload,
    MdTimer,
    MdReportProblem,
    MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";
import images from "@/img" 
import { Button } from '..';
import { NFTTabs } from '.';

const NFTDescription = () => {

    const [social, setSocial] = useState(false);
    const [NFTMenu, setNFTMenu] = useState(false);
    const [history, setHistory] = useState(true);
    const [provanance, setProvanance] = useState(false);
    const [owner, setOwner] = useState(false);
  
    const historyArray = [
      images.user1,
      images.user2,
      images.user3,
      images.user4,
      images.user5,
    ];
    const provananceArray = [
      images.user6,
      images.user7,
      images.user8,
      images.user9,
      images.user10,
    ];
    const ownerArray = [
      images.user1,
      images.user8,
      images.user2,
      images.user6,
      images.user5,
    ];
  
    const openSocial = () => {
      if (!social) {
        setSocial(true);
        setNFTMenu(false);
      } else {
        setSocial(false);
      }
    };
  
    const openNFTMenu = () => {
      if (!NFTMenu) {
        setNFTMenu(true);
        setSocial(false);
      } else {
        setNFTMenu(false);
      }
    };
  
    const openTabs = (e) => {
      const btnText = e.target.innerText;
  
      if (btnText == "Bid History") {
        setHistory(true);
        setProvanance(false);
        setOwner(false);
      } else if (btnText == "Provanance") {
        setHistory(false);
        setProvanance(true);
        setOwner(false);
      }
    };
  
    const openOwmer = () => {
      if (!owner) {
        setOwner(true);
        setHistory(false);
        setProvanance(false);
      } else {
        setOwner(false);
        setHistory(true);
      }
    };

  return (
      <div className="w-full mx-auto">
        {/* //Part ONE */}
        <div className="relative flex items-center justify-between">
          <p className='bg-[var(--icons-color)] text-[var(--main-bg-color)] px-3 py-1 rounded-full'>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className="cursor-pointer"
              onClick={() => openSocial()}
            />

            {social && (
              <div className="absolute top-20 left-[65%] w-56 bg-primary shadow-lg rounded-md p-4">
                <a href="#" className="flex items-center gap-4 transition-all duration-300 ease-in py-2 hover:bg-secondary hover:text-primary rounded-md px-2">
                  <TiSocialFacebook /> Facebooke
                </a>
                <a href="#" className="flex items-center gap-4 transition-all duration-300 ease-in py-2 hover:bg-secondary hover:text-primary rounded-md px-2">
                  <TiSocialInstagram /> Instragram
                </a>
                <a href="#" className="flex items-center gap-4 transition-all duration-300 ease-in py-2 hover:bg-secondary hover:text-primary rounded-md px-2">
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-4 transition-all duration-300 ease-in py-2 hover:bg-secondary hover:text-primary rounded-md px-2">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#" className="flex items-center gap-4 transition-all duration-300 ease-in py-2 hover:bg-secondary hover:text-primary rounded-md px-2">
                  <TiSocialYoutube /> YouTube
                </a>
              </div>
            )}

            <BsThreeDots
              className="cursor-pointer"
              onClick={() => openNFTMenu()}
            />

            {NFTMenu && (
              <div className="absolute top-20 left-[65%] w-56 bg-primary shadow-lg rounded-md p-4">
                <a href="#" className="flex items-center gap-4 transition-all duration-300 ease-in py-2 hover:bg-secondary hover:text-primary rounded-md px-2">
                  <BiDollar /> Change price
                </a>
                <a href="#" className="flex items-center gap-4 transition-all duration-300 ease-in py-2 hover:bg-secondary hover:text-primary rounded-md px-2">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#" className="flex items-center gap-4 transition-all duration-300 ease-in py-2 hover:bg-secondary hover:text-primary rounded-md px-2">
                  <MdReportProblem /> Report abouse
                </a>
                <a href="#" className="flex items-center gap-4 transition-all duration-300 ease-in py-2 hover:bg-secondary hover:text-primary rounded-md px-2">
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>
        {/* //Part TWO */}
        <div className={Style.NFTDescription_box_profile}>
          <h1 className="text-4xl leading-tight">BearX #23453</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className="flex items-center gap-4">
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <span className='font-extrabold'>
                  Karli Costa <MdVerified />
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-8 border-l border-secondary">
              <Image
                src={images.user2}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Creator</small> <br />
                <span className='font-extrabold'>
                  Karli Costa <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className="my-4">
            <p className="flex items-center text-xl gap-4">
              <MdTimer /> <span>Auction ending in:</span>
            </p>

            <div className="flex gap-12 items-center">
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p className="text-4xl font-black leading-none">2</p>
                <span className="font-semibold">Days</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p className="text-4xl font-black leading-none">22</p>
                <span className="font-semibold">hours</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p className="text-4xl font-black leading-none">45</p>
                <span className="font-semibold">mins</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p className="text-4xl font-black leading-none">12</p>
                <span className="font-semibold">secs</span>
              </div>
            </div>

            <div className="grid grid-cols-4fr-1fr gap-12 items-end justify-between mt-16">
              <div
                className="border-2 border-secondary rounded-md"
              >
                <small className="text-sm bg-secondary text-primary py-2 px-4 rounded-md ml-8">Current Bid</small>
                <p className="p-4 text-xl font-bold">
                  1.000 ETH <span>( ≈ $3,221.22)</span>
                </p>
              </div>

              <span>[96 in stock]</span>
            </div>

            <div className="mt-12 flex items-center gap-12">
              <Button
                icon={<FaWallet />}
                btnName="Place a bid"
                handleClick={() => {}}
                styleName="bg-dark px-6 py-3 rounded-full text-secondary font-semibold"
              />
              <Button
                icon= {<FaPercentage />}
                btnName="Make offer"
                handleClick={() => {}}
                styleName="bg-dark px-6 py-3 rounded-full text-secondary font-semibold"
              />
            </div>

            <div className="mt-12 flex gap-4">
              <button className="text-sm px-6 py-3 bg-dark text-secondary rounded-full font-semibold" onClick={(e) => openTabs(e)}>Bid History</button>
              <button className="text-sm px-6 py-3 bg-dark text-secondary rounded-full font-semibold" onClick={(e) => openTabs(e)}>Provanance</button>
              <button className="text-sm px-6 py-3 bg-dark text-secondary rounded-full font-semibold" onClick={() => openOwmer()}>Owner</button>
            </div>

            {history && (
              <div className="mt-8 p-4 bg-gray-100 rounded-md">
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {provanance && (
              <div className="mt-8 p-4 bg-gray-100 rounded-md">
                <NFTTabs dataTab={provananceArray} />
              </div>
            )}

            {owner && (
              <div className="mt-8 p-4 bg-gray-100 rounded-md">
                <NFTTabs dataTab={ownerArray} icon={<MdVerified />} />
              </div>
            )}
          </div>
        </div>
      </div>
  )
}

export default NFTDescription