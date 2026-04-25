import React from 'react';
import { IoClose } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import bookMyShowImg from "../assets/book-my-show-minimal.png";
import chefKitchenImg from "../assets/chef-kitchen-simple.png";

const ProjectsModal = ({ isOpen, onClose }) => {
  const projects = [
    {
      title: "Movie Booking App",
      description: "Interactive seat selection and real-time booking system.",
      link: "https://book-my-show-git-main-mhdsafars-projects.vercel.app",
      image: bookMyShowImg,
      tags: ["React", "Tailwind", "Node.js"]
    },
    {
      title: "ChefKitchen",
      description: "Full-stack food ordering platform with real-time updates.",
      link: "https://chefkitchen-3-git-master-mhdsafars-projects.vercel.app",
      image: chefKitchenImg,
      tags: ["MERN", "Express", "MongoDB"]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/60 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h2 className="text-3xl font-black text-primary uppercase tracking-tight">Featured Projects</h2>
            <p className="text-primary/60 text-sm mt-1">Explore my latest work and case studies</p>
          </div>
          <button 
            onClick={onClose}
            className="p-3 hover:bg-white rounded-full transition-all shadow-sm text-primary hover:rotate-90"
          >
            <IoClose size={28} />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                key={i}
                className="group flex flex-col bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/30"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-primary/5 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-40 h-40 object-contain transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-4 bg-white rounded-full text-primary shadow-xl scale-0 group-hover:scale-100 transition-transform duration-500">
                      <FiExternalLink size={24} />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white text-[10px] font-bold text-primary/40 rounded-full uppercase tracking-widest border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-center">
          <p className="text-xs font-bold text-primary/30 uppercase tracking-[0.3em]">
            More projects coming soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
