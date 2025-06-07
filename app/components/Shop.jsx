import React from 'react'
import Image from 'next/image'

const Shop = () => {
  return (
    <div className='w-screen bg-(--Segment)'>
        {/* Structure */}
        <div>
             {/* Main */}
             <div className='font-bold font-poppins text-3xl'>SHOP BY TYPE</div>
             <div>
                <div>
                    <Image
                    src={"/SBT/Type1.png"} width={200} height={200}
                    />
                    <div className='font-semibold text-base'>Drones</div>
                </div>
               
             </div>
        </div>
    </div>
  )
}

export default Shop;
