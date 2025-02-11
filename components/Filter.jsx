'use client'
import React, {useState } from 'react'
import {
    FaFilter, 
    FaAngleDown, 
    FaAngleUp, 
    FaWallet, 
    FaMusic,
    FaVideo,
    FaImages,
    FaUserAlt
} from "react-icons/fa"
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdVerified } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'

import { Title } from '.'

const Filter = () => {
    const [filterMenu, setFilterMenu] = useState(true)
    const [image, setImage] = useState(true)
    const [video, setVideo] = useState(true)
    const [music, setMusic] = useState(true)

    

  return (
    <div className='w-[90%] mx-auto flex flex-col gap-6'>
        <Title
                heading="Cool NFTs Here"
                paragraph= "Some are awesome. Some are weird. You decide."
        />
        <div className='p-16'>{/* filter */}
            <div>{/* filter_box */}
                <div>{/* filter_box_left */}
                    <button onClick={() => {}}>NFTs</button>
                    <button onClick={() => {}}>Arts</button>
                    <button onClick={() => {}}>Musics</button>
                    <button onClick={() => {}}>Sports</button>
                    <button onClick={() => {}}>Photography</button>
                </div>
                <div>{/* filter_box_right */}
                <div onClick={() => setFilterMenu(prev => !prev)}>{/* filter_box_right_box */}
                        <FaFilter />
                        <span>Filter</span> 
                        {filterMenu ? <FaAngleDown/> : <FaAngleUp/>}
                    </div>
                </div>
            </div>
            {
                filterMenu && (
                    <div>{/* filter_box_items */}
                        <div>{/* filter_box_items_box */}
                            <div>{/* filter_box_items_box_item */}
                                <FaWallet/> <span>0.01 ETH - 10 ETH</span>
                                <AiFillCloseCircle />
                            </div>
                        </div>

                        <div>{/* filter_box_items_box */}
                            <div onClick={() => setImage(prev => !prev)}>{/* filter_box_items_box_item_trans */}
                                <FaImages/> <span>Images</span>
                                {image? <AiFillCloseCircle/> : <TiTick/>}
                            </div>
                        </div>

                        <div>{/* filter_box_items_box */}
                            <div onClick={() => setVideo(prev => !prev)}>{/* filter_box_items_box_item_trans */}
                                <FaVideo/> <span>Videos</span>
                                {video? <AiFillCloseCircle/> : <TiTick/>}
                            </div>
                        </div>

                        <div>{/* filter_box_items_box */}
                            <div onClick={() => setMusic(prev => !prev)}>{/* filter_box_items_box_item_trans */}
                                <FaMusic/> <span>Musics</span>
                                {music? <AiFillCloseCircle/> : <TiTick/>}
                            </div>
                        </div>

                        <div>{/* filter_box_items_box */}
                            <div >{/* filter_box_items_box_item */}
                                <FaUserAlt/> <span>Verified</span>
                                <MdVerified />
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Filter