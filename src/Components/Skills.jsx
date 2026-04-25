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
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { icon: Html, name: "HTML" },
        { icon: Css, name: "CSS" },
        { icon: Js, name: "JavaScript" },
        { icon: ReactIcon, name: "React" },
        { icon: Tailwind, name: "Tailwind" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: Node, name: "Node.js" },
        { icon: Express, name: "Express" },
        { icon: Git, name: "Git / Version Control" },
      ]
    },
    {
      title: "Database",
      skills: [
        { icon: Mongo, name: "MongoDB" },
      ]
    }
  ];

  return (
    <section className="py-20 w-full">
      <div className="flex flex-col items-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 uppercase tracking-tight text-center">Technical Stack</h2>
        <div className="w-24 h-1.5 bg-accent rounded-full animate-glow-pulse" />
      </div>

      <div className="flex flex-col gap-16 max-w-5xl mx-auto">
        {skillCategories.map((category, catIdx) => (
          <div 
            key={catIdx} 
            className="flex flex-col gap-8"
            data-aos="fade-up"
            data-aos-delay={catIdx * 100}
          >
            {/* Category Header */}
            <div className="flex items-center gap-6">
              <h3 className="text-2xl font-black text-primary uppercase tracking-[0.25em] whitespace-nowrap">
                {category.title}
              </h3>
              <div className="h-0.5 flex-grow bg-accent/20 rounded-full" />
            </div>

            {/* Skills Cards Grid - Responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {category.skills.map((skill, i) => (
                <div 
                  key={i} 
                  data-aos="zoom-in"
                  data-aos-delay={i * 50}
                  className="group relative flex flex-col items-center gap-4 p-6 bg-white border border-gray-100 rounded-3xl transition-all duration-500 cursor-pointer hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(9,61,52,0.12)] hover:border-accent/40"
                >
                  {/* Background Glow on Hover */}
                  <div className="absolute inset-0 bg-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Name */}
                  <p className="relative z-10 font-bold text-primary/60 group-hover:text-primary transition-colors text-xs md:text-sm text-center tracking-tight">
                    {skill.name}
                  </p>

                  {/* Expanding Bottom Accent Bar */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent rounded-full transition-all duration-500 group-hover:w-1/3" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
