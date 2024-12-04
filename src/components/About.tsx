"use client";
import React, { useState } from 'react';
import Link from 'next/link'


const About: React.FC = () => {
    return (
      <div className="
        bg-[#ECE7E1] 
        w-screen 
        h-full 
        flex 
        flex-row 
        pt-24 
        text-[#1a1a1a] 
        font-custom
        min-h-screen">
        {/** About me left column */}
        <div className=' 
            h-full 
            w-3/5
            flex
            flex-col
            font-medium
            items-right
            pr-6'>
            <div
            className='w-2/3 self-end'>
                <h2 className='
                    text-4xl 
                    sm:text-4xl 
                    md:text-6xl 
                    l:text-7xl
                    xl:text-9xl
                    mb-4
                '>
                About Me
                </h2>
            </div>
            <div className='w-2/3 self-end'>
                <Link 
                    href="resume.pdf" 
                    target='_blank'
                    className=" w-full bg-[#C8C2BB] hover:bg-[#ADA090] transition-colors text-[#1a1a1a] px-4 mb-8 py-2 text-[clamp(1rem,2vw,2rem)] font-light text-center "
                >
                    Download Resume
                </Link>
            </div>
            <p className='w-2/3 self-end text-2xl mt-3'>
                Hey guys so the body of my about page will be here!
            </p>
            

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
  
  export default About;