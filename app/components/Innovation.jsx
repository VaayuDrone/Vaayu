import React from 'react';
import Image from 'next/image';

const Innovation = () => {
  return (
    <div className="w-screen flex items-center justify-center py-24 ">
      <div className="w-[70%] max-w-4xl flex flex-col gap-10 relative items-center mx-auto">
        <div className="font-poppins text-2xl font-bold text-center w-1/2">
          Standing at the Forefront of Innovation
        </div>

        <p className="font-poppins text-sm text-center max-w-xl mx-auto">
          As we explore new technology, we push the capabilities of what is possible, driving progress through continuous innovation.
        </p>

        <div className="flex gap-4 font-poppins justify-center w-full">
          <div className="relative w-1/2 aspect-square rounded-xl overflow-hidden">
            <div className='absolute inset-0 bg-[url("/Images/Innovation1.png")] bg-cover bg-center'></div>
            
            <div className="relative z-10  flex flex-col items-center gap-8 p-6 pt-8">
              <div className="text-xs text-center">
                Engineering, Science & Technology
              </div>
              <div className="text-lg font-semibold leading-tight text-center">
                Our Awards
              </div>
              <div className="text-xs cursor-pointer underline text-center">
                Learn More
              </div>
            </div>
          </div>

          <div className="relative w-1/2 aspect-square rounded-xl overflow-visible"> 
            <div className="absolute inset-0 rounded-xl overflow-hidden bg-[url('/Images/Innovation2.png')] bg-cover bg-center"></div>

            <div className="absolute -top-36 -right-32 z-20 rotate-180">
              <Image
                src="/Images/Illustration2.png"
                alt="Illustration"
                width={300}
                height={300}
              />
            </div>

            <div className="relative z-10 text-white flex flex-col items-center gap-8 p-6 pt-8">
              <div className="text-xs text-center">
                Industry Insight Report
              </div>
              <div className="text-lg font-semibold text-center">
                Our reports
              </div>
              <div className="text-xs cursor-pointer underline text-center">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
