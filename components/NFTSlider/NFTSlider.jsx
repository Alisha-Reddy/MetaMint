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
        <div className='w-[95%] sm:w-[90%] mx-0 my-auto pt-96 sm:p-32 grid md:grid-cols-12 items-center gap-4 sm:gap-0'>{/* bigNFTSlider_box */}
            <div className='col-start-1 col-end-7 row-start-1 row-end-[-1] bg-[var(--main-bg-color)] shadow-[5px_5px_20px] shadow-[var(--shadow-light-color)] rounded-2xl p-8 z-30 h-[80vh] sm:h-[90vh]'>{/* bigNFTSlider_box_left */}
                <h2 className='text-5xl'>{sliderData[idNumber].title}</h2>

                <div className='grid grid-cols-2 items-center'>{/* bigNFTSlider_box_left_creator */}
                    <div className='flex items-center gap-4'>{/* bigNFTSlider_box_left_creator_profile */}
                        <Image 
                        src={sliderData[idNumber].image}
                        alt = "Profile image"
                        width={50}
                        height={50}
                        className='rounded-full'
                        />{/* bigNFTSlider_box_left_creator_profile_image */}
                        <div style={{lineHeight:0}}>{/* bigNFTSlider_box_left_creator_profile_info */}
                            <p className='mb-[-.7rem] mt-4'>Creator</p>
                            <h4>{sliderData[idNumber].name}
                                <span>
                                    <MdVerified />
                                </span>
                            </h4>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>{/* bigNFTSlider_box_left_creator_collection */}
                        <AiFillFire className='text-6xl' /> {/* bigNFTSlider_box_left_creator_collection_icon */}
                        <div style={{lineHeight:0}}>{/* bigNFTSlider_box_left_creator_collection_info */}
                            <p>Collection</p>
                            <h4>{sliderData[idNumber].collection}</h4>
                        </div>
                    </div>
                </div>
                <div>{/* bigNFTSlider_box_left_bidding */}
                    <div className='border-2 border-[var(--icons-dark-color)] m-8 px-0 py-16 rounded-lg'>{/* bigNFTSlider_box_left_bidding_box */}
                        <small className='bg-[var(--shadow-dark-color)] p-4 rounded-lg font-semibold'>Current Bid</small>
                        <p>{sliderData[idNumber].price} 
                            <span>$221,21</span>
                        </p>
                    </div>
                    <p className='flex items-center gap-4'>{/* bigNFTSlider_box_left_bidding_box_auction */}
                        <MdTimer className='text-3xl' />
                        {/* bigNFTSlider_box_left_bidding_box_icon */}
                        <span >Auction ending in</span>
                    </p>
                    <div className='flex items-center gap-12 text-center pt-4 pb-12 border border-[var(--shadow-dark-color)]'>
                        {/* bigNFTSlider_box_left_bidding_box_timer*/}
                        <div>{/* bigNFTSlider_box_left_bidding_box_timer_item*/}
                            <p className='text-3xl font-bold '> {sliderData[idNumber].time.day} </p>
                            <span>Days</span>
                        </div>
                        <div>{/* bigNFTSlider_box_left_bidding_box_timer_item*/}
                            <p className='text-3xl font-bold '> {sliderData[idNumber].time.hours} </p>
                            <span>Hours</span>
                        </div>
                        <div>{/* bigNFTSlider_box_left_bidding_box_timer_item*/}
                            <p className='text-3xl font-bold '> {sliderData[idNumber].time.minutes} </p>
                            <span>Minutes</span>
                        </div>
                        <div>{/* bigNFTSlider_box_left_bidding_box_timer_item*/}
                            <p className='text-3xl font-bold '> {sliderData[idNumber].time.seconds} </p>
                            <span>Seconds</span>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-16 p-8'>{/* bigNFTSlider_box_left_button*/}
                        <Button btnName="Place" handleClick={()=>{}} />
                        <Button btnName="View" handleClick={()=>{}} />
                    </div>
                </div>
                <div className='flex items-center gap-8 text-3xl mt-12'>{/* bigNFTSlider_box_left_sliderbtn*/}
                    <TbArrowBigLeftLines className='cursor-pointer transition-all duration-300 ease-in hover:bg-[var(--shadow-dark-color)] hover:rounded-full hover:p-4 ' onClick={()=>dec()}/>{/* bigNFTSlider_box_left_sliderbtn_icon*/}
                    <TbArrowBigRightLine onClick={()=>inc()}/>{/* bigNFTSlider_box_left_sliderbtn_icon*/}
                </div>
            </div>
            <div className='col-start-7 col-end-12 row-start-1 row-end-[-1] bg-[var(--main-bg-color)] shadow-[5px_5px_20px] shadow-[var(--shadow-light-color)] rounded-full p-4 z-30 h-[90vh]'>{/* bigNFTSlider_box_right */}
                <div className='relative'>{/* bigNFTSlider_box_right_box */}
                    <Image
                    src={sliderData[idNumber].nftImage}
                    alt='NFT IMAGE'
                    className='rounded-3xl'
                    />
                    <div className='absolute top-12 right-12 flex items-center gap-4 text-2xl bg-[var(--main-bg-color)] text-[var(--shadow-dark-color)] p-4 rounded-2xl'>{/* bigNFTSlider_box_right_box_like */}
                        <AiFillHeart />
                        <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NFTSlider