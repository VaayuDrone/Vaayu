import React from 'react'
import Image from "next/image";

const Navbar = () => {
    return (
        <div className='w-screen h-30 flex items-center justify-center '>

            {/*Structure*/}
            <div className='w-full h-full flex items-center justify-between pt-6'>
                {/* Main */}
                <div className='pl-24'>
                    {/* Logo */}
                    <Image
                        src="/Svg/Vaayu.svg"
                        alt="Logo"
                        width={200}
                        height={200}
                        className='cursor-pointer'
                    />
                </div>
                <div className='flex items-center gap-12 pr-24'>
                    {/* Navigation */}
                    <span className='font-poppins cursor-pointer'>Drones</span>
                    <span className='font-poppins cursor-pointer'>Portable</span>
                    <span className='font-poppins cursor-pointer'>Specialized</span>
                    <span className='font-poppins cursor-pointer'>Support</span>
                    <span className='font-poppins cursor-pointer'>About</span>
                    <span className='flex items-center justify-center'>
                        <Image
                        src="/Svg/Shop.svg"
                        alt="Shop"
                        width={30}
                        height={30}
                        className='cursor-pointer'
                    />
                    <Image
                        src="/Svg/Bag.svg"
                        alt="Bag"
                        width={30}
                        height={30}
                        className='cursor-pointer'
                    />
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Navbar
