import React from 'react'
import { Title } from '@/components'
import AudioCard from './AudioCard'
import AudioCardSmall from './AudioCardSmall'

const AudioLive = () => {
  const Style = {}
  return (
    <div className='w-[85%]  mx-auto my-4 sm:my-14'>
        <Title 
            heading="Tune In, Collect On!" 
            paragraph="Dive into the sounds of the future. Discover NFTs that hit all the right notes!" 
        />
          <div className="grid grid-cols-[2.5fr_1fr] gap-10 mt-4">
            <div className='grid grid-cols-2 gap-10'>
              <AudioCard />
              <AudioCard />
            </div>
            <div className="pt-1 grid grid-rows-3 gap-2">
              <AudioCardSmall />
              <AudioCardSmall />
              <AudioCardSmall />
            </div>
          </div>
    </div>
  )
}

export default AudioLive