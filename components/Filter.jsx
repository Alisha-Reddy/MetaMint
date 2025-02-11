'use client'

import React, { useState } from 'react'
import {
    FaFilter, 
    FaAngleDown, 
    FaAngleUp, 
    FaWallet, 
    FaMusic,
    FaVideo,
    FaImages,
    FaUserAlt
} from "react-icons/fa"
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdVerified } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'

import { Title } from '.'

// Reusable Button Component
const FilterButton = ({ label, onClick }) => (
    <button 
        className="px-6 py-3 md:py-4 whitespace-nowrap rounded-full border border-[var(--main-bg-color)] text-sm md:text-xl cursor-pointer transition-all duration-300 ease-in"
        onClick={onClick}
    >
        {label}
    </button>
)

const Filter = () => {
    const [filterMenu, setFilterMenu] = useState(true)
    const [image, setImage] = useState(true)
    const [video, setVideo] = useState(true)
    const [music, setMusic] = useState(true)

    const categories = ["NFTs", "Arts", "Musics", "Sports", "Photography"]

    // Filter options array moved outside of return
    const filterOptions = [
        { icon: <FaImages />, label: "Images", state: image, setState: setImage },
        { icon: <FaVideo />, label: "Videos", state: video, setState: setVideo },
        { icon: <FaMusic />, label: "Musics", state: music, setState: setMusic }
    ];

    return (
        <div className="w-[90%] mx-auto flex flex-col gap-6">
            <Title heading="Cool NFTs Here" paragraph="Some are awesome. Some are weird. You decide." />

            {/* Filter Section */}
            <div className="p-6 md:p-10 lg:p-16">
                
                {/* Filter Box */}
                <div className="flex flex-col md:flex-row items-center justify-between pb-8 md:pb-16 gap-4">
                    
                    {/* Scrollable Categories on Small Screens */}
                    <div className="flex gap-4 md:gap-8 overflow-x-auto whitespace-nowrap w-full md:w-auto">
                        {categories.map((category) => (
                            <FilterButton key={category} label={category} onClick={() => {}} />
                        ))}
                    </div>

                    {/* Filter Toggle */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setFilterMenu(prev => !prev)}>
                        <FaFilter />
                        <span>Filter</span> 
                        {filterMenu ? <FaAngleDown /> : <FaAngleUp />}
                    </div>
                </div>

                {/* Filter Options */}
                {filterMenu && (
                    <div className="flex flex-col gap-4 bg-gray-800 p-4 md:p-6 rounded-xl">
                        
                        {/* Price Range */}
                        <div className="flex items-center gap-2">
                            <FaWallet /> 
                            <span>0.01 ETH - 10 ETH</span>
                            <AiFillCloseCircle className="cursor-pointer" />
                        </div>

                        {/* Dynamic Filter Toggles */}
                        {filterOptions.map(({ icon, label, state, setState }) => (
                            <div key={label} className="flex items-center gap-2 cursor-pointer" onClick={() => setState(prev => !prev)}>
                                {icon} 
                                <span>{label}</span>
                                {state ? <AiFillCloseCircle /> : <TiTick />}
                            </div>
                        ))}

                        {/* Verified Users */}
                        <div className="flex items-center gap-2">
                            <FaUserAlt />
                            <span>Verified</span>
                            <MdVerified />
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Filter
