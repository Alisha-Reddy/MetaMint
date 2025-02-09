import React from 'react'
import Image from 'next/image'
import images from "@/img"

const ServiceSection = () => {
  return (
    <div className='w-[95%] sm:w-[90%] mx-2 sm:mx-12 my-4 '>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-12 text-center justify-items-center'>
          <div className='text-xs sm:text-base text-xs sm:text-base flex flex-col items-center sm:gap-2'>
            <Image 
              src={images.service1}
              alt = "Browse & Discover "
              className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              style={{ filter: 'drop-shadow(4px 4px 5px #0000ff98)' }}
            />
            <p className='my-4'>
              <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 1</span>
            </p>
            <h3 className='font-semibold'>Browse & Discover</h3>
            <p>Find unique NFTs from top creators. <br />
               No stress, just scroll.</p>
        </div>
        <div className='text-xs sm:text-base flex flex-col items-center sm:gap-2'>
            <Image 
              src={images.service2}
              alt = "Mint & Create"
              className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              style={{ filter: 'drop-shadow(4px 4px 5px #0000ff98)' }}
            />
            <p className='my-4'>
            <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 2</span>
            </p>
            <h3 className='font-semibold'>Mint & Create</h3>
            <p>Turn your art into NFTs in a few clicks. <br />
               No coding needed.</p>
        </div>
        <div className='text-xs sm:text-base flex flex-col items-center sm:gap-2'>
            <Image 
              src={images.service3}
              alt = "Buy & Sell "
              className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              style={{ filter: 'drop-shadow(4px 4px 5px #0000ff98)' }}
            />
            <p className='my-4'>
            <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 3</span>
            </p>
            <h3 className='font-semibold'>Buy & Sell </h3>
            <p>Trade NFTs easily. <br />
               No complicated steps.</p>
        </div>
        <div className='text-xs sm:text-base flex flex-col items-center sm:gap-2'>
            <Image 
              src={images.service4}
              alt = "Track & Collect"
              className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              style={{ filter: 'drop-shadow(4px 4px 5px #0000ff98)' }}
            />
            <p className='my-4'>
            <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 4</span>
            </p>
            <h3 className='font-semibold'>Track & Collect</h3>
            <p>Build your collection, track value, and flex. <br />
            No FOMO, just vibes. </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection