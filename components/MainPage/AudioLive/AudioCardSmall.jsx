"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import images from "@/img";
import LikeProfile from "../../LikeProfile";

const AudioCardSmall = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative bg-[var(--bg-color)] cursor-pointer transition-all duration-300 ease-in rounded-2xl">
      
              <Image
                src={images.musicwave}
                alt="background"
                fill
                className="object-cover opacity-15 "
              />
      <div className="grid grid-cols-[2fr_5fr_1fr] items-center gap-3 bg-[var(--bg-shadow-dark-color)] p-2 rounded-xl h-32 hover:shadow-[var(--box-shadow)]">
        <div className="relative w-full pb-[100%] rounded-md overflow-hidden">
          <Image
            src={images.creatorBackground1}
            alt="music"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <div >
          <h4 className="font-bold text-center mb-2">NFT music #1142</h4>
          <div className="flex gap-4 items-center">
            <LikeProfile />
            <div className="border-[1px] border-[var(--icons-color)] text-sm w-2/5 font-semibold rounded-[0.2rem] relative">
              <small className="bg-[var(--bg-color)]  px-1 rounded-[0.2rem] absolute -top-2 right-1">
                Price
              </small>
              <p className="mt-4">1.00 ETH</p>
            </div>
          </div>
        </div>

        <div
          className="text-4xl bg-[var(--icons-color)] rounded-full text-[var(--bg-color)] p-2 cursor-pointer"
          onClick={() => setPlay(!play)}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;
