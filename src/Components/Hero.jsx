import React from 'react'
import wavePattern from '../assets/wave-pattern.svg'
import { FiArrowRight } from 'react-icons/fi'

const Hero = ({ onOpenProjects }) => {
  return (
    <div className='relative flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-96px)] w-full py-10 md:py-0 overflow-visible'>
      
      {/* Background Decorative Pattern */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0 animate-float-slow"
        style={{ 
          backgroundImage: `url(${wavePattern})`, 
          backgroundSize: '800px', 
          backgroundPosition: 'center',
          maskImage: 'radial-gradient(circle, black 0%, transparent 80%)'
        }}
      />

      {/* Left Content: Text & CTA */}
      <div className='relative z-10 flex flex-col w-full md:w-6/12 gap-6' data-aos="fade-right">
        <div className='space-y-2'>
          <h2 className='text-accent font-medium tracking-widest uppercase text-sm md:text-base animate-pulse'>
            Full Stack Developer
          </h2>
          <div className='relative w-fit'>
            <h1 className='text-4xl md:text-7xl font-black text-lightbg leading-tight tracking-tight'>
              MUHAMMED <br />
              <span className='text-accent'>SAFAR N.P</span>
            </h1>
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-accent/30 z-[-1]" viewBox="0 0 170 35" preserveAspectRatio="none">
              <path fill="currentColor" d="M13,8 C19,6 27,5 32,9 C35,11 34,14 31,16 C27,18 22,20 19,25 C17,29 19,33 23,34 C29,35 36,32 42,30 C60,22 80,19 100,18 C119,17 139,18 157,18 C160,18 163,17 163,15 C163,13 160,14 157,14 C138,14 118,14 100,15 C80,16 60,19 41,27 C36,29 30,32 25,30 C21,29 20,25 23,22 C25,18 30,16 34,14 C37,12 39,9 36,6 C31,2 23,2 17,4 C12,5 8,7 4,10 C1,11 4,15 7,13 C9,12 11,10 13,8 Z"></path>
            </svg>
          </div>
        </div>
        
        <p className='text-lg md:text-xl text-lightbg/80 font-light max-w-md leading-relaxed'>
          Crafting high-performance, beautiful web experiences with modern technologies. 
          Specializing in <span className='text-lightbg font-semibold'>MERN stack.</span>
        </p>

        <div className='flex flex-wrap gap-4 pt-4'>
          <button 
            onClick={onOpenProjects}
            className='px-8 py-4 bg-accent text-primary font-bold rounded-full hover:scale-105 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(242,201,76,0.3)]'
          >
            View My Work
            <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
          </button>
        </div>
      </div>

      {/* Right Content: Modern 3D Photo Placeholder */}
      <div className='relative z-10 flex justify-center items-center w-full md:w-5/12 my-12 md:my-0' 
           style={{ perspective: '1000px' }}
           data-aos="fade-left">
        
        {/* The "Future Photo" Frame with 3D Tilt */}
        <div className='relative w-[220px] h-[300px] md:w-[300px] md:h-[400px] rounded-[3rem] border-2 border-dashed border-accent/20 flex flex-col items-center justify-center bg-lightbg/5 backdrop-blur-md overflow-hidden group hover:border-accent/40 transition-all duration-700 shadow-2xl animate-[float_6s_ease-in-out_infinite]'
             style={{ transform: 'rotateY(-15deg) rotateX(10deg)' }}>
          
          {/* Decorative Corner Accents */}
          <div className='absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-accent/30' />
          <div className='absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-accent/30' />
          
          {/* Placeholder Text */}
          <div className='text-center p-6 space-y-3 group-hover:scale-105 transition-transform duration-500'>
            <div className='w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2'>
              <FiArrowRight className='text-accent -rotate-45' size={24} />
            </div>
            <p className='text-accent/60 font-bold uppercase tracking-widest text-[10px]'>Portrait Area</p>
            <p className='text-lightbg/30 text-xs'>3D Space for <br /> your photo</p>
          </div>

          {/* Floating Glow on Hover */}
          <div className='absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
        </div>

        {/* Glow Effect behind the frame */}
        <div className='absolute w-48 h-48 md:w-80 md:h-80 bg-accent/10 rounded-full blur-[100px] z-[-1] animate-glow-pulse' />
      </div>

    </div>
  )
}

export default Hero
