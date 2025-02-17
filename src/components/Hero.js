import userData from '@/constants/data';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white dark:bg-black px-4">
      <div className="flex flex-col items-center gap-4 md:h-screen max-w-7xl mx-auto pb-10 ">
        <Image
          src={userData.profileUrl}
          alt="profile"
          width={240}
          height={240}
          className=" rounded-full md:w-60 md:h-60 w-52 h-52"
        />
        <h1 className=" text-[#C88A57] font-semibold text-3xl md:text-5xl">
          {userData.name}
        </h1>
        <h2 className="text-xl md:text-2xl dark:text-gray-50 text-black font-semibold">
          {userData.designation}
        </h2>
        <h3 className="text-base md:text-lg text-center md:mx-44 dark:text-gray-200">
          {userData.about.description}
        </h3>
      </div>
    </div>
  );
};

export default Hero;
