"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdShare,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import images from "@/img";
import { Button } from "..";

const AuthorProfileCard = () => {
  const [menu, setMenu] = useState({ share: false, report: false });
  const [copied, setCopied] = useState(false);

  const socialIcons = [
    { icon: TiSocialFacebook, link: "#", name: "Facebook" },
    { icon: TiSocialInstagram, link: "#", name: "Instagram" },
    { icon: TiSocialLinkedin, link: "#", name: "LinkedIn" },
    { icon: TiSocialYoutube, link: "#", name: "YouTube" },
  ];

  // Toggle between share and report menu
  const toggleState = (type) => {
    setMenu((prev) => ({ share: false, report: false, [type]: !prev[type] }));
  };

  // Copy wallet address
  const copyAddress = () => {
    const address = "0x829BD824B03D092293333..A830";
    navigator.clipboard.writeText(address);
    setCopied(true)
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="z-20 mt-10 md:mt-20 flex flex-col md:grid md:grid-cols-[1fr_4fr_1.3fr] bg-[var(--main-bg-color)] p-6 md:p-8 rounded-xl shadow-[0px_0px_10px_var(--shadow-light-color)] gap-8 md:gap-4">

      {/* Profile Image */}
      <div className="rounded-xl overflow-hidden w-full flex justify-center">
        <Image
          src={images.nftImage1}
          alt="NFT Image"
          className="rounded-xl w-40 h-40 md:w-60 md:h-60"
        />
      </div>

      {/* Profile Details */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold flex items-center justify-center md:justify-start gap-2">
          Alena Alena <MdVerified />
        </h2>

        {/* Wallet Address */}
        <div className="mt-4 flex items-center justify-center md:justify-start gap-4 relative">
          <input
            type="text"
            value="0x829BD824B03D09229333..A830"
            readOnly
            className="outline-none text-sm md:text-lg border-none bg-transparent w-1/2 md:w-1/3 text-center md:text-left"
          />

          <FiCopy
            onClick={copyAddress}
            className={`text-xl md:text-2xl transition-all duration-300 cursor-pointer 
              ${copied ? "text-gray-500" : "hover:shadow-[0px_0px_10px_var(--shadow-light-color)] hover:text-[var(--icons-color)]"}`}
          />
        </div>

        {/* Bio */}
        <p className="text-sm md:text-lg leading-snug w-full md:w-[90%] mt-3">
          Living in the metaverse, collecting JPEGs, and flipping pixels. <br />
          When I’m not minting, I’m probably dreaming in Ethereum.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start items-center gap-3 md:gap-4 text-xl md:text-2xl mt-4">
          {socialIcons.map(({ icon: Icon, link, name }, i) => (
            <a
              key={i}
              href={link}
              aria-label={name}
              className="bg-[var(--icons-color)] text-[var(--main-bg-color)] p-2 rounded-full border border-[var(--icons-color)] transition-all duration-300 hover:shadow-[0px_0px_10px_var(--shadow-light-color)] hover:bg-[var(--main-bg-color)] hover:text-[var(--icons-color)]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row items-center  md:items-start gap-4 md:gap-8 relative w-full md:w-auto ">
        <Button btnName="Follow" handleClick={() => {}} styleName="float px-4 py-1 border border-[var(--ele-hover-bg-color)] rounded-2xl bg-[var(--bg-color)]" />

        {/* Share Button */}
        <div className="float p-2 border border-[var(--ele-hover-bg-color)] rounded-full bg-[var(--bg-color)]">
          <MdShare
            onClick={() => toggleState("share")}
            className="text-xl cursor-pointer"
          />
        </div>
        

        {/* Share Menu */}
        {menu.share && (
          <div className="absolute p-2 w-48 md:w-60 shadow-[0px_0px_10px_var(--shadow-light-color)] rounded-xl bg-[var(--bg-color)] left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0 top-14 md:top-16 z-50">
            {socialIcons.map(({ icon: Icon, name }, i) => (
              <p
                key={i}
                className="flex items-center gap-2 p-2 cursor-pointer transition-all duration-300 hover:bg-[var(--icons-color)] hover:text-[var(--main-bg-color)] hover:rounded-sm"
              >
                <Icon />
                {name}
              </p>
            ))}
          </div>
        )}

        {/* Report Button */}
        <BsThreeDots
          onClick={() => toggleState("report")}
          className="text-2xl md:text-3xl cursor-pointer"
        />

        {/* Report Menu */}
        {menu.report && (
          <div className="absolute p-2 w-36 md:w-40 shadow-[0px_0px_10px_var(--shadow-light-color)] rounded-xl bg-[var(--bg-color)] left-1/2 transform -translate-x-1/2 md:left-20 md:translate-x-0 top-14 md:top-16 z-50">
            <p className="flex items-center gap-2 p-2 cursor-pointer transition-all duration-300 hover:bg-[var(--icons-color)] hover:text-[var(--main-bg-color)] hover:rounded-sm">
              <MdOutlineReportProblem />
              Report abuse
            </p>
          </div>
        )}
      </div>
    </div>

  );
};

export default AuthorProfileCard;
