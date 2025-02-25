"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import SliderCard from "./SliderCard";

const Slider = () => {
  const sliderArray = [1, 2, 3, 4, 5, 6];
  const sliderRef = useRef(null);
  const controls = useAnimation();
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [maxDrag, setMaxDrag] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        const card = sliderRef.current.querySelector(".slider-item");
        if (card) {
          setCardWidth(card.offsetWidth + 16); // Include margin
        }
      }

      if (window.innerWidth <= 640) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }

      if (sliderRef.current) {
        const totalWidth = cardWidth * sliderArray.length;
        const visibleWidth = cardWidth * visibleCards;
        setMaxDrag(totalWidth - visibleWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [cardWidth, visibleCards]);

  const handleScroll = (direction) => {
    let newPosition = position + (direction === "right" ? -cardWidth : cardWidth);

    if (newPosition < -maxDrag) {
      newPosition = -maxDrag;
    } else if (newPosition > 0) {
      newPosition = 0;
    }

    setPosition(newPosition);
    controls.start({ x: newPosition, transition: { type: "spring", stiffness: 200, damping: 20 } });
  };

  return (
    <div className="my-4 sm:my-14">
      <div>
        <h2 className="text-5xl md:text-2xl">Explore NFTs Video</h2>

        <div className="sm:flex justify-between items-center">
          <p>Click on play icon & enjoy NFTs Video</p>
          <div className="flex items-center justify-end gap-8 text-sm sm:text-2xl mt-2 sm:mt-0">
            <button
              className="border border-[var(--icons-color)] p-2 sm:p-4 rounded-full transition-all duration-300 ease-in cursor-pointer hover:bg-[var(--icons-color)] hover:text-[var(--main-bg-color)] hover:shadow-[var(--box-shadow)]"
              onClick={() => handleScroll("left")}
              aria-label="Scroll Left"
            >
              <TiArrowLeftThick />
            </button>
            <button
              className="border border-[var(--icons-color)] p-2 sm:p-4 rounded-full transition-all duration-300 ease-in cursor-pointer hover:bg-[var(--icons-color)] hover:text-[var(--main-bg-color)] hover:shadow-[var(--box-shadow)]"
              onClick={() => handleScroll("right")}
              aria-label="Scroll Right"
            >
              <TiArrowRightThick />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden relative">
          <motion.div
            ref={sliderRef}
            className="flex gap-6 p-4 cursor-grab"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -maxDrag, right: 0 }}
          >
            {sliderArray.map((el, i) => (
              <motion.div
                key={i}
                className={`slider-item ${
                  visibleCards === 1 ? "min-w-full" : visibleCards === 2 ? "min-w-[50%]" : "min-w-[30%]"
                }`}
              >
                <SliderCard el={el} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
