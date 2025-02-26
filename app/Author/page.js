import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { Banner, NFTCard } from '@/components/CollectionPage'
import { Brand, Title } from '@/components'
import { FollowerTab } from '@/components/MainPage'
import { AuthorNFTCard, AuthorProfileCard, AuthorTaps } from '@/components/AuthorPage'
import images from "@/img"

const author = () =>{
    const followerArray = [
        { background: images.creatorBackground1, user: images.user1 },
        { background: images.creatorBackground2, user: images.user2 },
        { background: images.creatorBackground3, user: images.user3 },
        { background: images.creatorBackground4, user: images.user4 },
        { background: images.creatorBackground5, user: images.user5 },
        { background: images.creatorBackground6, user: images.user6 },
      ];
      const [activeTab, setActiveTab] = useState({
        collectiables: true,
        created: false,
        like: false,
        follower: false,
        following: false,
      });
    return (
        <div>
          <Banner bannerImage={images.creatorBackground2} />
          <div className='w-[90%] md:w-[95%] mx-auto my-4 sm:my-14'>
            <AuthorProfileCard/>
            <AuthorTaps setActiveTab={setActiveTab} />
            <AuthorNFTCard {...activeTab} />
            <Title
                heading="Popular Creators"
                paragraph="Click on the music icon and enjoy NFT music or audio."
            />
            <div className={Style.author_box}>
                {followerArray.map((el, i) => (
                    <FollowerTab key={i} el={el} />
                ))}
            </div>
            <Brand />
          </div>
        </div>
      )
}
export default author;