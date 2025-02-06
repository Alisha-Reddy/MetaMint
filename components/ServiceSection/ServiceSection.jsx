import React from 'react'
import Image from 'next/image'
import images from "@/img"

const ServiceSection = () => {
  return (
    <div className='w-[95%] sm:w-[90%] mx-12 my-auto '>{/* service */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-12 text-center justify-items-center'>{/* service_box */}
          <div className='flex flex-col items-center sm:gap-2'>{/* service1 */}
            <Image 
              src={images.service1}
              alt = "Browse & Discover "
              width={100}
              height={100}
            />
            <p className='my-4'>{/* sevice_box_item_step */}
              <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 1</span>
            </p>
            <h3 className='font-semibold'>Browse & Discover</h3>
            <p>Find unique NFTs from top creators. No stress, just scroll.1</p>
        </div>
        <div className='flex flex-col items-center sm:gap-2'>{/* service1 */}
            <Image 
              src={images.service4}
              alt = "Mint & Create"
              width={100}
              height={100}
            />
            <p className='my-4'>{/* sevice_box_item_step */}
            <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 2</span>
            </p>
            <h3 className='font-semibold'>Mint & Create</h3>
            <p>Turn your art into NFTs in a few clicks. No coding needed.</p>
        </div>
        <div className='flex flex-col items-center sm:gap-2'>{/* service1 */}
            <Image 
              src={images.service2}
              alt = "Buy & Sell "
              width={100}
              height={100}
            />
            <p className='my-4'>{/* sevice_box_item_step */}
            <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 3</span>
            </p>
            <h3 className='font-semibold'>Buy & Sell </h3>
            <p>Trade NFTs easily. No complicated steps.</p>
        </div>
        <div className='flex flex-col items-center sm:gap-2'>{/* service1 */}
            <Image 
              src={images.service3}
              alt = "Track & Collect"
              width={100}
              height={100}
            />
            <p className='my-4'>{/* sevice_box_item_step */}
            <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 4</span>
            </p>
            <h3 className='font-semibold'>Track & Collect</h3>
            <p>Build your collection, track value, and flex.</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection