import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import images from "@/img";

const DaysComponent = () => {
  return (
    <div className="w-[100%] rounded-2xl transition-all duration-300 ease-in cursor-pointer hover:shadow-[0px_px_10px_5px_var(--box-shadow)]">
      <div className="daysComponent_box">
        <div className="rounded-2xl">
          <Image
            src={images.creatorBackground1}
            alt="profile background"
            width={500}
            height={300}
            // className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="grid grid-cols-3 gap-1">
          {[...Array(3)].map((_, i) => (
            <Image
              key={i}
              src={images.creatorBackground2}
              alt={`profile ${i + 1}`}
              width={200}
              height={200}
              className="rounded-2xl"
            />
          ))}
        </div>

        <div className="p-2">
          <h2 className="text-xl font-semibold">Amazing Collection</h2>
          <div className="flex gap-1 items-center mt-2">
            <div className="flex items-center justify-between">
              <Image
                src={images.user1}
                alt="profile"
                width={30}
                height={30}
                className="rounded-full"
              />
              <p className="text-sm text-gray-700">
                Creator
                <span className="flex items-center space-x-1">
                  <span className="font-semibold">Shoaib Bhai</span>
                  <MdVerified className="text-blue-500" />
                </span>
              </p>
            </div>
            <div className="daysComponent_box_title_info_price">
              <small className="text-gray-500">1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponent;
