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
import { Title } from './index'

const FilterButton = ({ label, onClick }) => (
    <button 
    className="px-2 md:px-6 py-2 rounded-3xl border border-[var(--shadow-light-color)] text-xs md:text-xl float"
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

    const filterOptions = [
        { icon: <FaImages />, label: "Images", state: image, setState: setImage },
        { icon: <FaVideo />, label: "Videos", state: video, setState: setVideo },
        { icon: <FaMusic />, label: "Musics", state: music, setState: setMusic }
    ];

    return (
        <div className="my-4 flex flex-col gap-6 mt-10">

            <div>
                
                <div className="flex flex-col md:flex-row items-center justify-between pb-4 md:pb-6 gap-4 ">
                    
                    <div className="flex gap-1 md:gap-8  w-full md:w-auto ">
                        {categories.map((category) => (
                            <FilterButton key={category} label={category} onClick={() => {}} />
                        ))}
                    </div>

                    <div className="flex items-center gap-2 p-4 w-full md:w-32 justify-center bg-transparent cursor-pointer rounded-xl shadow-[0px_00px_10px_blue] shine" onClick={() => setFilterMenu(prev => !prev)}>
                        <FaFilter />
                        <span>Filter</span> 
                        {filterMenu ? <FaAngleDown /> : <FaAngleUp />}
                    </div>
                </div>

                {filterMenu && (
                    <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between p-4 md:p-6 text-xs md:text-base border-t-2 border-blue-900">
                        
                        <div className="flex items-center gap-2 bg-[var(--ele-hover-bg-color)] p-2 rounded-xl text-[var(--modal-solid-bg)]">
                            <FaWallet /> 
                            <span>0.01 ETH - 10 ETH</span>
                            <AiFillCloseCircle className="cursor-pointer" />
                        </div>

                        {filterOptions.map(({ icon, label, state, setState }) => (
                            <div key={label} className={`flex items-center gap-2 cursor-pointer p-2 rounded-xl transition-colors duration-300 ${
                                state ? 'bg-transparent' :  'bg-[var(--ele-hover-bg-color)] text-[var(--modal-solid-bg)]'
                            }`} 
                            onClick={() => setState(prev => !prev)}>
                                {icon} 
                                <span>{label}</span>
                                {state ? <AiFillCloseCircle /> : <TiTick />}
                            </div>
                        ))}

                        <div className="flex items-center gap-2 bg-[var(--ele-hover-bg-color)] p-2 rounded-xl text-[var(--modal-solid-bg)]">
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
