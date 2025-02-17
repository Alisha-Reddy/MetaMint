"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import images from "@/img";
import LikeProfile from "./LikeProfile";

const AudioCardSmall = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="cursor-pointer transition-all duration-300 ease-in">
      <div className="grid grid-cols-[2fr_5fr_1fr] items-center gap-5 bg-[var(--bg-shadow-dark-color)] p-2 rounded-xl h-32 hover:shadow-[var(--box-shadow)]">
        <Image
          src={images.creatorBackground1}
          alt="music"
          width={100}
          height={100}
          className="rounded-md"
        />

        <div>
          <h4>NFT music #1142</h4>
          <div className="flex gap-4">
            <LikeProfile />
            <div className="border-[1px] border-[var(--icons-color)] text-sm w-2/5 font-semibold rounded-[0.2rem]">
              <small className="bg-[var(--icons-color)] text-[var(--main-bg-color)] px-1 rounded-[0.2rem]">
                Price
              </small>
              <p className="mt-4">1.00 ETH</p>
            </div>
          </div>
        </div>

        <div
          className="text-4xl bg-[var(--icons-color)] rounded-full text-[var(--main-bg-color)] p-4 cursor-pointer"
          onClick={() => setPlay((prev) => !prev)}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;
