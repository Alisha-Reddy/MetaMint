import React from 'react'
import {RiSendPlaneFill} from 'react-icons/ri'
import Image from 'next/image'
import images from "@/img"

const Subscribe = () => {
  return (
    <div className='w-[90%] md:w-[95%] mx-auto my-4 sm:my-14'>
        <div className='w-[85%] mx-auto grid grids-cols-2 md:grid-cols-[2fr_1.5fr] gap-10 items-center justify-between'>{/* subscribe_box */}
            <div>
                <Image
                src={images.update}
                alt='get update'
                height={600}
                width={800}
                />
            </div>
            <div>
                <h2 className='text-3xl mb-2 font-semibold'>Never miss a drop</h2>
                <p className='text-lg'>Big things are coming! Subscribe to get early access, updates, and exclusive drops.  No spam, just vibes.</p>
                
                <div className='flex items-center gap-1 mt-8'>
                    <span className='bg-[var(--icons-bg-color)] text-[var(--main-bg-color)] px-2 py-1 rounded-xl  text-center mr-1'>01</span>
                    <small className='font-bold text-lg'>Get more discount</small>
                </div>

                <div className='flex items-center gap-1 mt-8'>
                    <span className='bg-[var(--icons-bg-color)] text-[var(--main-bg-color)] px-2 py-1 rounded-xl  text-center mr-1'>02</span>
                    <small className='font-bold text-lg'>Get premium magazines</small>
                </div>

                <div className='mt-12 p-4 w-[80%] rounded-xl bg-[var(--icons-bg-color)] text-[var(--main-bg-color)] flex items-center'>
                    <input type="email" placeholder='Enter your email' className='bg-transparent border-none outline-none w-[90%] placeholder:text-[var(--main-bg-color)]'/>
                    <RiSendPlaneFill className='text-2xl cursor-pointer transition-transform duration-300 hover:scale-125'/>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Subscribe