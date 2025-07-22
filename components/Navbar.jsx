import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Navbar = () => {

    return (
    <div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl h-14 flex justify-center items-center mb-10 backdrop-blur-md bg-gradient border border-white/30 shadow-lg rounded-full z-50">
        <div className="flex justify-between space-x-25 text-[#faedcd]">
          <a href="/">
            <p className="items h-12 px-6 font-bold rounded-full font-[quicksand] flex items-center text-[18px] justify-center transition-all duration-300 transform hover:scale-130 w-35 hover:bg-[#f5b366] hover:text-[#2d222f]">
              HOME
            </p>
          </a>
          <a href="/Flavors">
            <p className="items h-12 px-6 font-bold rounded-full font-[quicksand] flex items-center text-[18px] justify-center transition-all duration-300 transform hover:scale-130 w-35 hover:bg-[#f5b366] hover:text-[#2d222f]">
              FLAVORS
            </p>
          </a>
          <a href="/Locations">
            <p className="items h-12 px-6 font-bold rounded-full font-[quicksand] flex items-center text-[18px] justify-center transition-all duration-300 transform hover:scale-130 w-35 hover:bg-[#f5b366] hover:text-[#2d222f]">
              LOCATIONS
            </p>
          </a>
          <a href="/About">
            <p className="items h-12 px-6 font-bold rounded-full font-[quicksand] flex items-center text-[18px] justify-center transition-all duration-300 transform hover:scale-130 w-35 hover:bg-[#f5b366] hover:text-[#2d222f]">
              ABOUT US
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
