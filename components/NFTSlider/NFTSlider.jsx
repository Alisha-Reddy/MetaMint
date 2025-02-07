"use client"
import React, {useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import {AiFillFire, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {MdVerified, MdTimer} from 'react-icons/md'
import {TbArrowBigLeftLines, TbArrowBigRightLine} from 'react-icons/tb'
import images from "@/img"
import Button from "../Button/Button"
import { initScriptLoader } from 'next/script'

const NFTSlider = () => {
    const [idNumber, setIdNumber] = useState(1)

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
                minutes: 54,
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
                minutes: 54,
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
                minutes: 54,
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
                minutes: 54,
                seconds: 4,
            }
        },
    ]

    const inc = useCallback(()=>{
        if(idNumber + 1 < sliderData.length){
            setIdNumber(setIdNumber + 1)
        }
    }, [idNumber, sliderData.length])

    const dec = useCallback(()=>{
        if(idNumber > 0){
            setIdNumber(setIdNumber - 1)
        }
    }, [idNumber, sliderData.length])

    // useEffect(()=>{
    //     inc()
    // },[])

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
                        <div>{/* bigNFTSlider_box_left_creator_profile_image */}
                            <p>Creator</p>
                            <h4>{sliderData[idNumber].name}
                                <span>
                                    <MdVerified />
                                </span>
                            </h4>
                        </div>
                    </div>
                    <div>{/* bigNFTSlider_box_left_creator_collection */}
                        <AiFillFire /> {/* bigNFTSlider_box_left_creator_collection_icon */}
                        <div>{/* bigNFTSlider_box_left_creator_collection_info */}
                            <p>Collection</p>
                            <h4>{sliderData[idNumber].collection}</h4>
                        </div>
                    </div>
                </div>
                <div>{/* bigNFTSlider_box_left_bidding */}
                    <div>{/* bigNFTSlider_box_left_bidding_box */}
                        <small>Current Bid</small>
                        <p>{sliderData[idNumber].price} 
                            <span>$221,21</span>
                        </p>
                    </div>
                    <p>{/* bigNFTSlider_box_left_bidding_box_auction */}
                        <MdTimer />
                        {/* bigNFTSlider_box_left_bidding_box_icon */}
                        <span>Auction ending in</span>
                    </p>
                    <div>
                        {/* bigNFTSlider_box_left_bidding_box_timer*/}
                        <div>{/* bigNFTSlider_box_left_bidding_box_timer_item*/}
                            <p> {sliderData[idNumber].time.day} </p>
                            <span>Days</span>
                        </div>
                        <div>{/* bigNFTSlider_box_left_bidding_box_timer_item*/}
                            <p> {sliderData[idNumber].time.hours} </p>
                            <span>Hours</span>
                        </div>
                        <div>{/* bigNFTSlider_box_left_bidding_box_timer_item*/}
                            <p> {sliderData[idNumber].time.minutes} </p>
                            <span>Minutes</span>
                        </div>
                        <div>{/* bigNFTSlider_box_left_bidding_box_timer_item*/}
                            <p> {sliderData[idNumber].time.seconds} </p>
                            <span>Seconds</span>
                        </div>
                    </div>

                    <div>{/* bigNFTSlider_box_left_button*/}
                        <Button btnName="Place" handleClick={()=>{}} />
                        <Button btnName="View" handleClick={()=>{}} />
                    </div>
                </div>
                <div>{/* bigNFTSlider_box_left_sliderbtn*/}
                    <TbArrowBigLeftLines onClick={()=>dec()}/>{/* bigNFTSlider_box_left_sliderbtn_icon*/}
                    <TbArrowBigRightLine onClick={()=>inc()}/>{/* bigNFTSlider_box_left_sliderbtn_icon*/}
                </div>
            </div>
            <div>{/* bigNFTSlider_box_right */}
                <div>{/* bigNFTSlider_box_right_box */}
                    <Image
                    src={sliderData[idNumber].nftImage}
                    alt='NFT IMAGE'
                    />
                    <div>{/* bigNFTSlider_box_right_box_like */}
                        <AiFillHeart />
                        <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NFTSlider