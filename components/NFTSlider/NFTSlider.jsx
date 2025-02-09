"use client"
import React, {useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import {AiFillFire, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {MdVerified, MdTimer} from 'react-icons/md'
import {TbArrowBigLeftLines, TbArrowBigRightLines} from 'react-icons/tb'
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
            nftImage: images.nftImage1,
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
            setIdNumber(idNumber + 1)
        }
    }, [idNumber, sliderData.length])

    const dec = useCallback(()=>{
        if(idNumber > 0){
            setIdNumber(idNumber - 1)
        }
    }, [idNumber, sliderData.length])

    // useEffect(()=>{
    //     inc()
    // },[])

  return (
        <div className=' w-[95%] mx-auto pt-60 sm:py-28 sm:px-12 grid md:grid-cols-[repeat(12,1fr)] items-center gap-4 sm:gap-0'>{/* bigNFTSlider_box */}
            <div className='order-1 md:order-2 col-start-4 col-end-8 row-start-1 row-end-[- 1] bg-[var(--main-bg-color)] shadow-[5px_5px_20px] shadow-[var(--shadow-light-color)] rounded-2xl p-8 z-10 h-[68vh]'>{/* bigNFTSlider_box_left */}
                <h2 className='text-5xl font-bold'>{sliderData[idNumber].title}</h2>

                <div className='flex items-center'>{/* bigNFTSlider_box_left_creator */}
                    <div className='flex flex-1 items-center gap-4'>{/* bigNFTSlider_box_left_creator_profile */}
                        <Image 
                        src={sliderData[idNumber].image}
                        alt = "Profile image"
                        width={50}
                        height={50}
                        className='rounded-full'
                        />{/* bigNFTSlider_box_left_creator_profile_image */}
                        <div>{/* bigNFTSlider_box_left_creator_profile_info */}
                            <p className='mt-2'>Creator</p>
                            <h4 className='font-semibold inline-flex gap-1 items-center'>{sliderData[idNumber].name}
                                <span>
                                    <MdVerified />
                                </span>
                            </h4>
                        </div>
                    </div>
                    <div className='flex flex-1 items-center gap-4'>{/* bigNFTSlider_box_left_creator_collection */}
                        <AiFillFire className='text-5xl' /> {/* bigNFTSlider_box_left_creator_collection_icon */}
                        <div>{/* bigNFTSlider_box_left_creator_collection_info */}
                            <p className='mt-2'>Collection</p>
                            <h4 className='font-semibold'>{sliderData[idNumber].collection}</h4>
                        </div>
                    </div>
                </div>
                <div>{/* bigNFTSlider_box_left_bidding */}
                    <div className='border-2 border-[var(--icons-dark-color)] my-4 px-10 py-4 rounded-lg relative'>{/* bigNFTSlider_box_left_bidding_box */}
                        <small className='absolute -top-5 bg-[var(--main-bg-color)] p-3 rounded-lg font-semibold'>Current Bid</small>
                        <p className='inline-flex gap-1 mt-4 '>{sliderData[idNumber].price} - 
                            <span>$221,21</span>
                        </p>
                    </div>
                    <p className='flex items-center justify-center gap-4 mt-2'>{/* bigNFTSlider_box_left_bidding_box_auction */}
                        <MdTimer className='text-3xl' />
                        {/* bigNFTSlider_box_left_bidding_box_icon */}
                        <span >Auction ending in</span>
                    </p>
                    <div className='mx-auto flex justify-between text-center p-4'>
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
                <div className="flex justify-between w-full text-3xl">
                    <TbArrowBigLeftLines
                        className="cursor-pointer transition-all duration-300 ease-in hover:text-4xl hover:text-black hover:z-10 hover:drop-shadow-[2px_2px_2px_blue]"
                        onClick={() => dec()}
                    />
                    <TbArrowBigRightLines
                        className="cursor-pointer transition-all duration-300 ease-in hover:text-4xl hover:text-black hover:z-10 hover:drop-shadow-[2px_2px_2px_blue]"
                        onClick={() => inc()}
                    />
                </div>

            </div>
            <div className='order-2 md:order-1 col-start-7 col-end-12 row-start-1 row-end-[-1] shadow-[10px_10px_20px] shadow-[var(--shadow-light-color)] rounded-2xl p-4 h-[85vh]'>{/* bigNFTSlider_box_right */}
                <div className='relative w-full h-full'>{/* bigNFTSlider_box_right_box */}
                    <Image
                    src={sliderData[idNumber].nftImage}
                    alt='NFT IMAGE'
                    className="w-full h-full object-fill rounded-3xl"
                    />
                    <div className='absolute top-8 right-8 flex items-center gap-2 text-2xl bg-red-100 text-red-500 p-2 rounded-2xl'>{/* bigNFTSlider_box_right_box_like */}
                        <AiFillHeart className='text-red-500' />
                        <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NFTSlider