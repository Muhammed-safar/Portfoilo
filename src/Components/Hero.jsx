import React from 'react'
import Skills from './Skills'
import wavePattern from '../assets/wave-pattern.svg'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between h-screen w-full pt-5 md:pt-0 relative'>
      {/* Background Pattern */}
      <div 
        className="absolute top-0 bottom-0 left-[50%] -ml-[50vw] w-screen h-[130%] md:h-full pointer-events-none opacity-50 z-[-1]" 
        style={{ backgroundImage: `url(${wavePattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
      />
      <div className='flex flex-col h-full w-full text-lightbg md:justify-center gap-4 md:gap-8'>
        <div className='flex '>
            <h2 className='md:text-3xl font-semibold font-sans'>
                Hey, my name is
            </h2>
        </div>
        <div className='flex gap-1 md:flex-col relative w-fit'>
            <h1 className='text-3xl md:text-6xl font-bold relative z-10'>
                MUHAMMED 
            </h1>
            <h1 className='text-3xl md:text-6xl font-bold relative z-10'>
                 SAFAR N.P
            </h1>
            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-[110%] h-4 md:h-6 text-[#ffcc00] z-0" viewBox="0 0 200 20" preserveAspectRatio="none">
               <path fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" d="M 5,15 Q 50,5 100,10 T 195,15"></path>
            </svg>
        </div>
        <div className='flex'></div>
        <div className='flex text-2xl font-semibold font-sans text-[#dddcdc]'>FULL STACK DEVELOPER</div>
      </div>


      <div className='flex  h-full w-full justify-center md:relative '>
        <div className='flex bg-accent h-[430px] w-[310px]  md:h-[630px] md:w-[410px] rounded-full md:absolute -bottom-45 my-5 md:my-0'>

        </div>
      </div>

      <div className='flex md:flex-col items-center md:items-end  justify-center text-lightbg h-full w-full gap-8'>
        <div className='flex flex-col  items-center md:items-end gap-2 '>
            <h3 className='flex  text-2xl font-semibold font-sans'><span className='hidden md:flex pr-1'>Years of</span> experience</h3>
            <h1 className='flex text-5xl md:text-6xl font-bold'>1 
                <p className='font-semibold '>+</p>
            </h1>
        </div>
        <div className='flex flex-col items-center md:items-end gap-2 '>
            <h3 className='flex text-2xl font-semibold font-sans'>Projects <span className='hidden md:flex pr-1'>Done</span>
            </h3>
            <h1 className='flex text-5xl md:text-6xl font-bold'>10 
                <p className='font-semibold '>+</p>
            </h1>
        </div>
        <div className='flex flex-col items-center md:items-end gap-2 '>
            <h3 className='flex text-2xl font-semibold font-sans'> <span className='hidden md:flex pr-1'>Happy</span> Clients</h3>
            <h1 className='flex text-5xl md:text-6xl font-bold'>5 
                <p className='font-semibold '>+</p>
            </h1>
        </div>
      </div>
     
    </div>
  )
}

export default Hero
