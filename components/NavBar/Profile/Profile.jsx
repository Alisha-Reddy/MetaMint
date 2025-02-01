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
  ];

  const secondaryMenuItems = [
    { icon: <MdHelpCenter />, text: 'Help', link: '/help' },
    { icon: <TbDownload />, text: 'Disconnect', link: '/disconnect' },
  ];

  return (
    <div className='profile'>
      <div className='profile_account'>
        <Image
          src={images.user1}
          alt='User Profile Picture'
          width={50}
          height={50}
          className='profile_account_img'
        />
        <div className='profile_account_info'>
          <p>Shoaib Bhai</p>
          <h6>X08347583458...</h6>
        </div>

        <div className='profile_menu'>
          <div className='profile_menu_one'>
            {menuItems.map((item, index) => (
              <div key={index} className='profile_menu_one_item'>
                {item.icon}
                <Link href={item.link}>{item.text}</Link>
              </div>
            ))}
          </div>
        </div>

        <div className='profile_menu_two'>
          {secondaryMenuItems.map((item, index) => (
            <div key={index} className='profile_menu_one_item'>
              {item.icon}
              <Link href={item.link}>{item.text}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
