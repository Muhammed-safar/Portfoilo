import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Skills from '../Components/Skills'
import LatestProjects from '../Components/LatestProjects'
import Experience from '../Components/Experience'
import MyServices from '../Components/MyServices'
import ContactBanner from '../Components/ContactBanner'
import Footer from '../Components/Footer'
import ProjectsModal from '../Components/ProjectsModal'

const Layout = () => {
  const [isProjectsModalOpen, setIsProjectsModalOpen] = React.useState(false);

  return (
    <div className='flex flex-col w-full overflow-x-hidden [font-family:var(--font-heading)]'>
      <div className='flex bg-gradient-to-b from-primary via-primary via-80% to-white w-full px-4 md:px-12'>
        <div className='flex max-w-6xl flex-col w-full mx-auto'>
          <Navbar onOpenProjects={() => setIsProjectsModalOpen(true)} />
          <Hero onOpenProjects={() => setIsProjectsModalOpen(true)} />
        </div>
      </div>
      
      <div data-aos="fade-up" className='flex flex-col max-w-6xl w-full mx-auto px-4 md:px-12 py-8 md:py-12'>
        <Skills />
      </div>
      
      <div data-aos="fade-up" className='flex flex-col max-w-6xl w-full mx-auto px-4 md:px-12 py-8 md:py-12'>
        <LatestProjects />
      </div>
      
      <div data-aos="fade-up" className='flex max-w-6xl w-full mx-auto px-4 md:px-12 py-8 md:py-12'>
        <Experience />
      </div>
      
      <div data-aos="fade-up" className='flex max-w-6xl w-full mx-auto px-4 md:px-12 py-8 md:py-12'>
        <MyServices />
      </div>
      
      <div data-aos="fade-up" className='flex flex-col w-full'>
        <ContactBanner />
        <Footer />
      </div>
      <ProjectsModal 
        isOpen={isProjectsModalOpen} 
        onClose={() => setIsProjectsModalOpen(false)} 
      />
    </div>
  )
}

export default Layout
