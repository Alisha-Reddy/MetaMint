"use client";
import React, { useState } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";
import { Title } from "../..";
import DaysComponent from "./DaysComponent";

const Collection = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const data = {
    popular: [1, 2, 3, 4, 5, 6, 7, 8],
    following: [1, 2, 3, 4],
    news: [1, 2, 3, 4, 5, 6],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-[85%]  mx-auto my-4 sm:my-14">
      <Title heading="Flex Game Strong!" paragraph="Peek at the champs. Feel the FOMO." />

      <div className="w-[100%] py-3 pb-10">
        <div className=" w-full md:w-[430px] pb-10 mx-auto  text-center items-center">
          <h2 className="text-xl md:text-5xl mb-4">Top List Creators</h2>
          <div>
            <div className="bg-[var(--main-bg-color)] py-2 px-1 rounded-full flex justify-between items-center gap-1 md:gap-4 text-sm md:text-lg shadow-[0px_5px_20px_blue]">
              <button
                onClick={() => handleTabChange("popular")}
                className={`p-2 flex justify-center items-center gap-1 rounded-full cursor-pointer transition-all duration-300 ease-in  ${
                  activeTab === "popular"
                    ? "bg-[var(--icons-color)] text-[var(--main-bg-color)]  scale-105"
                    : "bg-transparent text-[var(--icons-color)]"
                }`}
              >
                <BsFillAlarmFill /> 24 hours
              </button>
              <button
                onClick={() => handleTabChange("following")}
                className={`p-2 flex justify-center items-center gap-1 rounded-full cursor-pointer transition-all duration-300 ease-in  ${
                  activeTab === "following"
                    ? "bg-[var(--icons-color)] text-[var(--main-bg-color)]  scale-105"
                    : "bg-transparent text-[var(--icons-color)]"
                }`}
              >
                <BsCalendar3 /> 7 days
              </button>
              <button
                onClick={() => handleTabChange("news")}
                className={`p-2 flex justify-center items-center gap-1 rounded-full cursor-pointer transition-all duration-300 ease-in  ${
                  activeTab === "news"
                    ? "bg-[var(--icons-color)] text-[var(--main-bg-color)]  scale-105"
                    : "bg-transparent text-[var(--icons-color)]"
                }`}
              >
                <BsFillCalendarDateFill /> 30 days
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data[activeTab].map((el) => (
            <DaysComponent key={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
