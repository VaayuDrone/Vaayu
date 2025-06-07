'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Drones', 'Portable', 'Specialized', 'Support', 'About'];

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-[1000] font-poppins border-b border-gray-200">
      <div className="max-w-[1920px] mx-auto px-6 md:px-24 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image src="/Svg/Vaayu.svg" alt="Logo" width={150} height={60} className="cursor-pointer" />
        </div>

        {/*for Desktop view*/}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <span key={idx} className="cursor-pointer hover:text-green-600 transition">
              {link}
            </span>
          ))}
          <div className="flex gap-4 invert">
            <Image src="/Svg/Shop.svg" alt="Shop" width={24} height={24} />
            <Image src="/Svg/Bag.svg" alt="Bag" width={24} height={24} />
          </div>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* for Mobile view  */}
      {isOpen && (
        <ul className="md:hidden px-6 pt-2 pb-6 bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <li key={idx} className="cursor-pointer hover:text-green-600">
                {link}
              </li>
            ))}
            <div className="flex gap-4 pt-4">
              <Image src="/Svg/Shop.svg" alt="Shop" width={24} height={24} />
              <Image src="/Svg/Bag.svg" alt="Bag" width={24} height={24} />
            </div>
          </ul>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
