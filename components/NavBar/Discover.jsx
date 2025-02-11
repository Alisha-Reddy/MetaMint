import Link from 'next/link'
import React from 'react'

const Discover = () => {
  const discover = [
    { name: "Collection", link: "collection" },
    { name: "Search", link: "search" },
    { name: "Author Profile", link: "author-profile" },
    { name: "NFT Details", link: "NFT-details" },
    { name: "Account Setting", link: "account-setting" },
    { name: "Connect Wallet", link: "connect-wallet" },
    { name: "Blog", link: "blog" },
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className="p-2 z-50 transition-all duration-300 ease-in hover:bg-[var(--icons-bg-color)] hover:text-[var(--icons-dark-color)] hover:rounded-md">
          <Link href={el.link}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
