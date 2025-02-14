"use client"
import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import images from "@/img";

const NFTCard = () => {
  const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [like, setLike] = useState(true);

  return (
    <div className="w-[95%] md:w-[90%] grid sm:grid-cols-2 md:grid-cols-3 gap-12 mb-10 mx-auto">
      {featureArray.map(el => (
        <div className="bg-blue-950 p-2 sm:p-4 rounded-2xl grid grid-cols-4 cursor-pointer transition-all duration-300 ease-in hover:shadow-[0px_0px_20px_7px_var(--shadow-light-color)] relative overflow-hidden" key={el}>
  
        {/* Image Background */}
        <div className="col-start-1 col-end-[-1] row-start-1 overflow-hidden rounded-2xl relative h-[300px] sm:h-[350px] md:h-[400px] z-0">
          <Image
            src={images.nftImage1}
            alt="NFT image"
            fill
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110 rounded-2xl"
          />
        </div>
      
        {/* Top Content - Heart & Timer */}
        <div className='col-start-1 col-end-[-1] row-start-1 z-10 absolute inset-x-0 -right-10 -top-5 flex items-start justify-between p-4'>
          <div className="bg-blue-950 px-2 sm:px-4 py-1 mt-3 text-[var(--icons-color)] rounded-full">
            <div
              className="flex items-center text-sm sm:text-xl gap-2"
              onClick={() => { setLike(prev => !prev) }}
            >
              {like ? <AiOutlineHeart /> : <AiFillHeart className="text-red-600" />}
              22
            </div>
          </div>
      
          <div className="bg-blue-950 px-6 py-2 text-center skew-x-[45deg] rounded-bl-lg">
            <div className="skew-x-[-45deg]">
              <small>Remaining time</small>
              <p className=" text-base sm:text-xl font-bold">3h : 15m : 20s</p>
            </div>
          </div>
        </div>
      
        {/* Bottom Content - Bid Details */}
        <div className="col-start-1 col-end-[-1] row-start-1 z-20 absolute -bottom-3 -left-4 w-full grid grid-cols-[1.5fr_1fr] p-4">
          <div className="bg-blue-950 pb-2 -ml-3 skew-x-[45deg] rounded-tr-2xl relative z-10">
            <div className="skew-x-[-45deg] pl-3">
              <h4 className="text-sm sm:text-xl my-1 sm:mb-3 ml-2 font-bold">Clone #17373</h4>
      
              <div className="flex justify-between items-end">
                <div className="border border-[var(--icons-color)] px-2 sm:px-6 sm:py-1 items-center rounded-md bg-blue-950 relative">
                  <small className="bg-blue-950 text-[var(--icons-color)] rounded-sm px-[1px] sm:p-[2px] text-[10px] sm:text-xs absolute -top-2 sm:-top-3 left-1">
                    Current Bid
                  </small>
                  <p className="text-xs sm:text-base pt-2 font-semibold">1.000ETH</p>
                </div>
                <div className="text-[var(--icons-color)] text-xs">
                  <small>61 in stock</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
      ))}
    </div>
  );
};

export default NFTCard;
