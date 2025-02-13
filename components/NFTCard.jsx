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
    <div className="w-[90%] grid grid-cols-3 gap-12 mb-10 mx-auto">
      {featureArray.map(el => (
        <div className="bg-blue-200 p-4 rounded-2xl grid grid-cols-4 cursor-pointer transition-all duration-300 ease-in hover:shadow-[0px_0px_20px_7px_var(--shadow-light-color)]  hover:scale-105 hover:rounded-3xl" key={el}>
        <div className="col-start-1 col-end-[-1] row-start-1 row-end-2overflow-hidden rounded-2xl relative h-[300px]">
          <Image
            src={images.nftImage1}
            alt="NFT image"
            fill
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-125 rounded-2xl"
          />
        </div>
      
        <div className='col-start-1 col-end-[-1] row-start-1 row-end-[-2] z-10 flex items-start justify-between overflow-hidden'>
          <div className="bg-black px-4 py-2 text-[var(--icons-color)] rounded-full m-4">
            <div
              className="flex items-center text-xl gap-2"
              onClick={() => {setLike(prev => !prev)}}
            >
              {like ? <AiOutlineHeart /> : <AiFillHeart className="text-red-600" />}
              22
            </div>
          </div>
      
          <div className="bg-black p-2 text-center skew-x-[45deg] rounded-bl-lg">
            <div className="skew-x-[-45deg]">
              <small>Remaining time</small>
              <p className="text-xl font-bold">3h : 15m : 20s</p>
            </div>
          </div>
        </div>
      
        <div className="col-start-1 col-end-[-1] row-start-3 row-end-[-1] z-10 items-end grid grid-cols-[1.5fr_1fr] overflow-hidden">
          <div className="bg-black pb-2 -ml-3 skew-x-[45deg] rounded-tr-2xl">
            <div className="skew-x-[-45deg] pl-3">
              <h4 className="text-xl">Clone #17373</h4>
      
              <div className="flex justify-between items-end">
                <div className="border border-[var(--icons-color)] px-2 py-1 items-center rounded-sm">
                  <small className="bg-[var(--icons-color)] text-[var(--main-bg-color)] rounded-sm p-[0.2rem]">
                    Current Bid
                  </small>
                  <p className="pt-2 font-semibold">
                    1.000ETH
                  </p>
                </div>
                <div className="text-[var(--icons-color)]">
                  <small>61 in stock</small>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[var(--icons-color)] text-end m-3 text-xl">
            <BsImages />
          </div>
        </div>
      </div>
      
      
      ))}
    </div>
  );
};

export default NFTCard;
