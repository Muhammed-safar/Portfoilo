import React from 'react'
import monitor from '../assets/icons/monitor-smartphone-svgrepo-com.svg'
import laptop from '../assets/icons/laptop-svgrepo-com.svg'
import api from '../assets/icons/api-interface-svgrepo-com.svg'
import { FiArrowUpRight } from 'react-icons/fi'

const MyServices = () => {
  const services = [
    {
      number: "01",
      icon: monitor,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React, Tailwind CSS and modern JavaScript."
    },
    {
      number: "02",
      icon: laptop,
      title: "Full Stack Development",
      description: "Developing complete MERN stack applications using MongoDB, Express, React and Node.js."
    },
    {
      number: "03",
      icon: api,
      title: "API Development",
      description: "Creating secure and scalable REST APIs using Node.js and Express with focus on performance."
    }
  ];

  return (
    <section className="py-20 w-full">
      <div className="flex flex-col items-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 uppercase tracking-tight text-center">
          My Services
        </h2>
        <div className="w-24 h-1.5 bg-accent rounded-full animate-glow-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 200}
            className="group relative flex flex-col gap-6 p-10 bg-white rounded-[2.5rem] h-[400px] border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(9,61,52,0.15)] hover:border-accent/30"
          >
            {/* Unique Hover Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none z-0"
                 style={{
                   backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
                   backgroundSize: '24px 24px'
                 }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div className="p-5 bg-primary/5 rounded-2xl group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                  <img src={service.icon} alt={service.title} className="w-12 h-12 group-hover:brightness-0 transition-all" />
                </div>
                <span className="text-4xl font-black text-primary/5 group-hover:text-accent/20 transition-colors duration-500">
                  {service.number}
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  {service.title}
                </h2>
                <p className="text-primary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyServices
