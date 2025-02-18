import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import images from "@/img"
// import LikeProfile from '../LikeProfile';

const SliderCard = () => {
    return (
    <motion.div className="p-4 md:p-4 sm:p-2 w-96 ">
      <div className="transition-all duration-300 ease-in rounded-2xl pb-4 hover:shadow-[var(--box-shadow)]">
        <motion.div>
          <Image
            src={images.creatorBackground10}
            alt="slider profile"
            objectFit="cover"
            className="rounded-2xl w-full "
          />
        </motion.div>
        <div className="flex items-center justify-between gap-4 mt-4">
          <p className="text-xl font-extrabold leading-[0.5]">NFT Video #1245</p>
          <div className="flex items-center gap-2">
            {/* <LikeProfile /> */}
            <small>1 0f 100</small>
          </div>
        </div>

        <div className="flex justify-between mt-4 text-right ">
          <div className="relative border border-[var(--icons-color)] rounded-sm">
            <small className="bg-[var(--icons-color)] text-[var(--main-bg-color)] absolute -top-2 right-1 rounded-sm">Current Bid</small>
            <p className="text-xl font-bold pt-3">1.000 ETH</p>
          </div>

          <div className="grid items-end">
            <small>Reaming time</small>
            <p className="text-xl font-bold">3h : 15m : 20s</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SliderCard