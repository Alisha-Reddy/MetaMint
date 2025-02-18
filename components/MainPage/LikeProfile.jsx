import React from 'react'
import Image from 'next/image'
import images from "@/img"

const LikeProfile = () => {
    const imageArray = [images.user1, images.user2, images.user3, images.user4];
    return (
      <div className="flex justify-start">
        {imageArray.map((el, i) => (
          <div className="w-6 h-6 border-2 border-[var(--icons-color)] rounded-full" key={i + 1}>
            <Image
              src={el}
              alt="users"
              key={i + 1}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    );
}

export default LikeProfile