"use client";
import React, { useState } from 'react';
import Link from 'next/link'


const DeveloperToolbox: React.FC = () => {
    return (
      <div className="
        bg-[#ECE7E1] 
        w-screen  
        flex 
        flex-row 
        pt-24 
        text-[#1a1a1a] 
        font-custom
        h-full">
        {/** About me left column */}
        <div className=' 
            h-full 
            w-3/5
            flex
            flex-col
            font-medium
            items-right
            pr-6
            bg-[#1a1a1a]'>
            <div
            className='w-2/3 self-end'>
                <h2 className='
                    text-2xl 
                    sm:text-4xl 
                    md:text-6xl
                    l:text-7xl 
                    xl:text-8xl
                    mb-4
                    text-[#ece7e1]
                    py-6
                    min-h-[2em]
                    max-h-[2em]  
                    overflow-hidden
                    line-clamp-2  
                '>
                Developer's Toolbox
                </h2>
            </div>

        </div>
        {/** Picture right column */}
        <div className='
            items-left 
            justify-left 
            h-full 
            w-2/5
            flex
            flex-row
            font-medium
            pl-4'>
            <h1>
                Sailor Song
            </h1>
        </div>
      </div>
    );
  };
  
  export default DeveloperToolbox;