import React from 'react';
import Image from 'next/image';

const Shop = () => {
  return (
    <div className='w-screen bg-(--Segment) pt-14 flex justify-center font-poppins  pb-20 z-10 px-4 sm:px-6'>
      <div className='flex flex-col gap-12 w-full max-w-6xl px-4'>
        <div className='font-bold text-2xl sm:text-3xl text-center'>SHOP BY TYPE</div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {[
            { src: "/SBT/Type1.png", label: "DRONES" },
            { src: "/SBT/Type2.png", label: "FPV DRONE<br />FRAMES" },
            { src: "/SBT/Type3.png", label: "FPV DRONE<br />EQUIPMENTS" },
            { src: "/SBT/Type4.png", label: "FPV DRONE<br />MOTORS" },
            { src: "/SBT/Type5.png", label: "FPV DRONE<br />ELECTRONICS" },
            { src: "/SBT/Type6.png", label: "CONTROLLER<br />& RECEIVER" },
            { src: "/SBT/Type7.png", label: "PROPELLOR<br />& TOOLS" },
            { src: "/SBT/Type8.png", label: "BATTERY<br />& CHARGER" },
          ].map(({ src, label }, i) => (
            <div key={i} className='flex flex-col gap-2 bg-(--SBT) rounded-2xl hover:bg-(--HSBT) cursor-pointer'>
              
              <div className='relative w-full aspect-square'>
                <Image
                  src={src}
                  alt={label.replace(/<br\s*\/?>/g, ' ')}
                  fill
                  className='object-cover'
                />
              </div>
           
              <div
                className='font-semibold text-base sm:text-base text-left pl-2 leading-tight py-2'
                dangerouslySetInnerHTML={{ __html: label }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop;
