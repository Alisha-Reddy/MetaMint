"use client"
import React, {useState} from 'react'
import { Banner } from '@/components/CollectionPage'
import { Brand, Title } from '@/components'
import FollowerCard from '@/components/MainPage/FollowerTab/FollowerCard'
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
            <AuthorNFTCard activeTab={activeTab} />
            <Title
                heading="Popular Creators"
                paragraph="Click on the music icon and enjoy NFT music or audio."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-24">
                {followerArray.map((el, i) => (
                    <FollowerCard key={i + 1} i={i} />
                ))}
            </div>
            <Brand />
          </div>
        </div>
      )
}
export default author;