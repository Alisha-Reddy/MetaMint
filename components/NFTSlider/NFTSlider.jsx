"use client"
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {AiFillFir, AiFillHearte, AiOutlineHeart} from 'react-icons/ai'
import {MdVerified, MdTimer} from 'react-icons/md'
import {TbArrowBigLeftLines, TbArrowBigRightLine} from 'react-icons/tb'
import images from "@/img"
import Button from "../Button/Button"

const NFTSlider = () => {
    const [idNumber, setIOdNumber] = useState(1)

    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Alena",
            collection: "Anime Art",
            price: "0000000034334 ETH",
            like: 243,
            image: images.user1,
            nftImage: images.nftImage1,
            time:{
                day: 20,
                hours: 10,
                seconds: 4,
            }
        },
        {
            title: "Hi NFT",
            id: 2,
            name: "Alena2",
            collection: "Anime Art 2",
            price: "000000038784 ETH",
            like: 32423,
            image: images.user2,
            nftImage: images.nftImage2,
            time:{
                day: 20,
                hours: 10,
                seconds: 4,
            }
        },
        {
            title: "Bye NFT",
            id: 3,
            name: "Alena3",
            collection: "Anime Art 4",
            price: "000002345435 ETH",
            like: 445,
            image: images.user3,
            nftImage: images.nftImage3,
            time:{
                day: 20,
                hours: 10,
                seconds: 4,
            }
        },
        {
            title: "Gone NFT",
            id: 4,
            name: "Alena4",
            collection: "Anime Art 4",
            price: "00000032435 ETH",
            like: 7657,
            image: images.user4,
            nftImage: images.nftImage4,
            time:{
                day: 20,
                hours: 10,
                seconds: 4,
            }
        },
    ]
  return (
    <div>{/* bigNFTSlider */}
        <div>{/* bigNFTSlider_box */}
            <div>{/* bigNFTSlider_box_left */}
                <h2>{sliderData[idNumber].title}</h2>
                <div>{/* bigNFTSlider_box_left_creator */}
                    <div>{/* bigNFTSlider_box_left_creator_profile */}
                        <Image 
                        src={sliderData[idNumber].image}
                        alt = "Profile image"
                        width={50}
                        height={50}
                        />
                    </div>
                </div>
            </div>
            <div>{/* bigNFTSlider_box_right */}
            </div>
        </div>
    </div>
  )
}

export default NFTSlider