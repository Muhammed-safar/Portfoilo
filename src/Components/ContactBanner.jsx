import React from 'react'

const ContactBanner = () => {
  return (
    <div className="flex w-full bg-[#f4f9f9] py-16 md:py-24 overflow-hidden relative justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full mx-auto relative z-10 px-4 md:px-0">
        
        {/* Left White Circle */}
        <div className="relative z-10 flex flex-col items-center justify-center bg-white rounded-full w-[340px] h-[340px] md:w-[500px] md:h-[500px] shadow-sm flex-shrink-0 md:-mr-16 mb-8 md:mb-0">
          <p className="text-[#0d6d62] font-semibold text-sm md:text-base mb-2">Have a great idea?</p>
          <h2 className="text-3xl md:text-[2.75rem] font-black text-[#1c2624] text-center leading-[1.1] mb-6 tracking-tight">
            LET'S TALK ABOUT <br /> YOUR PROJECT
          </h2>
          <button className="bg-[#0d6d62] hover:bg-[#084b43] text-white font-bold py-3 px-8 rounded-full transition-colors">
            CONTACT ME
          </button>
        </div>

        {/* Right Yellow Circle */}
        <div className="relative z-0 bg-[#ffd43a] rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex-shrink-0 flex items-center justify-center translate-y-8 md:translate-y-16">
          {/* Image placeholder: the user specified image is not needed */}
        </div>

      </div>
    </div>
  )
}

export default ContactBanner
