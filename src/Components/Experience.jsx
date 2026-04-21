import React from 'react'
import { LuGraduationCap, LuBriefcase } from 'react-icons/lu'

const Experience = () => {
  const timeline = [
    {
      title: "BCA - SNES College",
      year: "2020 - 2023",
      type: "Education",
      description: "Bachelor of Computer Applications with a deep focus on core software development principles and modern programming practices.",
      icon: <LuGraduationCap />
    },
    {
      title: "MERN Stack Intern - Scanntek",
      year: "2025 - Present",
      type: "Experience",
      description: "Building scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). Contributing to full-cycle development.",
      icon: <LuBriefcase />
    }
  ];

  return (
    <section className="py-20 w-full">
      <div className="flex flex-col items-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 uppercase tracking-tight text-center">
          Education <span className="text-accent">&</span> Experience
        </h2>
        <div className="w-24 h-1.5 bg-accent rounded-full animate-glow-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Decorative Middle Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/10 -translate-x-1/2 z-0" />

        {timeline.map((item, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className={`group relative flex flex-col gap-6 p-10 bg-white rounded-[2rem] border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(9,61,52,0.1)] hover:border-accent/30 z-10`}
          >
            {/* Header: Icon and Year */}
            <div className="flex justify-between items-start">
              <div className="p-4 bg-primary/5 rounded-2xl text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                {item.icon}
              </div>
              <span className="px-4 py-1.5 bg-accent/10 text-primary font-bold text-sm rounded-full tracking-wide">
                {item.year}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h4 className="text-primary/50 font-bold uppercase tracking-widest text-xs">
                {item.type}
              </h4>
              <h3 className="text-2xl font-bold text-primary">
                {item.title}
              </h3>
              <p className="text-primary/60 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>

            {/* Hover Decorative Element */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-150" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
