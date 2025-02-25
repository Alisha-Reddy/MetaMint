import React from 'react'
import images from "@/img"
import { Banner, CollectionProfile, NFTCard } from '@/components/CollectionPage'
import { Slider, Brand, Filter } from '@/components'

const page = () => {
  const collectionArray = [
    images.nftImage1,
    images.nftImage2,
    images.nftImage3,
    images.nftImage1,
    images.nftImage2,
    images.nftImage3,
    images.nftImage1,
    images.nftImage2,
    images.nftImage3,
  ];

  return (
    <div>
      <Banner bannerImage={images.creatorBackground1} />
      <div className='w-[90%] md:w-[95%] mx-auto my-4 sm:my-14'>
        <CollectionProfile />
        <Filter />
        <NFTCard NFTData={collectionArray} />

        <Slider />
        <Brand />
      </div>
    </div>
  )
}

export default page