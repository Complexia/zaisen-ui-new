import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'NFTs', href: '/nfts' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Promotions', href: '/promotions' },
    { name: 'News', href: '/news' },
    { name: 'Analytics', href: '/analytics' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-1/6 bg-gradient-to-b from-purple-500 to-purple-800  transition-all duration-300 z-10">
    
      <div className="p-4">
        <Link href="/">
          <span className="cursor-pointer text-white font-bold text-2xl">zaisen</span>
        </Link>
      </div>
      <ul className="h-full">
        {navItems.map((item, index) => (
          <li key={index} className="mb-2">
            <Link href={item.href}>
              <span className="block px-4 py-2 text-white hover:bg-purple-500 cursor-pointer">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
