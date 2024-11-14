import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center bg-black bg-opacity-40">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="golf/public/hero.mp4"
      ></video>
      <div className="relative z-10">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-md">
          EAT. DRINK. PLAY.
        </h1>
        <h2 className="text-2xl font-bold mt-4 text-white">
          WELCOME TO SIDCUP FAMILY GOLF!
        </h2>
        <p className="w-2/3 mx-auto text-lg mt-4 text-white">
          Sidcup Family Golf is a multipurpose golf facility located in Sidcup, South East London.
          Passionate about technology, player development, and making golf fun and accessible to everyone.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
