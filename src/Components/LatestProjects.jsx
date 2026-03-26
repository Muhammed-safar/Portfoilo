import React from "react";

const LatestProjects = () => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

      {/* <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg ">
    <h2 className="text-5xl font-bold">My Latest Projects</h2>
    <p className="text-gray-600">
      Here are some of my recent projects that showcase my skills and expertise
      in web development.
    </p>
  </div>

  <div className="bg-amber-400 h-[350px] md:h-[500px] rounded-2xl"></div>
  <div className="bg-amber-400 h-[350px] md:h-[500px] rounded-2xl"></div>
  <div className="bg-amber-400 h-[350px] md:h-[500px] rounded-2xl"></div>
  <div className="bg-amber-400 h-[350px] md:h-[500px] rounded-2xl"></div> */}
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col gap-4 bg-white p-6 rounded-lg ">
          <h2 className="text-5xl font-bold">My Latest Projects</h2>
          <p className="text-gray-600">
            Here are some of my recent projects that showcase my skills and expertise
            in web development.
          </p>
        </div>

        <div className="bg-amber-400 h-[350px] md:h-[500px] rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer"></div>
        <div className="bg-orange-400 h-[350px] md:h-[500px] rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer"></div>
      </div>
      <div className="flex flex-col  gap-5 md:gap-10">
        <div className="flex bg-amber-400 h-[350px] md:h-[500px] rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer"></div>
        <div className=" flex bg-red-400 h-[350px] md:h-[500px] rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer"></div>
      </div>

    </div>
  );
};

export default LatestProjects;
