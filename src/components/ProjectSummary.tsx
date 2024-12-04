"use client";
import React, { useState } from 'react';

const ProjectSummary: React.FC = () => {
    return (
      <div className="bg-[#ECE7E1] justify-center items-center w-screen h-full flex flex-col">
      {/* The Projects header section */}
      <div className="my-16 font-custom font-medium text-[#1a1a1a] grid grid-cols-5 gap-4">
        <div></div>
        <div className="text-9xl">Projects</div>
        <div></div>
        <div className="text-2xl text-right">Hi this is some of the projects I have done for myself and some clients</div>
      </div>
    
      {/* The projects section */}
      <div className="grid grid-cols-3 gap-0 w-screen my-16 ">
        <div className="w-full aspect-ratio-[16/9]">
          <img src="PowerPlate.png" alt="Placeholder" className="w-full h-full object-cover" />
        </div>
        <div className="w-full flex flex-col text-[#1a1a1a] font-custom font-medium mt my-4 px-4">
          <div className="flex-1 text-left">
            <h2 className="text-4xl">PowerPlate</h2>
            <p className='text-2xl mt-4'>
              This is powerplate! I used NextJS and Tailwind
              to construct a user-friendly bot that can detect  
              a user's workout goal and other various health info 
              (weight. allergens etc.) and construct a plan tailor-made for them!
            </p>
          </div>
          <div className="flex-1 text-right">
            <h2 className="text-4xl">Martabak BNE</h2>
              <p className='text-2xl mt-4'>
                This is powerplate! I used NextJS and Tailwind 
                to construct a user-friendly bot that can detect
                a user's workout goal and other various health info
                (weight. allergens etc.) and construct a plan tailor-made for them!
              </p>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    
      {/* The divider */}
      <div className="h-24 w-screen"></div>
    </div>
    );
  };
  
  export default ProjectSummary;