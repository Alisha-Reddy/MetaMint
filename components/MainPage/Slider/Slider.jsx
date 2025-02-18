"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import SliderCard from './SliderCard';

const Slider = () => {
  const sliderArray = [1, 2, 3, 4, 5, 6];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef(null);

  useEffect(() => {
    if (dragSlider.current) {
      setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    }
  }, []); 

  const handleScroll = (direction) => {
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    const newScrollPosition = direction === "left" 
      ? dragSlider.current.scrollLeft - scrollAmount 
      : dragSlider.current.scrollLeft + scrollAmount;

    // Smooth scroll effect
    dragSlider.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto pb-32">
        <h2 className="text-3xl leading-[0] md:text-2xl">Explore NFTs Video</h2>
        
        <div className="flex justify-between items-center">
          <p>Click on play icon & enjoy NFTs Video</p>
          <div className="flex items-center gap-8 text-2xl">
            <button
              className="border border-[var(--icons-color)] p-4 rounded-full transition-all duration-300 ease-in cursor-pointer hover:bg-[var(--icons-color)] hover:text-[var(--main-bg-color)] hover:shadow-[var(--box-shadow)]"
              onClick={() => handleScroll("left")}
              aria-label="Scroll Left"
            >
              <TiArrowLeftThick />
            </button>
            <button
              className="border border-[var(--icons-color)] p-4 rounded-full transition-all duration-300 ease-in cursor-pointer hover:bg-[var(--icons-color)] hover:text-[var(--main-bg-color)] hover:shadow-[var(--box-shadow)]"
              onClick={() => handleScroll("right")}
              aria-label="Scroll Right"
            >
              <TiArrowRightThick />
            </button>
          </div>
        </div>

        <motion.div className="w-full overflow-hidden" ref={dragSlider}>
          <motion.div
            className="grid grid-cols-[repeat(6,1fr)] gap-4 p-16 px-8 cursor-grab overflow-auto scrollbar-hide md:px-0"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {sliderArray.map((el, i) => (
              <SliderCard key={i} el={el} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
