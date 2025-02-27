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
  const [activeTab, setActiveTab] = useState("history");
  
  const tabs = {
    history: [images.user1, images.user2, images.user3, images.user4, images.user5],
    provenance: [images.user6, images.user7, images.user8, images.user9, images.user10],
    owner: [images.user1, images.user8, images.user2, images.user6, images.user5],
  };

  const socialIcons = [
    { icon: TiSocialFacebook, link: "#", label: "Facebook" },
    { icon: TiSocialInstagram, link: "#", label: "Instagram" },
    { icon: TiSocialLinkedin, link: "#", label: "LinkedIn" },
    { icon: TiSocialYoutube, link: "#", label: "YouTube" },
  ];

  const menuItems = [
    { icon: <BiDollar />, label: "Change Price" },
    { icon: <BiTransferAlt />, label: "Transfer" },
    { icon: <MdReportProblem />, label: "Report Abuse" },
    { icon: <MdOutlineDeleteSweep />, label: "Delete Item" },
  ]

  const timeLeft = [
    { time: "2", label: "Days" },
    { time: "22", label: "Hours" },
    { time: "45", label: "Mins" },
    { time: "12", label: "Secs" },
  ]

  const openTab = (tab) => setActiveTab(tab);

  return (
      <div className="w-full mx-auto">

        <div className="relative flex items-center justify-between">
          <p className='bg-[var(--icons-color)] text-[var(--main-bg-color)] px-3 py-1 rounded-full'>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className="cursor-pointer"
              onClick={() => setSocial(!social)}
            />

            {social && (
              <div className="absolute top-20 left-[65%] w-56 bg-primary shadow-lg rounded-md p-4">
                {socialIcons.map(({ icon: Icon, link, label }, i) => (
                <a
                  key={i}
                  href={link}
                  className="flex items-center gap-4 py-2 transition-all duration-300 ease-in hover:bg-secondary hover:text-primary rounded-md px-2"
                >
                  <Icon/> {label}
                </a>
              ))}
              </div>
            )}

            <BsThreeDots
              className="cursor-pointer"
              onClick={() => setNFTMenu(!NFTMenu)}
            />

            {NFTMenu && (
              <div className="absolute top-20 left-[65%] w-56 bg-primary shadow-lg rounded-md p-4">
                {menuItems.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-4 transition-all duration-300 ease-in py-2 hover:bg-secondary hover:text-primary rounded-md px-2"
                >
                  {icon} {label}
                </a>
              ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-4xl leading-tight">BearX #23453</h1>
          <div className="flex items-center gap-6">
          {[images.user1, images.user2].map((img, index) => (
            <div
              key={index}
              className="flex items-center gap-4 pl-8 border-l border-secondary" 
            >
              <Image src={img} alt="profile" width={40} height={40} className="rounded-full" />
              <div>
                <small>Creator</small>
                <br />
                <span className="font-extrabold">
                  Karli Costa <MdVerified />
                </span>
              </div>
            </div>
          ))}
          </div>

          <div className="my-4">
            <p className="flex items-center text-xl gap-4">
              <MdTimer /> <span>Auction ending in:</span>
            </p>

            <div className="flex gap-12 items-center">
              {timeLeft.map(({ time, label }) => (
                <div key={label} className="text-center">
                  <p className="text-4xl font-black">{time}</p>
                  <span className="font-semibold">{label}</span>
                </div>
              ))}
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
            {["history", "provenance", "owner"].map((tab) => (
              <button
                key={tab}
                className={`text-sm px-6 py-3 rounded-full font-semibold ${
                  activeTab === tab ? "bg-secondary text-primary" : "bg-dark text-secondary"
                }`}
                onClick={() => openTab(tab)}
              >
                {tab === "history" ? "Bid History" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded-md">
              <NFTTabs 
                dataTab={tabs[activeTab]} 
                icon={activeTab === "owner" ? <MdVerified /> : null} 
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default NFTDescription