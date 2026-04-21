import React from "react";
import { FiExternalLink } from "react-icons/fi";
import bookMyShowImg from "../assets/book-my-show-minimal.png";
import chefKitchenImg from "../assets/chef-kitchen-simple.png";

const LatestProjects = () => {
  const projects = [
    {
      title: "Movie Booking App",
      description: "The Movie Booking App enables users to explore movies, check showtimes, and book tickets with an interactive seat selection system. It delivers a smooth and responsive experience with efficient booking and user-friendly navigation.",
      link: "https://book-my-show-git-main-mhdsafars-projects.vercel.app",
      image: bookMyShowImg,
    },
    {
      title: "ChefKitchen",
      description: "ChefKitchen is a MERN-based food ordering application that allows users to browse menus, add items to a cart, and place orders through a responsive interface. It features dynamic data handling, real-time updates, and a seamless user experience for efficient online food ordering.",
      link: "https://chefkitchen-3-git-master-mhdsafars-projects.vercel.app",
      image: chefKitchenImg,
    }
  ];

  return (
    <section className="py-20 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Header Section */}
        <div className="flex flex-col justify-center gap-6" data-aos="fade-right">
          <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            My Latest <br />
            <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-primary/60 max-w-md leading-relaxed">
            Here are some of my recent projects that showcase my skills and expertise in full-stack web development.
          </p>
          <div className="w-20 h-2 bg-accent rounded-full animate-glow-pulse" />
        </div>

        {/* Project Cards */}
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-end overflow-hidden h-[350px] md:h-[500px] rounded-3xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(9,61,52,0.3)]"
            data-aos={index % 2 === 0 ? "fade-up" : "fade-left"}
            data-aos-delay={index * 200}
          >
            {/* Background Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative z-10 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <FiExternalLink className="text-white text-2xl" />
              </div>
              <p className="text-white/80 text-lg line-clamp-2 max-w-sm">
                {project.description}
              </p>
            </div>

            {/* Hover Decorative Element */}
            <div className="absolute top-8 right-8 w-12 h-12 bg-accent/90 backdrop-blur-md rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
               <FiExternalLink className="text-primary text-xl" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
