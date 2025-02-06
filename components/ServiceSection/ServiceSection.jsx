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
              alt = "Filter & Disover"
              width={100}
              height={100}
            />
            <p className='my-4'>{/* sevice_box_item_step */}
              <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 1</span>
            </p>
            <h3 className='font-semibold'>Filter & Discover</h3>
            <p>description 1</p>
        </div>
        <div className='flex flex-col items-center sm:gap-2'>{/* service1 */}
            <Image 
              src={images.service4}
              alt = "Filter & Disover"
              width={100}
              height={100}
            />
            <p className='my-4'>{/* sevice_box_item_step */}
            <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 4</span>
            </p>
            <h3 className='font-semibold'>Filter & Discover</h3>
            <p>description 4</p>
        </div>
        <div className='flex flex-col items-center sm:gap-2'>{/* service1 */}
            <Image 
              src={images.service2}
              alt = "Connect Wallet"
              width={100}
              height={100}
            />
            <p className='my-4'>{/* sevice_box_item_step */}
            <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 2</span>
            </p>
            <h3 className='font-semibold'>Connect Wallet</h3>
            <p>description 2</p>
        </div>
        <div className='flex flex-col items-center sm:gap-2'>{/* service1 */}
            <Image 
              src={images.service3}
              alt = "Start Trading"
              width={100}
              height={100}
            />
            <p className='my-4'>{/* sevice_box_item_step */}
            <span className='px-6 py-2 bg-[var(--shadow-dark-color)] text-[var(--icons-dark-color)] rounded-2xl'>Step 3</span>
            </p>
            <h3 className='font-semibold'>Start Trading</h3>
            <p>description 3</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection