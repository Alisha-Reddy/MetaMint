"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

const AuthorTaps = ({setActiveTab}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];
  // Tab Options
  const tabs = ["Collectiables", "Created", "Liked", "Following", "Followers"];

  // Handle tab change
  const openTab = (tab, index) => {
    setActiveTab({
      collectiables: tab === "Collectiables",
      created: tab === "Created",
      like: tab === "Liked",
      follower: tab === "Followers",
      following: tab === "Following",
    });
    setActiveBtn(index);
  };
  return (
    <div className="my-4 sm:my-14 flex justify-between md:grid md:grid-cols-1 md:gap-8">
        {/* Left Section - Tabs */}
        <div className="flex gap-8 items-center md:grid md:grid-cols-2 md:gap-4 shadow-md p-4 rounded-lg">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => openTab(tab, index)}
                className={`border border-[var(--icons-color)] bg-[var(--main-bg-color)] text-[var(--icons-color)] text-lg rounded-2xl px-4 py-2 transition-all duration-300 ${
                  activeBtn === index ? "bg-[var(--icons-color)] text-[var(--main-bg-color)]" : ""
                } hover:bg-[var(--icons-color)] hover:text-[var(--main-bg-color)]`}
              >
                {tab}
              </button>
            ))}
        </div>

        {/* Right Section - Dropdown */}
        <div className="relative mt-8 md:mt-0">
          <div
            className="border border-[var(--icons-color)] rounded-2xl w-72 px-8 py-2 flex items-center gap-4 cursor-pointer"
            onClick={() => setOpenList((prev) => !prev)}
          >
            <p className='text-lg'>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className="absolute left-[-1rem] mt-6 w-64 bg-[var(--main-bg-color)] p-4 rounded-lg shadow-lg z-50">
              {listArray.map((el, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedMenu(el);
                    setOpenList(false);
                  }}
                  className="flex items-center justify-between py-2 px-4 transition-all duration-300 cursor-pointer hover:bg-[var(--icons-color)] hover:text-[var(--main-bg-color)] rounded-md"
                >
                  <p>{el}</p>
                  <span>{selectedMenu === el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  )
}

export default AuthorTaps