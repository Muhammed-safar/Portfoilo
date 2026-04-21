import React from 'react'
import wavePattern from '../assets/wave-pattern.svg'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
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
      <div className='relative z-10 flex flex-col w-full md:w-5/12 gap-6' data-aos="fade-right">
        <div className='space-y-2'>
          <h2 className='text-accent font-medium tracking-wider uppercase text-sm md:text-base animate-pulse'>
            Available for Freelance
          </h2>
          <div className='relative w-fit'>
            <h1 className='text-4xl md:text-7xl font-bold text-lightbg leading-tight'>
              MUHAMMED <br />
              <span className='text-accent'>SAFAR N.P</span>
            </h1>
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-accent/30 z-[-1]" viewBox="0 0 170 35" preserveAspectRatio="none">
              <path fill="currentColor" d="M13,8 C19,6 27,5 32,9 C35,11 34,14 31,16 C27,18 22,20 19,25 C17,29 19,33 23,34 C29,35 36,32 42,30 C60,22 80,19 100,18 C119,17 139,18 157,18 C160,18 163,17 163,15 C163,13 160,14 157,14 C138,14 118,14 100,15 C80,16 60,19 41,27 C36,29 30,32 25,30 C21,29 20,25 23,22 C25,18 30,16 34,14 C37,12 39,9 36,6 C31,2 23,2 17,4 C12,5 8,7 4,10 C1,11 4,15 7,13 C9,12 11,10 13,8 Z"></path>
            </svg>
          </div>
        </div>
        
        <p className='text-lg md:text-xl text-lightbg/80 font-light max-w-md'>
          A passionate <span className='text-lightbg font-semibold'>Full Stack Developer</span> crafting high-performance, beautiful web experiences with modern technologies.
        </p>

        <div className='flex flex-wrap gap-4 pt-4'>
          <button className='px-8 py-4 bg-accent text-primary font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 group shadow-[0_0_20px_rgba(242,201,76,0.3)]'>
            View My Work
            <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
          </button>
        </div>
      </div>

      {/* Center Content: Portrait Placeholder with Decorative Elements */}
      <div className='relative z-10 flex justify-center items-center w-full md:w-auto my-12 md:my-0' data-aos="zoom-in">
        {/* Glow Effect */}
        <div className='absolute w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-[80px] z-0 animate-glow-pulse' />
        
        {/* Main Image Container */}
        <div className='relative w-[280px] h-[380px] md:w-[400px] md:h-[520px] rounded-[40px] md:rounded-[60px] border border-lightbg/10 overflow-hidden backdrop-blur-sm bg-lightbg/5 shadow-2xl animate-float'>
          <div className='absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10' />
          {/* This would be the user's image */}
          <div className='absolute inset-0 flex items-center justify-center text-lightbg/20 text-9xl font-bold select-none'>
            MS
          </div>
          
          {/* Experience Badge */}
          <div className='absolute bottom-8 left-8 z-20 bg-accent/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20' data-aos="fade-up" data-aos-delay="400">
            <h4 className='text-primary text-3xl font-bold'>1+</h4>
            <p className='text-primary/80 text-xs font-semibold uppercase tracking-wider'>Years Experience</p>
          </div>
        </div>

        {/* Decorative Floating Elements */}
        <div className='absolute -top-6 -right-6 w-20 h-20 bg-accent rounded-full opacity-20 blur-xl animate-glow-pulse' />
        <div className='absolute -bottom-10 -left-10 w-32 h-32 border border-accent/30 rounded-full animate-float-slow' />
      </div>

      {/* Right Content: Stats Grid */}
      <div className='relative z-10 flex flex-col gap-6 md:gap-10 w-full md:w-auto' data-aos="fade-left">
        <StatCard value="10+" label="Projects Done" />
        <StatCard value="5+" label="Happy Clients" />
        <StatCard value="24/7" label="Support" />
      </div>

    </div>
  )
}

const StatCard = ({ value, label }) => (
  <div className='group flex flex-col md:items-end gap-1'>
    <h3 className='text-4xl md:text-5xl font-bold text-lightbg group-hover:text-accent transition-colors duration-300'>
      {value}
    </h3>
    <p className='text-sm md:text-base font-medium text-lightbg/60 uppercase tracking-widest'>
      {label}
    </p>
    <div className='w-12 h-1 bg-accent/30 rounded-full md:ml-auto group-hover:w-20 group-hover:bg-accent transition-all duration-300' />
  </div>
)

export default Hero
