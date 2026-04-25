import React from 'react'
import Logo from './Logo'
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = ({ onOpenProjects }) => {
  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Projects", action: onOpenProjects },
    { name: "Contacts", link: "#contacts" }
  ];
  
  return (
    <div className='flex justify-between items-center md:h-24 w-full'>
      <div className='flex'>
        <Logo />
      </div>
      
      <div className='hidden md:flex'>
        <ul className="flex justify-center gap-16 text-[#dddcdc]">
          {navItems.map((item) => (
            <li 
              key={item.name} 
              onClick={item.action ? item.action : null}
              className="hover:text-accent cursor-pointer transition-colors duration-300 font-medium"
            >
              {item.action ? (
                <span>{item.name}</span>
              ) : (
                <a href={item.link}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className='hidden md:flex text-2xl text-lightbg gap-6'>
        <a href="#" className="hover:text-accent transition-all hover:scale-110">
          <RiInstagramFill />
        </a>
        <a 
          href="https://github.com/Muhammed-safar" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-accent transition-all hover:scale-110"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/muhammed-safar-78b59a327" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-accent transition-all hover:scale-110"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  )
}

export default Navbar
