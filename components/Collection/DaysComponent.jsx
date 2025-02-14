import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import images from "@/img";

const DaysComponent = () => {
  return (
    <div className="daysComponent">
      <div className="daysComponent_box">
        <div className="daysComponent_box_img">
          <Image
            src={images.creatorBackground1}
            alt="profile background"
            width={500}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="daysComponent_box_profile">
          {[...Array(3)].map((_, i) => (
            <Image
              key={i}
              src={images.creatorBackground2}
              alt={`profile ${i + 1}`}
              width={200}
              height={200}
              className={`daysComponent_box_img_${i + 1} w-16 h-16 rounded-full object-cover border-2 border-white`}
            />
          ))}
        </div>

        <div className="daysComponent_box_title">
          <h2 className="text-xl font-semibold">Amazing Collection</h2>
          <div className="daysComponent_box_title_info flex justify-between items-center mt-2">
            <div className="daysComponent_box_title_info_profile flex items-center space-x-2">
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
