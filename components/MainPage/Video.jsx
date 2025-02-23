import React from 'react'
import Image from 'next/image'
import images from "@/img"

const Video = () => {
  return (
    <div className="w-[90%] sm:w-[85%] my-4 sm:mb-10 mx-auto">
    <div className="sm:text-start">
        <h1 className="text-2xl sm:text-5xl leading-none">
          <span>📽️</span> The Videos
        </h1>
        <p className="text-xs sm:text-xl sm:w-1/3 mt-4">
        Watch, collect, and own exclusive video NFTs! <br/>
        Discover epic moments, rare clips, and digital collectibles that are truly one of a kind. <br/>
        Ready to level up your collection?  
        </p> 

        <div className="p-4 sm:p-20 md:p-40 mt-6 sm:mt-10">
            
                <Image
                src={images.nftVideo}
                alt="Video image"
                objectFit="cover"
                className="rounded-xl w-full sm:shadow-[50px_-50px_5px_10px_var(--shadow-light-color)]"
                />
        </div>
      </div>
    </div>
  )
}

export default Video