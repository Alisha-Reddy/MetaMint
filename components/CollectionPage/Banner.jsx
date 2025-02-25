import React from 'react'
import Image from 'next/image'

const Banner = ({ bannerImage }) => {
  return (
    <div>
      {/* Mobile View */}
      <Image
        src={bannerImage}
        alt="background"
        className="md:hidden w-full h-[300px] object-cover"
        priority
      />

      {/* Desktop View */}
      <Image
        src={bannerImage}
        alt="background"
        className="hidden md:block w-full h-[900px] object-cover"
        priority
      />
    </div>
  )
}

export default Banner