"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import {LikeProfile} from "@/components"

const NFTCard = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-[14rem]">
      {NFTData.map((el, i) => (
        <div className="grid cursor-pointer transition-all duration-300 ease-in rounded-[1rem] hover:shadow-lg" key={i + 1}>
          <div>
              <div className="p-4 col-span-full row-span-full z-30 flex justify-between items-center">
                <BsImage className="text-[var(--icons-color)] text-2xl" />
                <p onClick={() => likeNFT()} className="flex items-center gap-4 text-[1.2rem] bg-[var(--icons-color)] text-[var(--main-bg-color)] px-2 py-1 rounded-2xl">
                  {like ? <AiOutlineHeart /> : <AiFillHeart />}
                  {""}
                  <span className="text-[2rem] text-[var(--icons-color)]">{likeInc + 1}</span>
                </p>
              </div>
          </div>

          <div className="col-span-full row-span-full">
            <Image
              src={el}
              alt="NFT"
              objectFit="cover"
              className="w-full rounded-[1rem]"
            />
          </div>

          <div className="flex justify-between p-4">
          <div className="leading-none">
              <LikeProfile />
              <p className="text-[2rem] font-extrabold">Clone #{i + 1}</p>
            </div>
            <small className="text-[1rem] text-gray-500">4{i + 2}</small>
          </div>

          <div className="flex justify-between items-end p-4">
            <div className="flex flex-col items-start">
              <small className="bg-[var(--icons-color)] text-[var(--main-bg-color)] px-2 py-1 rounded-md ml-4">Current Bid</small>
              <p className="border border-[var(--icons-color)] px-4 py-3 text-[1.4rem] mt-2 rounded-md">1{i + 5}.000 ETH</p>
            </div>
            <p className="flex items-center gap-2 text-[1.1rem]">
              <MdTimer /> <span>{i + 1} hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NFTCard