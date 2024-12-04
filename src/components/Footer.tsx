"use client";
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="min-h-48 relative flex flex-cols bg-[#1A1818]">
      <div className="w-full sm:w-1/4 border-r-2 border-[#ECE7E1] p-2">
      </div>
      <div className="w-full sm:w-[55%] flex flex-col">
        <div className="h-1/2"></div>
        <div className="h-2/3 bottom-0 left-0 text-[#ECE7E1] p-2 pl-4 font-custom font-medium flex items-left justify-left text-[clamp(1.5rem,6rem,12rem)]">
          Gusti Rais
        </div>
      </div>
      <div className="w-full sm:w-1/5 flex flex-col relative">
        <div className="h-1/3 border-l-2 border-b-2 border-[#ECE7E1] p-2 font-custom text-[clamp(1rem,2vw,2.5rem)] font-medium flex items-left justify-left relative">
          <p className="absolute top-1/2 pl-4 -translate-y-1/2 whitespace-nowrap">@Copyright 2024</p>
        </div>
        <div className="h-2/3 border-l-2 border-[#ECE7E1] p-2 font-custom font-medium relative flex flex-col">
          <div className="flex flex-col mx-3">
            <a href="https://linkedin.com/in/gustirais" target="_blank" className="text-[#BBC1E9] hover:underline py-2 text-[clamp(1rem,2rem,3.5rem)]">Linkedin</a>
            <a href="https://github.com/goosetea04" target="_blank" className="text-[#BEBEBE] hover:underline py-2 text-[clamp(1rem,2rem,3.5rem)]">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
