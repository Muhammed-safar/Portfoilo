import React, { useState } from 'react'
import ContactModal from './ContactModal'

const ContactBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="contacts" className="flex w-full bg-[#f4f9f9] py-16 md:py-24 overflow-hidden relative justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full mx-auto relative z-10 px-4 md:px-0">
        
        {/* Left White Circle */}
        <div className="relative z-10 flex flex-col items-center justify-center bg-white rounded-full w-[340px] h-[340px] md:w-[500px] md:h-[500px] shadow-sm flex-shrink-0 md:-mr-16 mb-8 md:mb-0" data-aos="zoom-in">
          <p className="text-primary font-semibold text-sm md:text-base mb-2">Have a great idea?</p>
          <h2 className="text-3xl md:text-[2.75rem] font-black text-primary text-center leading-[1.1] mb-6 tracking-tight">
            LET'S TALK ABOUT <br /> YOUR PROJECT
          </h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 hover:shadow-xl active:scale-95"
          >
            CONTACT ME
          </button>
        </div>

        {/* Right Yellow Circle */}
        <div className="relative z-0 bg-accent rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex-shrink-0 flex items-center justify-center translate-y-8 md:translate-y-16 animate-float-slow overflow-hidden shadow-[inset_0_0_50px_rgba(255,255,255,0.3)]" data-aos="zoom-in" data-aos-delay="200">
           {/* Smooth Minimal Dot Pattern */}
           <div className="absolute inset-0 opacity-[0.3] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(white 2px, transparent 2px)`,
                  backgroundSize: '24px 24px'
                }}
           />
        </div>

      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default ContactBanner
