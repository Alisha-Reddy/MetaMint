import React from 'react'
import { Title } from '@/components'
import AudioCard from './AudioCard'
import AudioCardSmall from './AudioCardSmall'

const AudioLive = () => {
  return (
    <div className='w-[90%] mx-auto my-4 sm:my-14'>
      <Title 
        heading="Tune In, Collect On!" 
        paragraph="Dive into the sounds of the future. Discover NFTs that hit all the right notes!" 
      />
      <div className="grid gap-6 mt-4 md:grid-cols-[2.5fr_1fr]">
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2'>
          <AudioCard />
          <AudioCard />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-rows-3">
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  )
}

export default AudioLive
