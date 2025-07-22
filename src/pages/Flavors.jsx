import React from "react";
import peach from '../assets/peach.png';
import blueberry from '../assets/blueberry.png';
import watermelon from '../assets/watermelon.png';
import cherry from '../assets/cherry.png';
import lemon from '../assets/lemon.png';
import cocnut from '../assets/coconut.png';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Flavors = () => {

  useGSAP(()=>{
    gsap.from('#sc', {
      x:60,
      duration:0.5,
      opacity:0,
      ease:'back.inOut'
    })
    gsap.from('#header', {
      opacity:0,
      y:-50,
      duration:0.5,
      ease:'elastic.inOut'
    })
  },[])

  return (
    <div className='h-screen'>

      <div id="header" className="flex justify-center pt-13">
        <h1 className="text-5xl font-bold font-[rocksalt] [text-shadow:2px_2px_0_white]">OUR FLAVORS</h1>
      </div>

      <div id="sc" className="flex justify-between h-screen items-center px-10 pb-50">
        <div className="w-55">
          <img className="transition-all duration-300 transform hover:scale-115" id="coconut" src={cocnut} alt="" />
        </div>
        <div className="w-55">
          <img className="transition-all duration-300 transform hover:scale-115" src={watermelon} alt="" />
        </div>
        <div className="flex items-center justify-center w-55 mx-25 space-x-4">
          <img className="transition-all duration-300 transform hover:scale-115 mt-12" src={peach} alt="" />
          <img className="transition-all duration-300 transform hover:scale-115 mt-8" src={blueberry} alt="" />
        </div>
        <div className="w-55">
          <img className="transition-all duration-300 transform hover:scale-115" src={cherry} alt="" />
        </div>
        <div className="w-55">
          <img className="transition-all duration-300 transform hover:scale-115 mt-2" src={lemon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Flavors;