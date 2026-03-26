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
    <div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 ">
  {mainSkills.map((skill, i) => (
    <div key={i} className="flex flex-col items-center p-6 border-2 border-gray-300 rounded-lg md:rounded-4xl    hover:bg-primary hover:scale-100 hover:-translate-y-5 hover:shadow-[40px_40px_40px_rgba(0,0,0,0.15)] hover:text-white   transition duration-300  cursor-pointer mt-5 md:mt-50">
      <img src={skill.icon} alt={skill.name} className="md:w-12 md:h-28 " />
      <p className="mt-2">{skill.name}</p>
    </div>
  ))}
</div>

<div className="flex justify-center gap-10 mt-10">
  {tools.map((tool, i) => (
    <div key={i} className="flex flex-col items-center cursor-pointer hover:shadow-2xl">
      <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
      <p>{tool.name}</p>
    </div>
  ))}
</div>
    </div>
  )
}

export default Skills
