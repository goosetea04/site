"use client";
import React, { useState } from 'react';


const Footer: React.FC = () => {
  return (
    <div className="h-48 flex bg-[#1A1818]">
        <div className="w-1/4 border-r-2 border-[#ECE7E1] p-2">
            <p className='text-[#ECE7E1] font-custom'> First Column (25%) </p>
        </div>
        <div className="w-[55%] flex flex-col">
            <div className='h-1/2'></div>
            <div className='h-2/3 bottom-0 left-0  text-[#ECE7E1] border-[#ECE7E1] p-2 pl-4 font-custom font-medium flex items-left justify-left text-7xl items-center justify-left text-left overflow-hidden'>
                Gusti Rais
            </div>
        </div>
        <div className="w-1/5 flex flex-col relative">
            <div className='h-1/3 border-l-2 border-b-2 border-[#ECE7E1] p-2 font-custom text-3xl font-medium flex items-center justify-center relative'>
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>@Copyright 2024</p>
            </div>
            <div className='h-2/3 border-l-2 border-[#ECE7E1] p-2 font-custom text-3xl font-medium relative flex flex-col'>
                <div className='flex flex-col items-start mx-3'>
                    <a href="https://linkedin.com/in/gustirais" target='_blank' className='text-[#BBC1E9] hover:underline my-2'>Linkedin</a>
                    <a href='https://github.com/goosetea04' target='_blank' className='text-[#BEBEBE] hover:underline my-2'>Github</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;