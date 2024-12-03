import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  introduction: string;
  backgroundImage: string; // New prop for background image
  profileImage?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  introduction,
  backgroundImage,
  socialLinks
}) => {
  return (
    <div className="relative min-h-screen flex justify-center text-gray-900 px-4 bg-center"
        style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    >
      {/* Overlay to improve text readability */}
      <div className="w-3/4 relative flex flex-col items-right justify-right z-10">
          <div className="w-1/2 h-1/2 absolute right-0 text-right">
              <p className="font-custom text-4xl text-[#ECE7E1] pt-16">
              Hey there! I'm Gusti, a passionate Machine Learning enthusiast 
              and web designer with a keen eye for detail. 
              Beyond crafting websites, I specialize in diverse design projects,
              including comprehensive branding. 
              I take pride in my ability to critically evaluate and refine my 
              work to achieve the highest standards.
              </p>
          </div>
          <div className="w-3/4 h-1/2 absolute bottom-0 left-0 text-left">
            <ul className="text-8xl absolute bottom-0 pb-16 text-[#ECE7E1] font-custom font-semibold">
              <li>Machine Learning</li>
              <li>Designer</li>
              <li>UI/UX</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Hero;