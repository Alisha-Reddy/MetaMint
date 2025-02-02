import React from 'react'
import Link from 'next/link'

const HelpCenter = () => {
  const helpCenter = [
    { name: "About", link: "about" },
    { name: "Contact Us", link: "contact-us" },
    { name: "Sign Up", link: "sign-up" },
    { name: "Sign In", link: "sign-in" },
    { name: "Subscription", link: "subscription" },
  ];

  return (
    <div>
      {helpCenter.map((el, i) => (
        <div key={i + 1} className="px-2 py-4 z-50 transition-all duration-300 ease-in hover:bg-[var(--icons-color)] hover:text-[var(--shadow-dark-color)] hover:rounded-md">
          <Link href={el.link}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default HelpCenter