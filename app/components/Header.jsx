"use client"
import React from 'react';
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-screen pt-24 font-poppins overflow-hidden mb-16 " id='home'>
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-24 gap-12">

        {/* Left: Text */}
        <div className="w-full md:w-2/5 flex flex-col gap-4 text-center md:text-left">

          {/* Title */}
          <div className="flex flex-col z-10">
            <div className="text-5xl sm:text-6xl md:text-8xl font-bold">THE</div>
            <div className="text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-[var(--LG1)] to-[var(--LG2)] bg-clip-text text-transparent">
              HYDROGEN
            </div>
            <div className="text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-[var(--LG1)] to-[var(--LG2)] bg-clip-text text-transparent">
              POWERED DRONE
            </div>
          </div>

          {/* Description */}
          <span className="text-sm sm:text-base font-medium text-gray-700">
            Experience the future of sustainable aerial photography with our green energy-powered drones designed for minimal environmental impact.
          </span>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 text-sm justify-center md:justify-start">
            <span
              role="button"
              tabIndex={0}
              className="px-6 py-3 rounded-3xl font-medium text-white bg-gradient-to-r from-[var(--LG1)] to-[var(--LG2)] cursor-pointer"
              onClick={() => window.location.href = "mailto:mananbatradev@gmail.com?subject=Hello&body=Message%20here"}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.location.href = "mailto:mananbatradev@gmail.com?subject=Hello&body=Message%20here"; }}
            >
              Chat Now
            </span>

            <span
              role="button"
              tabIndex={0}
              className="px-6 py-3 bg-black text-white rounded-3xl font-medium cursor-pointer"
              onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Learn More
            </span>
          </div>
        </div>

        {/* Right: Drone Image */}
        <div className="w-full md:w-3/5 flex items-center justify-center md:justify-end z-0">
          <div className="animate-bounce-slow max-w-[90%] sm:max-w-[80%] md:max-w-full ">
            <Image
              src="/Images/Drone.png"
              alt="Drone"
              width={900}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
