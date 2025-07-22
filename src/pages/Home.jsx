import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Home = () => {

    useGSAP(()=>{
      gsap.set('#b', {
        color: '#f3b440',
        backgroundColor: '#312581'
      });

      gsap.from('#header', {
        opacity:0,
        scale:0.4,
        duration:1.5,
        ease:'elastic.inOut'
      })
      gsap.from('#subhead', {
        scale:0.4,
        duration:1,
        opacity:0,
        ease:'circ.inOut'
      })
      gsap.from('#exclamation', {
        rotation:500,
        scale:2,
        opacity:0
      })
      gsap.fromTo('#b', 
      {
        color: '#f3b440',
        backgroundColor: '#312581'
      }, 
      {
        color: '#312581',
        backgroundColor: '#f3b440',
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
      gsap.from('.leftimg', {
        x:-50,
        duration:1.2,
        opacity:0,
        ease:'sine.inOut'
      })
      gsap.from('.rightimg', {
        x:50,
        duration:1.2,
        opacity:0,
        ease:'sine.inOut'
      })

      
    },[]);

  return (
    <div className="relative w-screen h-screen">
      {/* Left Image */}
      <img
        className=" leftimg absolute top-0 left-0 h-full object-contain z-0"
        src="../src/assets/heroleft.png"
        alt=""
      />

      {/* Right Image */}
      <img
        className=" rightimg absolute top-0 right-0 h-full object-contain z-0"
        src="../src/assets/heroright.png"
        alt=""
      />

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-12 ">
        <h1 className="text-[45px] pr-8 font-bold font-[rocksalt] [text-shadow:2px_2px_0_white]" id='header'>WHICH TEAM ARE YOU?</h1>
            <h1 className='absolute inset-0 text-[29px] font-bold font-[saira] flex justify-center items-center text-center mt-65 mr-8 ' id='subhead'><div id='headpart'>Discover our new</div><div className='flex justify-center items-center h-12 w-35 ml-3 transition-all duration-400 transform hover:scale-108 rounded-lg' id='b'><a href="/Flavors">FLAVORS</a></div><div className='ml-3 text-5xl' id='exclamation'>!</div></h1>
      </div>
    </div>
  );
};

export default Home;
