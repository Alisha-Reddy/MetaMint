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
    <div className="bg-white rounded-2xl shadow-md p-4 max-w-md mx-auto">
      <div className="relative">
        <Image
          src={images.creatorBackground1}
          alt="background"
          width={500}
          height={500}
          className="rounded-2xl"
        />
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <div
            className="cursor-pointer text-2xl"
            onClick={() => setLike((prev) => !prev)}
          >
            {like ? (
              <AiFillHeart className="text-red-500" />
            ) : (
              <AiOutlineHeart className="text-gray-400" />
            )}
          </div>
          <span className="text-white font-semibold">24</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center space-x-4">
        <Image src={images.musicwave} alt="music" width={200} />
        <div
          className="bg-gray-200 rounded-full p-4 cursor-pointer hover:bg-gray-300 transition"
          onClick={() => setPlay((prev) => !prev)}
        >
          {play ? (
            <TbPlayerPause className="text-2xl text-gray-600" />
          ) : (
            <TbPlayerPlay className="text-2xl text-gray-600" />
          )}
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-xl font-bold">NFT music #1123</h4>
        <div className="flex justify-between items-center mt-2">
          <div>
            <small className="text-gray-500">Price</small>
            <p className="text-lg font-semibold">$3,221.33</p>
          </div>
          <div className="flex items-center space-x-2">
            <LikeProfile />
            <small className="text-gray-500">24 in stock</small>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <small className="text-gray-500">Remaining time</small>
        <h5 className="text-lg font-bold">3h : 15m : 20s</h5>
      </div>
    </div>
  );
};

export default AudioCard;
