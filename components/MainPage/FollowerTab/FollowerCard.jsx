"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import images from "@/img";

const FollowerCard = ({ i }) => {
  const [following, setFollowing] = useState(false);

  return (
    <div className="bg-[var(--bg-color)] rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="text-xl font-semibold text-gray-600">
        #{i + 1} <span className="text-yellow-500">🏆</span>
      </div>

      <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden">
        <Image
          src={images.creatorBackground1}
          alt="profile background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full z-10 overflow-hidden -mt-6 sm:-mt-8 mx-auto">
        <Image
          src={images.user1}
          alt="profile picture"
          className="w-full h-full object-cover rounded-full border-4 sm:border-8 border-[var(--bg-color)]"
        />
      </div>


      <div className="flex items-center justify-between mx-4 mb-2">
      <div className="text-center">
        <h4 className="text-lg sm:text-xl font-semibold flex justify-center items-center gap-1">
          Alena <MdVerified className="text-blue-500" />
        </h4>
        <p className="text-gray-500 text-sm sm:text-base">12.321 ETH</p>
      </div>

      <div className="text-center mt-3 sm:mt-4">
        <button
          onClick={() => setFollowing(!following)}
          className={`flex items-center gap-1 text-sm sm:text-base py-2 px-4 rounded-full border border-blue-600 ${
            following ? "text-white" : "text-blue-600 font-semibold"
          }`}
          >
          {following ? (
            <>
              Following <TiTick />
            </>
          ) : (
            "Follow"
          )}
        </button>
      </div>
      </div>

    </div>
  );
};

export default FollowerCard;
