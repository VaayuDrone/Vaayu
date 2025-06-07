import React from 'react';
import Image from 'next/image';

const Innovation = () => {
    return (
        <div className="w-screen flex items-center justify-center py-24">
            <div className="w-[70%] max-w-4xl flex flex-col gap-10 relative items-center mx-auto">
                <div className="font-poppins text-2xl font-bold text-center w-1/2">
                    Standing at the Forefront of Innovation
                </div>

                <p className="font-poppins text-sm text-center max-w-xl mx-auto">
                    As we explore new technology, we push the capabilities of what is possible, driving progress through continuous innovation.
                </p>

                <div className="flex gap-4 font-poppins justify-center w-full">
                    {/* Box 1 */}
                    <div className="relative w-1/2 aspect-square rounded-xl overflow-hidden">
                        <div className='absolute inset-0 bg-[url("/Images/Videop.png")] bg-cover bg-center'></div>
                        <div className="relative z-10 text-white h-1/2 flex flex-col items-center justify-center p-3">
                            <div className="w-4/5 text-center">
                                <div className="text-lg font-semibold leading-tight">Medicine<br />Delivery</div>
                                <div className="text-xs mt-1">
                                    Professional and Quick Medicine Delivery
                                </div>
                                <div className="text-xs mt-2 cursor-pointer underline">Learn More</div>
                            </div>
                        </div>
                    </div>

                    {/* Box 2 */}
                    {/* Box 2 */}
                    <div className="relative w-1/2 aspect-square rounded-xl overflow-hidden">
                        <div className='absolute inset-0 bg-[url("/Images/Enterprise.png")] bg-cover bg-center'></div>

                        <div className="relative z-10 text-white h-1/2 flex flex-col items-center justify-center p-3">
                            <div className="w-4/5 text-center">
                                <div className="text-lg font-semibold">Enterprise</div>
                                <div className="text-xs mt-1">
                                    Drone Solutions for a New Generation of Work
                                </div>
                                <div className="text-xs mt-2 cursor-pointer underline">Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-[calc(25% - 75px)] z-20">
                        <Image
                            src="/Images/Illustration.png"
                            alt="Illustration"
                            width={150}
                            height={150}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Innovation;
