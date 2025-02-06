import React from 'react'
import Image from 'next/image'
import images from "@/img"

const ServiceSection = () => {
  return (
    <div className='w-[95%] sm:w-[90%] mx-12 my-auto '>{/* service */}
      <div className='grid grid-cols-4 gap-4 sm:gap-12 items-center text-center'>{/* service_box */}
        <div>{/* service_box_item */}
          <div>{/* service1 */}
            <Image 
              src={images.service1}
              alt = "Filter & Disover"
              width={100}
              height={100}
            />
            <p className=''>{/* sevice_box_item_step */}
              <span>Step 1</span>
            </p>
            <h3>Filter & Discover</h3>
            <p>description 1</p>
          </div>
        </div>
        <div>{/* service_box_item */}
          <div>{/* service1 */}
            <Image 
              src={images.service2}
              alt = "Connect Wallet"
              width={100}
              height={100}
            />
            <p className=''>{/* sevice_box_item_step */}
              <span>Step 2</span>
            </p>
            <h3>Connect Wallet</h3>
            <p>description 2</p>
          </div>
        </div>
        <div>{/* service_box_item */}
          <div>{/* service1 */}
            <Image 
              src={images.service3}
              alt = "Start Trading"
              width={100}
              height={100}
            />
            <p className=''>{/* sevice_box_item_step */}
              <span>Step 3</span>
            </p>
            <h3>Start Trading</h3>
            <p>description 3</p>
          </div>
        </div>
        <div>{/* service_box_item */}
          <div>{/* service1 */}
            <Image 
              src={images.service4}
              alt = "Filter & Disover"
              width={100}
              height={100}
            />
            <p className=''>{/* sevice_box_item_step */}
              <span>Step 4</span>
            </p>
            <h3>Filter & Discover</h3>
            <p>description 4</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection