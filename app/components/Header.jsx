import React from 'react';
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-screen mt-10 font-poppins">
      {/* Structure */}
      <div className="w-full flex">
        {/* Left: Text */}
        <div className="w-2/5 pl-24 flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-col">
            <div className="text-8xl font-bold">THE</div>
            <div className="text-8xl font-bold bg-gradient-to-r from-[var(--LG1)] to-[var(--LG2)] bg-clip-text text-transparent">
              DRONE
            </div>
          </div>
          
          {/* Description */}
          <span className="text-xs font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit itaque minima recusandae quaerat quod,
            temporibus nobis fugit error modi numquam omnis, iusto vitae obcaecati doloribus sed debitis est quidem aperiam?
            Ad est eligendi, amet a autem veritatis neque distinctio dolores esse tempora accusamus, sint harum impedit,
            eius cumque. Soluta aut adipisci corrupti error minus asperiores iure quia nihil quisquam fuga.
            Cumque perspiciatis deserunt doloremque, nobis unde sapiente quasi distinctio laboriosam consequatur
            perferendis accusamus rerum impedit tenetur quo sint alias repudiandae animi laudantium neque!
            Impedit, tenetur hic! Nulla molestiae error eos!
          </span>
          
          {/* Buttons */}
          <div className="flex gap-8 mt-4 text-xs">
            <span className="px-8 py-4 rounded-3xl font-medium text-white bg-gradient-to-r from-[var(--LG1)] to-[var(--LG2)] cursor-pointer">
              Chat Now
            </span>
            <span className="px-8 py-4 bg-black text-white rounded-3xl font-medium cursor-pointer">
              Learn More
            </span>
          </div>
        </div>

        {/* Right: Drone Image */}
        <div className="w-3/5 relative flex items-center justify-end">
          <div className="animate-bounce-slow pb-10">
            <Image
              src="/Images/Drone.png"
              alt="Drone"
              width={900}
              height={800}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;