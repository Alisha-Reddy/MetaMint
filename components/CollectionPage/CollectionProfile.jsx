import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import images from "@/img";

const socialIcons = [
  { icon: TiSocialFacebook, link: "#" },
  { icon: TiSocialInstagram, link: "#" },
  { icon: TiSocialLinkedin, link: "#" },
  { icon: TiSocialTwitter, link: "#" },
];

const CollectionProfile = () => {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 items-start shadow-[0px_0px_10px_10px_var(--shadow-light-color)] rounded-xl p-3 md:p-8">
      
      {/* Left Section - Image & Social Icons */}
      <div className="flex flex-col items-center w-full">
        <div className="w-full h-72 relative">
          <Image
            src={images.nftImage1}
            alt="NFT Collection"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl items-center justify-center mt-4">
          {socialIcons.map(({ icon: Icon, link }, i) => (
            <a
              key={i}
              href={link}
              className="bg-[var(--icons-color)] border border-[var(--icons-color)] text-[var(--main-bg-color)] grid p-2 rounded-full transition duration-300 ease-in hover:bg-[var(--main-bg-color)] hover:text-[var(--icons-color)] hover:shadow-[var(--box-shadow)]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Right Section - NFT Collection Info */}
      <div className="grid self-start sm:p-4">
        <h1 className="text-3xl font-semibold">Discover Rare NFT Collections</h1>
        <p className="leading-relaxed w-4/5 mt-2">
          Enter the world of exclusive NFTs where artistry meets blockchain technology.
          Own a piece of digital history and be part of the revolution.
        </p>

        {/* NFT Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6  mt-2 sm:mt-6 p-4">
          {[1, 2, 3, 4].map((value, i) => (
            <div
              key={i}
              className="bg-[var(--main-bg-color)] sm:shadow-[0px_0px_20px_blue] p-1 sm:p-10 rounded-2xl text-center"
            >
              <small className="block text-white">Floor Price</small>
              <p className="text-base sm:text-2xl font-bold">${value}95,4683</p>
              <span className="text-sm sm:text-base text-green-500">+ {value + 1}.11%</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CollectionProfile;
