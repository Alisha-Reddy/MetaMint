"use client";
import React, { useState } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";
import FollowerCard from "./FollowerCard";

const FollowerTab = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const data = {
    popular: [1, 2, 3, 4, 5, 6, 7, 8],
    following: [1, 2, 3, 4],
    noteworthy: [1, 2, 3, 4, 5, 6],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-[85%] mx-auto my-4 sm:my-14">
      <div className="w-full md:w-[430px] pb-10 mx-auto text-center">
        <h2 className="text-xl md:text-5xl mb-4">Top List Creators</h2>
        <div>
          <div className="bg-[var(--main-bg-color)] py-2 px-1 rounded-full flex justify-between items-center gap-1 md:gap-4 text-sm md:text-lg shadow-[3px_5px_20px_blue]">
            <button
              onClick={() => handleTabChange("popular")}
              className={`p-2 flex justify-center items-center gap-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                activeTab === "popular"
                  ? "bg-[var(--icons-color)] text-[var(--main-bg-color)] shadow-[0_0_10px_var(--icons-color)]"
                  : "bg-transparent text-[var(--icons-color)] hover:scale-110"
              }`}
            >
              <RiUserUnfollowFill /> Popular
            </button>
            <button
              onClick={() => handleTabChange("following")}
              className={`p-2 flex justify-center items-center gap-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                activeTab === "following"
                  ? "bg-[var(--icons-color)] text-[var(--main-bg-color)] shadow-[0_0_10px_var(--icons-color)]"
                  : "bg-transparent text-[var(--icons-color)] hover:scale-110"
              }`}
            >
              <RiUserFollowFill /> Following
            </button>
            <button
              onClick={() => handleTabChange("noteworthy")}
              className={`p-2 flex justify-center items-center gap-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                activeTab === "noteworthy"
                  ? "bg-[var(--icons-color)] text-[var(--main-bg-color)] shadow-[0_0_10px_var(--icons-color)]"
                  : "bg-transparent text-[var(--icons-color)] hover:scale-110"
              }`}
            >
              <RiAwardLine /> NoteWorthy
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data[activeTab].map(i => (
          <FollowerCard key={i} i={i}  />
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="px-2 md:px-6 py-2 rounded-3xl border border-[var(--shadow-dark-color)] text-xs md:text-xl float"
          >
            Show me more
          </a>
          <a
            href="#"
            className="px-2 md:px-6 py-2 rounded-3xl border border-[var(--shadow-dark-color)] text-xs md:text-xl float"
          >
            Become an author
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
