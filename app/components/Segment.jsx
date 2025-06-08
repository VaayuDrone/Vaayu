import React from 'react'
import Image from 'next/image';

const Segment = () => {
  return (
    <div className='w-screen bg-(--Segment) h-full flex items-center justify-center py-16' id='drones'>
      {/* Structure */}
      <div className='w-4/5 max-w-5xl bg-white rounded-3xl flex flex-col px-6 md:px-8 py-10 gap-12 relative '>
        {/* Main Title */}
        <div className='font-poppins sm:text-3xl text-3xl text-(--TEXT1) sm:text-left font-bold'>
          OUR SEGMENTS
        </div>

        <div className='flex flex-col md:flex-row md:items-stretch gap-6 font-poppins justify-center'>
          {/* Box 1 */}
          <div className='relative w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden'>
            <div className='absolute inset-0 bg-[url("/Images/Videop.png")] bg-cover bg-center'></div>
            <div className='relative z-10 text-white h-1/2 justify-center flex flex-col  items-center p-4'>
              <div className='w-3/5 text-center'>
                <div className='text-2xl md:text-2xl font-semibold'>Medicine<br />Delivery</div>
                <div className='text-xs mt-1'>
                  Professional and Quick Medicine Delivery
                </div>
                <div className='text-xs mt-3 cursor-pointer'>Learn More {'>'}</div>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className='relative w-full  md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden'>
            <div className='absolute inset-0 bg-[url("/Images/Enterprise.png")] bg-cover bg-center'></div>
            <div className='relative z-10 text-white h-1/2 justify-center flex flex-col  items-center p-4'>
              <div className='w-3/5 text-center'>
                <div className='text-2xl md:text-2xl font-semibold'>Enterprise</div>
                <div className='text-xs mt-1'>
                  Drone Solutions for a New Generation of Work
                </div>
                <div className='text-xs  mt-3 cursor-pointer'>Learn More {'>'}</div>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className='relative w-full  md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden'>
            <div className='absolute inset-0 bg-[url("/Images/Agriculture.png")] bg-cover bg-center'></div>
            <div className='relative z-10 text-white h-1/2 justify-center flex flex-col  items-center p-4'>
              <div className='w-3/5 text-center'>
                <div className='text-2xl md:text-2xl font-semibold'>Agriculture</div>
                <div className='text-xs mt-1'>
                  Efficient and Intelligent Agricultural Solution
                </div>
                <div className='text-xs mt-3 cursor-pointer'>Learn More {'>'}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/Images/Illustration.png"
            alt="Illustration"
            width={200}
            height={200}
            className="absolute bottom-0 left-0 translate-x-[-50%] translate-y-1/2"
          />
        </div>
      </div>

    </div>
  )
}

export default Segment;
