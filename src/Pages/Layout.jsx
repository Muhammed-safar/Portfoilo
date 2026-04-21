import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Skills from '../Components/Skills'
import LatestProjects from '../Components/LatestProjects'
import Experience from '../Components/Experience'
import MyServices from '../Components/MyServices'
import ContactBanner from '../Components/ContactBanner'
import Footer from '../Components/Footer'

const Layout = () => {
  return (
    <div className='flex flex-col w-full overflow-x-hidden [font-family:var(--font-heading)]'>
      <div className='flex bg-primary w-full md:h-[670px] px-4 md:px-12 relative'>
        <div className='flex md:max-w-7xl flex-col w-full mx-auto '>
          <Navbar />
          <Hero />
        </div>
      </div>
      
      <div data-aos="fade-up" className='flex flex-col max-w-7xl w-full mx-auto px-4 md:px-12 mt-12'>
        <Skills />
      </div>
      
      <div data-aos="fade-up" className='flex flex-col max-w-7xl w-full mx-auto px-4 md:px-12 mt-12 md:mt-16'>
        <LatestProjects />
      </div>
      
      <div data-aos="fade-up" className='flex max-w-7xl w-full mx-auto px-4 md:px-12 mt-12 md:mt-16'>
        <Experience />
      </div>
      
      <div data-aos="fade-up" className='flex max-w-7xl w-full mx-auto px-4 md:px-12 mt-12 md:mt-16'>
        <MyServices />
      </div>
      
      <div data-aos="fade-up" className='flex flex-col w-full mt-12 md:mt-24 px-4 md:px-12'>
        <div className='max-w-7xl w-full mx-auto'>
          <ContactBanner />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
