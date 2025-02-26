import React from 'react'
import images from "@/img"
import { NFTCard } from '../CollectionPage';
import FollowerCard from '../MainPage/FollowerTab/FollowerCard';
const AuthorNFTCard = ({ activeTab }) => {
  const dataMap = {
    collectiables: [
      images.nftImage1, images.nftImage2, images.nftImage3,
      images.nftImage1, images.nftImage2, images.nftImage3,
      images.nftImage1, images.nftImage2
    ],
    created: [
      images.nftImage1, images.nftImage2,
      images.nftImage3, images.nftImage1
    ],
    like: [
      images.nftImage1, images.nftImage2,
      images.nftImage3, images.nftImage1, images.nftImage2
    ],
    follower: [
      { background: images.creatorBackground1, user: images.user1 },
      { background: images.creatorBackground2, user: images.user2 },
      { background: images.creatorBackground3, user: images.user3 },
      { background: images.creatorBackground4, user: images.user4 },
      { background: images.creatorBackground5, user: images.user5 },
      { background: images.creatorBackground6, user: images.user6 },
    ],
    following: [
      { background: images.creatorBackground3, user: images.user3 },
      { background: images.creatorBackground4, user: images.user4 },
      { background: images.creatorBackground5, user: images.user5 },
      { background: images.creatorBackground6, user: images.user6 },
      { background: images.creatorBackground1, user: images.user1 },
    ],
  };

  const currentTab = Object.keys(activeTab).find((key) => activeTab[key]);

  return (
    <div className="my-4 sm:my-14">
      {currentTab && (
        currentTab === "follower" || currentTab === "following" ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-24'>
            {dataMap[currentTab].map((el, i) => (
              <FollowerCard key={i} i={i} />
            ))}
          </div>
        ) : (
          <NFTCard NFTData={dataMap[currentTab]} />
        )
      )}
    </div>
  );
};

export default AuthorNFTCard