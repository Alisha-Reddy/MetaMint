import React from 'react'
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import images from "@/img"

const CollectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className="bg-white mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 items-center bg-[var(--main-bg-color)] shadow-[var(--box-shadow)] rounded-xl p-4 md:p-8">
      <div className="flex flex-col items-center">
        <Image
          src={images.nftImage1}
          alt="nft image"
          width={800}
          height={800}
          className="rounded-xl"
        />

        <div className="flex gap-4 text-xl items-center justify-center mt-2">
          <a href="#" className="bg-[var(--icons-color)] border border-[var(--icons-color)] text-[var(--main-bg-color)] grid p-2 rounded-full transition duration-300 ease-in hover:bg-[var(--main-bg-color)] hover:text-[var(--icons-color)] hover:shadow-[var(--box-shadow)]">
            <TiSocialFacebook />
          </a>
          <a href="#" className="bg-[var(--icons-color)] border border-[var(--icons-color)] text-[var(--main-bg-color)] grid p-2 rounded-full transition duration-300 ease-in hover:bg-[var(--main-bg-color)] hover:text-[var(--icons-color)] hover:shadow-[var(--box-shadow)]">
            <TiSocialInstagram />
          </a>
          <a href="#" className="bg-[var(--icons-color)] border border-[var(--icons-color)] text-[var(--main-bg-color)] grid p-2 rounded-full transition duration-300 ease-in hover:bg-[var(--main-bg-color)] hover:text-[var(--icons-color)] hover:shadow-[var(--box-shadow)]">
            <TiSocialLinkedin />
          </a>
          <a href="#" className="bg-[var(--icons-color)] border border-[var(--icons-color)] text-[var(--main-bg-color)] grid p-2 rounded-full transition duration-300 ease-in hover:bg-[var(--main-bg-color)] hover:text-[var(--icons-color)] hover:shadow-[var(--box-shadow)]">
            <TiSocialTwitter />
          </a>
        </div>
      </div>

      <div className="grid self-start p-4">
        <h1 className="text-3xl leading-none">Awesome NFTs Collection</h1>
        <p className="leading-relaxed w-4/5 mt-2">
          Karafuru is home to 5,555 generative arts where colors reign
          supreme. Leave the drab reality and enter the world of Karafuru by
          Museum of Toys.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-[var(--main-bg-color)] mt-6 p-4">
          {cardArray.map((el, i) => (
            <div
              className="bg-[var(--main-bg-color)] shadow-[var(--box-shadow-2)] p-12 rounded-2xl text-center"
              key={i + 1}
            >
              <small className="block leading-9">Floor price</small>
              <p className="text-2xl leading-none">${i + 1}95,4683</p>
              <span>+ {i + 2}.11%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionProfile