import React from 'react'
import Image from 'next/image';

const Selling = () => {
    return (
        <div className='w-screen h-full flex items-center justify-center py-8 font-poppins flex-col gap-12'>
            {/* Icons Row */}
            <div className='w-screen h-40 flex items-center justify-center'>
                <div className='w-4/5 flex justify-between max-w-5xl flex-wrap gap-4'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <Image
                            src="/Svg/S1.svg"
                            alt="Priority Support"
                            width={50}
                            height={50}
                        />
                        <div className='font-semibold'>Priority Support</div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <Image
                            src="/Svg/S2.svg"
                            alt="Drone Crash Warranty"
                            width={50}
                            height={50}
                        />
                        <div className='font-semibold'>Drone Crash Warranty</div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <Image
                            src="/Svg/S3.svg"
                            alt="Free Consultation"
                            width={50}
                            height={50}
                        />
                        <div className='font-semibold'>Free Consultation</div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <Image
                            src="/Svg/S4.svg"
                            alt="Secure payment"
                            width={50}
                            height={50}
                        />
                        <div className='font-semibold'>Secure Payment</div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <Image
                            src="/Svg/S5.svg"
                            alt="Easy Accessibility"
                            width={50}
                            height={50}
                        />
                        <div className='font-semibold'>Easy Accessibility</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selling;
