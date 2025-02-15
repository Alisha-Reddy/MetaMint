import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import images from "@/img";

const DaysComponent = () => {
  return (
    <div className="w-[100%] rounded-2xl transition-all duration-300 ease-in cursor-pointer hover:shadow-[8px_8px_20px_5px_var(--shadow-light-color)] bg-[var(--bg-color)] p-2 hover:-translate-y-2 hover:rotate-1 hover:scale-105">
        <div className="rounded-2xl">
          <Image
            src={images.creatorBackground1}
            alt="profile background"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="grid grid-cols-3 gap-1 mt-2 rounded-b-2xl overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <Image
              key={i}
              src={images.creatorBackground2}
              alt={`profile ${i + 1}`}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>

        <div className="p-2">
          <h2 className="text-xl font-semibold">Amazing Collection</h2>
          <div className="flex gap-1 justify-between items-center mt-2">
            <div className="flex  gap-4 justify-center items-center">
              <Image
                src={images.user1}
                alt="profile"
                className="w-11 rounded-full"
              />
              <p className="text-sm ">
                Creator
                <span className="flex items-center space-x-1">
                  <span className="font-semibold">Alena</span>
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
  );
};

export default DaysComponent;
