import React from 'react'
import Image from 'next/image';

const Selling = () => {
    return (
        <div className='w-screen h-full flex items-center justify-center py-8 px-4 sm:px-8 font-poppins flex-col gap-12'>
            <div className='w-screen flex items-center justify-center'>
                <div className='w-full flex-wrap flex justify-center max-w-5xl gap-y-8 gap-x-6'>
                    <div className='flex flex-col justify-center items-center gap-3 w-[120px]'>
                        <Image
                            src="/Svg/S1.svg"
                            alt="Priority Support"
                            width={50}
                            height={50}
                        />
                        <div className='font-semibold text-center'>Priority Support</div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 w-[120px]'>
                        <Image
                            src="/Svg/S2.svg"
                            alt="Drone Crash Warranty"
                            width={50}
                            height={50}
                        />
                        <div className='font-semibold text-center'>Drone Crash Warranty</div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 w-[120px]'>
                        <Image
                            src="/Svg/S3.svg"
                            alt="Free Consultation"
                            width={50}
                            height={50}
                        />
                        <div className='font-semibold text-center'>Free Consultation</div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 w-[120px]'>
                        <Image
                            src="/Svg/S4.svg"
                            alt="Secure payment"
                            width={50}
                            height={50}
                        />
                        <div className='font-semibold text-center'>Secure Payment</div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 w-[120px]'>
                        <Image
                            src="/Svg/S5.svg"
                            alt="Easy Accessibility"
                            width={50}
                            height={50}
                        />
                        <div className='font-semibold text-center'>Easy Accessibility</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selling;