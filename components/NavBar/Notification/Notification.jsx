import React from 'react'
import Image from 'next/image';
import images from "@/img"

const Notification = () => {
  return (
    <div className='notification'>
      <p>Notification</p>
      <div className='notification_box'>
        <div className='notification_box_img'>
          <Image 
          src={images.user1} 
          alt="profile image"
          width={50}
          height={50}
          className="notification_box_img"
          />
        </div>
        <div className='notification_box_info'>
          <h4>Shoaib Akhter</h4>
          <p>Measure action your user...</p>
          <h6>3 minutes ago</h6>
        </div>
        <span className='notification_box_new'></span>
      </div>
    </div>
  );
}

export default Notification