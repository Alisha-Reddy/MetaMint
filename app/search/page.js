import React from 'react'
import { Slider, Brand, Filter } from '@/components'
import { SearchBar } from '@/components/SearchPage'
import { NFTCard, Banner } from '@/components/CollectionPage'
import images from "@/img"

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
      <Banner bannerImage={images.creatorBackground3} />
      <div className='w-[80%] md:w-[95%] mx-auto my-4 sm:my-14'>
        <SearchBar/>
        <Filter/>
        <NFTCard NFTData={collectionArray}/>
        <Slider/>
        <Brand/>
      </div>
    </div>
  )
}

export default page
