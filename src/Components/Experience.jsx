import React from 'react'

const Experience = () => {
     const timeline = [
  {
    title: "BCA - SNES College",
    year: "2020 - 2023",
    type: "Education",
    description: "Bachelor of Computer Applications with focus on software development."
  },
  {
    title: "MERN Stack Intern - Scanntek",
    year: "2025 - Present",
    type: "Experience",
    description: "Working with MERN stack including Node.js, Express, and MongoDB."
  }
  ];
  return (
    <div clasName="flex flex-col">
        <div className="flex justify-center font-bold text-2xl md:text-3xl">
            <h1>EDUCATION <span className="text-primary">&</span> EXPERIENCE</h1>
        </div>
      <div className="grid md:grid-cols-2 gap-6">
  {timeline.map((item, index) => (
    <div
      key={index}
      className="flex  gap-5 p-10 bg-white rounded-xl shadow-md"
    >
      <div className="flex ">
        <span className="text-md font-semibold text-primary ">{item.year}</span>
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl font-bold">{item.title}</h3>

      <p className="text-gray-600">{item.description}</p></div>
    </div>
  ))}
</div>
    </div>
  )
}

export default Experience
