"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { LikeProfile } from "@/components";

const NFTCard = ({ NFTData }) => {
  const [likes, setLikes] = useState(Array(NFTData.length).fill(false));
  const [likeCounts, setLikeCounts] = useState(Array(NFTData.length).fill(21));

  const toggleLike = (index) => {
    setLikes((prevLikes) =>
      prevLikes.map((liked, i) => (i === index ? !liked : liked))
    );
    setLikeCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? count + (likes[i] ? -1 : 1) : count))
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20">
      {NFTData.map((el, i) => (
        <div
          key={i}
          className="grid cursor-pointer transition-all duration-300 ease-in rounded-xl hover:shadow-lg bg-[var(--bg-color)] overflow-hidden"
        >
          {/* Image & Like Section */}
          <div className="relative w-full h-60">
            <Image src={el} alt={`NFT ${i + 1}`} fill className="object-cover rounded-t-xl" />
            <div className="absolute top-4 left-4 flex items-center gap-2 text-xl text-white px-3 py-1">
              <BsImage />
            </div>
            <button
              onClick={() => toggleLike(i)}
              className="absolute top-4 right-4 flex items-center gap-2 text-lg bg-[var(--bg-color)] text-white px-3 py-1 rounded-full"
            >
              {likes[i] ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
              <span>{likeCounts[i]}</span>
            </button>
          </div>

          {/* NFT Details */}
          <div className="p-4 flex justify-between items-start">
            <div className="flex flex-col gap-2">
            <LikeProfile />
            <h2 className="text-2xl font-bold">Clone #{i + 1}</h2>
            </div>
            <small className="text-gray-500">4{i + 2}</small>
          </div>

          {/* Bid & Timer */}
          <div className="flex justify-between items-center p-4 pt-0">
            <div className="relative border border-[var(--icons-color)] rounded-md">
              <small className="absolute bg-[var(--bg-color)] text-white px-2 py-1 rounded-md -top-3 right-2">Current Bid</small>
              <p className=" px-4 py-2 text-lg mt-2 ">
                1{i + 5}.000 ETH
              </p>
            </div>
            <p className="flex items-center gap-2 text-lg">
              <MdTimer /> <span>{i + 1} hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
