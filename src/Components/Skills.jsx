import React from 'react'
import Html from "../assets/icons/html-icon.svg"
import Css from "../assets/icons/css-icon.svg"
import Js from "../assets/icons/javascript-programming-language-icon.svg"
import ReactIcon from "../assets/icons/react-js-icon.svg"
import Node from "../assets/icons/node-js-icon.svg"
import Mongo from "../assets/icons/mongodb-icon.svg"
import Tailwind from "../assets/icons/tailwind-css-icon.svg"
import Express from "../assets/icons/express-js-icon.svg"
import Git from "../assets/icons/github-icon.svg"

const Skills = () => {
  const mainSkills = [
    { icon: Html, name: "HTML" },
    { icon: Css, name: "CSS" },
    { icon: Js, name: "JavaScript" },
    { icon: ReactIcon, name: "React" },
    { icon: Node, name: "Node.js" },
    { icon: Mongo, name: "MongoDB" },
  ];

  const tools = [
    { icon: Tailwind, name: "Tailwind" },
    { icon: Express, name: "Express" },
    { icon: Git, name: "Git" },
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col items-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">My Technical Stack</h2>
        <div className="w-24 h-1.5 bg-accent rounded-full animate-glow-pulse" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-4">
        {mainSkills.map((skill, i) => (
          <div 
            key={i} 
            data-aos="zoom-in" 
            data-aos-delay={i * 100}
            className="group relative flex flex-col items-center p-8 bg-white border border-gray-100 rounded-3xl transition-all duration-500 cursor-pointer hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(9,61,52,0.15)] hover:border-accent"
          >
            {/* Background Glow on Hover */}
            <div className="absolute inset-0 bg-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
            </div>
            
            <p className="relative z-10 mt-6 font-semibold text-primary/80 group-hover:text-primary transition-colors">
              {skill.name}
            </p>

            {/* Bottom Accent Bar */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent rounded-full transition-all duration-500 group-hover:w-1/2" />
          </div>
        ))}
      </div>

      <div className="mt-24" data-aos="fade-up">
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-2xl font-bold text-primary/60 uppercase tracking-widest text-center">Tools & Frameworks</h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {tools.map((tool, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center gap-3 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={400 + (i * 100)}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 p-3 bg-white rounded-2xl shadow-sm border border-gray-50 transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl group-hover:border-accent/30 group-hover:-rotate-12">
                <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="text-sm font-bold text-primary/40 group-hover:text-accent transition-colors tracking-wide uppercase">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
