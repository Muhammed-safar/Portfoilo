import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-[#f4f9f9] pt-10 pb-4 flex flex-col items-center">
      {/* Center Logo */}
      <div className="flex items-center gap-2 mb-24 md:mb-32 mt-4 md:mt-12">
        <div className="flex text-2xl font-extrabold text-[#0d6d62] h-8 w-8 border-4 border-[#0d6d62] justify-center items-center">
          S
        </div>
        <div className="flex text-2xl text-[#1c2624] font-bold">
          SAFARR
        </div>
      </div>

      {/* Bottom Row */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Copyright */}
        <div className="text-gray-500 text-sm font-medium">
          © 2025 - Blocksy Theme
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-14 text-[#1c2624] font-bold text-[11px] tracking-widest uppercase">
          <a href="#home" className="hover:text-[#0d6d62] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#0d6d62] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#0d6d62] transition-colors">Projects</a>
          <a href="#contacts" className="hover:text-[#0d6d62] transition-colors">Contacts</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-[#0d6d62]">
          {/* Dribbble Icon */}
          <a href="#" className="hover:text-[#1c2624] transition-colors">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
            </svg>
          </a>
          {/* Behance Icon */}
          <a href="#" className="hover:text-[#1c2624] transition-colors">
             <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
               <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.918 2.338-5.675 5.564-5.675 3.056 0 5.093 1.838 5.485 5.087h-7.664c.148 2.126 1.189 3.085 2.585 3.085 1.205 0 2.079-.58 2.457-1.822h2.238zm-3.309-4.821c-.244-1.334-1.127-1.912-2.311-1.912-1.282 0-2.072.766-2.31 1.912h4.621zm-10.417-6.179h-7v14h7.521c4.437 0 6.136-2.091 6.136-4.041 0-1.636-1.112-2.888-2.614-3.42 1.258-.696 2.015-1.748 2.015-3.04.001-1.96-1.422-3.499-6.058-3.499zm-4.04 4.541h2.72c1.785 0 2.768.423 2.768 1.558 0 1.116-.949 1.516-2.646 1.516h-2.842v-3.074zm0 8.018v-3.457h3.3c1.743 0 3.047.464 3.047 1.77 0 1.272-1.129 1.687-3.015 1.687h-3.332z"/>
             </svg>
          </a>
          {/* Instagram Icon */}
          <a href="#" className="hover:text-[#1c2624] transition-colors">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
