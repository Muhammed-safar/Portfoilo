import React from 'react'
import monitor from '../assets/icons/monitor-smartphone-svgrepo-com.svg'
import laptop from '../assets/icons/laptop-svgrepo-com.svg'
import api from '../assets/icons/api-interface-svgrepo-com.svg'

const MyServices = () => {
   const services = [
  {
    number: "01",
    icon: monitor,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using React, Tailwind CSS and modern JavaScript."
  },
  {
    number: "02",
    icon: laptop,
    title: "Full Stack Development",
    description:
      "Developing complete MERN stack applications using MongoDB, Express, React and Node.js."
  },
  {
    number: "03",
    icon: api,
    title: "API Development",
    description:
      "Creating secure and scalable REST APIs using Node.js and Express."
  }
];
  return (
    <div className="flex flex-col gap-5 px-4 md:px-0">
      <div className="flex">
        <h1 className='text-3xl font-bold '>
        My Services</h1></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {services.map((service, i) => (
  <div
    key={i}
    className="group flex flex-col gap-4 p-6 bg-white rounded-2xl h-[350px]  justify-center  hover:bg-black hover:text-lightbg shadow-md hover:-translate-y-2 hover:shadow-xl transition-all"
  >
    <div className="flex justify-between items-center ">
      <img src={service.icon} alt={service.title} className="w-14 h-14 group-hover:brightness-0 group-hover:invert transition-all" />
      <span className="text-[#d5dbda] font-bold text-lg">
        {service.number}
      </span>
    </div>

    <h2 className="text-2xl font-bold">{service.title}</h2>
    <p className="">{service.description}</p>
  </div>
))}
      </div>
    </div>
  )
}

export default MyServices
