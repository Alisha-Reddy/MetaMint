import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from 'react-icons/md';
import { TbDownload } from 'react-icons/tb';
import images from '@/img';

const Profile = () => {
  const menuItems = [
    { icon: <FaUserAlt />, text: 'My Profile', link: '/myprofile' },
    { icon: <FaRegImage />, text: 'My Items', link: '/my-items' },
    { icon: <FaUserEdit />, text: 'Edit Profile', link: '/edit-profile' },
    { icon: <MdHelpCenter />, text: 'Help', link: '/help' },
    { icon: <TbDownload />, text: 'Disconnect', link: '/disconnect' },
  ];


  return (
    <div>
      <div className='flex-row justify-start p-2'>
        <div className='flex items-center gap-8'>
          <Image
            src={images.user1}
            alt='User Profile Picture'
            width={50}
            height={50}
            className='rounded-full'
          />
          <div className='my-2'>
            <p className='font-semibold'>Alisa Reddy</p>
            <h6>X08347583458...</h6>
          </div>
        </div>


            {menuItems.map((item, index) => (
              <div key={index} className='flex items-center gap-6 px-2 py-4 transition-all duration-300 hover:bg-[var(--icons-bg-color)] hover:text-[var(--icons-dark-color)] hover:rounded-md'>
                {item.icon}
                <Link href={item.link}>{item.text}</Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Profile;
