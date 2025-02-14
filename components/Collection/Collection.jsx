"use client";
import React, { useState } from "react";
import { BsFillAlarmFill, BsFillCalendarDateFill, BsCalendar3 } from "react-icons/bs";
import { Title } from "..";
import DaysComponent from "./DaysComponent";

const Collection = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const data = {
    popular: [1, 2, 3, 4, 5, 6, 7, 8],
    following: [1, 2, 3, 4],
    news: [1, 2, 3, 4, 5, 6]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-[95%] md:w-[90%] mx-auto">
      <Title 
        heading="Flex Game Strong!"
        paragraph="Peek at the champs. Feel the FOMO."
      />


      <div className="w-[100%] py-3 pb-10">
        <div className="w-96 mx-auto py-6 text-center">
          <h2 className="text-5xl mb-4">Top List Creators</h2>
          <div className="collection_collections">
            <div className="bg-[var(--main-bg-color)] p-1 rounded-full flex justify-around items-center gap-4 text-lg shadow- ">
              <button
                onClick={() => handleTabChange("popular")}
                // className={activeTab === "popular" ? "active" : ""}
                className="bg-[var(--icons-color)] text-[var(--main-bg-color)] p-4 rounded-full cursor-pointer border border-[var(--icons-color)] transition-all duration-300 ease-in hover:bg-transparent hover:text-[var(--icons-color)]"
              >
                <BsFillAlarmFill /> 24 hours
              </button>
              <button
                onClick={() => handleTabChange("following")}
                // className={activeTab === "following" ? "active" : ""}
                className="bg-[var(--icons-color)] text-[var(--main-bg-color)] p-4 rounded-full cursor-pointer border border-[var(--icons-color)] transition-all duration-300 ease-in hover:bg-transparent hover:text-[var(--icons-color)]"
              >
                <BsCalendar3 /> 7 days
              </button>
              <button
                onClick={() => handleTabChange("news")}
                // className={activeTab === "news" ? "active" : ""}
                className="bg-[var(--icons-color)] text-[var(--main-bg-color)] p-4 rounded-full cursor-pointer border border-[var(--icons-color)] transition-all duration-300 ease-in hover:bg-transparent hover:text-[var(--icons-color)]"
              >
                <BsFillCalendarDateFill /> 30 days
              </button>
            </div>
          </div>
        </div>

        <div className="w-[80%] mx-auto grid grid-cols-3 gap-8">
          {data[activeTab].map((el, i) => (
            <DaysComponent key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
