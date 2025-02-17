import React from 'react'
import { Title } from '@/components'
import AudioCard from './AudioCard'
import AudioCardSmall from './AudioCardSmall'

const AudioLive = () => {
  const Style = {}
  return (
    <div>
        <Title 
            heading="Tune In, Collect On!" 
            paragraph="Dive into the sounds of the future. Discover NFTs that hit all the right notes!" 
        />
        <div className={Style.audioLive}>
          <div className={Style.audioLive_box}>
            <div className={Style.audioLive_box_left}>
              <AudioCard />
              <AudioCard />
            </div>
            <div className={Style.audioLive_box_right}>
              <AudioCardSmall />
              <AudioCardSmall />
              <AudioCardSmall />
            </div>
          </div>
        </div>
    </div>
  )
}

export default AudioLive