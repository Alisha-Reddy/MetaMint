import React from 'react'
import Image from 'next/image'
import images from "@/img"

const LikeProfile = () => {
    const Style = {}
    const imageArray = [images.user1, images.user2, images.user3, images.user4];
    return (
      <div className="flex justify-start">
        {imageArray.map((el, i) => (
          <div className="border-2 border-[var(--icons-color)] rounded-full" key={i + 1}>
            <Image
              src={el}
              width={15}
              height={15}
              key={i + 1}
              className="rounded-full"
            />
          </div>
        ))}
      </div>
    );
}

export default LikeProfile