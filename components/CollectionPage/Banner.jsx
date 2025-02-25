import React from 'react'
import Image from 'next/image'

const Banner = ({ bannerImage }) => {
    return (
      <div>
        <Image
          src={bannerImage}
          alt="background"
          className="w-full h-[25vh] sm:h-[40vh] object-cover"
          priority
        />
      </div>
    )

}

export default Banner