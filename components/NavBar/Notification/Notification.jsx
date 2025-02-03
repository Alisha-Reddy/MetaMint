import React from 'react'
import Image from 'next/image';
import images from "@/img"

const Notification = () => {
  return (
    <div className='absolute px-8 py-4 shadow-[1rem_1rem_2rem_rgba(0,0,0,0.25)] text-base w-96 rounded-2xl z-50 bg-[var(--main-bg-color)]'>
      <p className='text-xl font-semibold mb-8'>Notification</p>
      <div className='flex items-start gap-4 p-4 transition-all duration-300 ease-in hover:bg-[var(--icons-color)] hover:text-[var(--shadow-dark-color)] hover:rounded-3xl'> 
        <div className='rounded-[5rem]'>
          <Image 
          src={images.user1} 
          alt="profile image"
          width={50}
          height={50}
          className="rounded-[5rem]"
          />
        </div>
        <div>
          <h4 className='font-semibold'>Alisha Reddy</h4>
          <p className='text-[15px] my-2 relative '>Measure action your user...</p>
          <h6>3 minutes ago</h6>
        </div>
        <span className='w-2 h-2 rounded-full bg-[#00FFFF]'></span>
      </div>
    </div>
  );
}

export default Notification