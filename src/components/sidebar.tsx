import React from "react";
import Link from "next/link";

const Sidebar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Promotions", href: "/promotions" },
    { name: "Create", href: "/create" },
    { name: "Your Profile", href: "/profile" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-1/6 bg-gradient-to-b from-purple-500 to-purple-800  transition-all duration-300 z-10">
      <div className="p-4">
        <Link href="/">
          <span className="cursor-pointer text-white font-bold text-2xl">
            zaisan.
          </span>
        </Link>
      </div>
      <ul className="h-full mt-5 text-md font-bold">
        {navItems.map((item, index) => (
          <li key={index} className="mb-2">
            <Link href={item.href}>
              <span className="block px-4 rounded-r-xl py-2 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150 text-white hover:bg-purple-500 cursor-pointer">
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
