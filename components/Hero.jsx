import React from 'react'

const Hero = () => {
  return (
    <div className="">
      
      

      <div className=''>
        <div className="">

          <div className='h-full flex flex-col items-center justify-center text-center space-y-6'>
                <h1 className="text-6xl font-bold font-mono mr-15">WHICH TEAM ARE YOU?</h1>
  
                <div className="gap-80 flex justify-between items-center pb-18">
                    <h1 className="text-5xl font-semibold text-[#f3b440] bg-[#312581] w-52 h-18 flex items-center justify-center rounded-lg pb-1 font-serif">
                      PEACH
                    </h1>

                    <h1 className="text-5xl font-semibold text-[#312581] bg-[#f3b440] w-88 h-18 flex items-center justify-center rounded-lg pb-1 font-serif">
                        BLUEBERRY
                    </h1>
                </div>
            </div>
          
        </div>

        <h1 className='absolute inset-0 text-4xl font-bold font-mono flex justify-center items-center text-center mt-75'>Discover our new flavors in one of our <div className='flex justify-center items-center bg-[#312581] text-[#f3b440] h-12 w-35 ml-3 transition-all duration-400 transform hover:scale-108 hover:bg-[#f3b440] hover:text-[#312581] border border-2 rounded-lg'>STORES</div></h1>
      </div>      

      <div className="flex flex-wrap justify-center gap-38">
          <h1 className="text-5xl font-semibold text-[#f3b440] bg-[#312581] w-52 h-18 flex items-center justify-center rounded-lg pb-1 font-serif">
            PEACH
          </h1>
          <h1 className="text-5xl font-semibold text-[#312581] bg-[#f3b440] w-88 h-18 flex items-center justify-center rounded-lg pb-1 font-serif">
            BLUEBERRY
          </h1>
        </div>
    </div>

  )
}

export default Hero