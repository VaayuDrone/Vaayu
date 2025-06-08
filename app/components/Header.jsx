"use client"
import React from 'react';
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-screen pt-24 font-poppins overflow-hidden mb-16 " id='home'>
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 gap-12 lg:pr-0">

        {/* Left: Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left z-10">

          {/* Title */}
          <div className="flex flex-col ">
            <div className="text-5xl sm:text-6xl md:text-8xl font-bold">THE</div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r  from-[var(--LG1)] to-[var(--LG2)] bg-clip-text text-transparent">
              HYDROGEN
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[var(--LG1)] to-[var(--LG2)] bg-clip-text text-transparent">
              POWERED DRONE
            </div>
          </div>

          {/* Description */}
          <span className="text-base md:text-lg font-medium text-gray-700 mt-4">
            Experience the future of sustainable aerial photography with our green energy-powered drones designed for minimal environmental impact.
          </span>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 justify-center md:justify-start">
            <span
              role="button"
              tabIndex={0}
              className="px-6 py-3 rounded-3xl font-medium text-white bg-gradient-to-r from-[var(--LG1)] to-[var(--LG2)] cursor-pointer"
              onClick={() => window.location.href = "mailto:vaayudelivery24@gmail.com?subject=Hello&body=Message%20here"}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.location.href = "mailto:vaayudelivery24@gmail.com?subject=Hello&body=Message%20here"; }}
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
        <div className="w-full md:w-3/5 flex  justify-center md:justify-end z-0">
          <div className=" w-full animate-bounce-slow max-w-[600px]  ">
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
