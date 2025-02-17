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
    <div className="relative grid grid-cols-5 grid-rows-[repeat(6,_4rem)] gap-4 overflow-hidden transition-all duration-300 ease-in rounded-2xl shadow-[10px_10px_20px_var(--shadow-light-color)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.creatorBackground10}
          alt="background"
          fill
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110 rounded-2xl"
        />
      </div>

      {/* Like Button Section */}
      <div className="col-span-full row-start-1 row-end-2 flex justify-between z-10 ">
        <div
          className="bg-[var(--bg-color)]  flex items-center gap-2 p-4 rounded-2xl cursor-pointer m-4 overflow-hidden"
          onClick={() => setLike(!like)}
        >
          {like ? (
            <AiFillHeart className="text-2xl text-red-600" />
          ) : (
            <AiOutlineHeart className="text-2xl" />
          )}
          <span className="text-xl">24</span>
        </div>

        {/* Remaining Time */}
        <div className="bg-[var(--bg-color)] px-8 skew-x-[20deg] rounded-bl-xl -mr-2">
          <div className="transform skew-x-[-20deg]">
            <small className="font-bold">Remaining Time</small>
            <h5 className="sm:text-xl">3h : 15m : 20s</h5>
          </div>
        </div>
      </div>


      {/* Music Player Section */}
      <div className="col-span-full row-start-4 row-end-5 flex pr-8 gap-6 z-20 items-center justify-between">
        <Image src={images.musicwave} alt="music"  className="opacity-50 flex-1 w-full h-full" />
        
          <div className="p-2 flex items-center rounded-full bg-[var(--icons-color)] text-[var(--bg-color)] text-4xl cursor-pointer" onClick={() => setPlay(!play)}>
            {play ? <TbPlayerPause /> : <TbPlayerPlay />}
          </div>
      </div>

      {/* NFT Details Section */}
      <div className="col-span-full row-start-5 row-end-[-1] z-10 flex items-center justify-between bg-[var(--bg-color)] py-2 px-8 w-[90%] rounded-tr-[2rem]">
        <div>
          <h4 className="sm:text-xl font-extrabold">NFT Music #1123</h4>
          <div className="relative mt-4 border border-[var(--icons-color)] pt-2  rounded-lg h-12 cursor-pointer">
            <p className="bg-[var(--bg-color)] font-semibold px-1 sm:p-1 rounded-lg absolute -top-3 sm:-top-4 right-4">Price</p>
            <p className="font-bold ml-3">$3,221.33</p>
          </div>
        </div>

        <div className="text-end grid">
          <LikeProfile />
          <small className="mt-2">24 in stock</small>
        </div>
    </div>
</div>


  );
};

export default AudioCard;
