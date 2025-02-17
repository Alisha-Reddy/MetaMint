"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import images from "@/img";
import LikeProfile from "./LikeProfile";

const AudioCard = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  return (
    <div className="grid grid-cols-5 grid-rows-[repeat(6,_4rem)] gap-4 overflow-hidden transition-all duration-300 ease-in rounded-2xl shadow-md hover:shadow-lg bg-white p-4 relative">
      {/* Like & Time */}
      <div className="col-span-5 row-span-1 flex justify-between items-center z-10 p-4">
        <div 
          className="bg-gray-200 text-gray-700 flex items-center gap-2 p-4 rounded-2xl cursor-pointer hover:bg-gray-300"
          onClick={() => setLike(!like)}
        >
          {like ? (
            <AiFillHeart className="text-red-500 text-2xl" />
          ) : (
            <AiOutlineHeart className="text-gray-700 text-2xl" />
          )}
          <span className="font-semibold">24</span>
        </div>
        <div className="bg-black text-white py-2 px-10 skew-x-[35deg] rounded-bl-lg">
          <div className="-skew-x-[35deg] text-center">
            <small className="font-medium">Remaining time</small>
            <h5 className="text-lg mt-2">3h : 15m : 20s</h5>
          </div>
        </div>
      </div>

      {/* Player */}
      <div className="col-span-5 row-start-4 flex justify-center items-center gap-8 z-10 px-12">
        <Image src={images.musicwave} alt="music" width={200} />
        <div 
          className="p-6 rounded-full bg-gray-200 text-gray-700 text-2xl cursor-pointer hover:bg-gray-300"
          onClick={() => setPlay(!play)}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>

      {/* Background Image */}
      <Image 
        src={images.creatorBackground1} 
        alt="background" 
        layout="fill" 
        objectFit="cover" 
        className="col-span-5 row-span-6 rounded-2xl opacity-50" 
      />

      {/* Details */}
      <div className="col-span-5 row-start-5 flex justify-between items-center bg-black text-white p-6 w-[90%] rounded-tr-2xl z-10">
        <div>
          <h4 className="text-lg font-bold">NFT music #1123</h4>
          <div className="mt-2 flex items-center gap-2">
            <div className="border border-gray-400 p-2 rounded-lg cursor-pointer">
              <small className="bg-gray-400 text-black px-2 py-1 rounded">Price</small>
              <p className="font-bold mt-1">$3,221.33</p>
            </div>
          </div>
        </div>
        <div className="text-right grid">
          <LikeProfile />
          <small className="mt-4">24 in stock</small>
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
