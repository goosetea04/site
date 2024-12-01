"use client";
import React, { useState } from 'react';


const Footer: React.FC = () => {
  return (
    <div className="flex bg-[#1A1818] py-2 px-4">
        <div className="w-1/4 ">
            <p className='text-[#ECE7E1]  font-custom'> First Column (25%) </p>
        </div>
        <div className="w-[55%]">
            Second Column (55%)
        </div>
        <div className="w-1/5">
            Third Column (20%)
        </div>
    </div>
  );
};

export default Footer;