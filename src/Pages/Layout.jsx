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
      <div className='flex  bg-primary w-full  md:h-[670px]  p-4 md:p-0 relative'>
        <div className='flex  md:max-w-7xl flex-col  w-full mx-auto '>
          <Navbar />
          <Hero />
        </div>

      </div>
      <div data-aos="fade-up" className='flex flex-col max-w-7xl w-full mx-auto p-4 md:p-0 mt-12'>
        <Skills />
      </div>
      <div data-aos="fade-up" className='flex flex-col max-w-7xl w-full mx-auto p-4 md:p-0 mt-12 md:mt-16'>
        <LatestProjects />
      </div>
      <div data-aos="fade-up" className='flex max-w-7xl w-full mx-auto p-4 md:p-0 mt-12 md:mt-16'>
        <Experience />
      </div>
      <div data-aos="fade-up" className='flex max-w-7xl w-full mx-auto p-4 md:p-0 mt-12 md:mt-16'>
        <MyServices />
      </div>
      <div data-aos="fade-up" className='flex flex-col w-full mt-12 md:mt-24'>
        <ContactBanner />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
