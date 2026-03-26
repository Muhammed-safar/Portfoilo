import React from 'react'
import Logo from './Logo'
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Navbar = () => {
  const navItems = ["Home","About","Projects","Contacts"];
  return (
    <div className='flex justify-between items-center md:h-24 w-full '>
     <div className='flex'>
       <Logo/>
     </div>
      <div className='hidden md:flex'>
        <ul className="flex justify-center gap-16 text-[#dddcdc] ">
  {navItems.map((item)=>(
    <li key={item} className="hover:text-lightbg cursor-pointer">{item}</li>
  ))}
</ul>
      </div>
      <div className='hidden  md:flex text-2xl  text-lightbg gap-6'>
        <RiInstagramFill />
        <FaGithub />
        <FaLinkedinIn />
      </div>
    </div>
  )
}

export default Navbar
