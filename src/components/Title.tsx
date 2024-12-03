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
    <div 
      className="relative min-h-screen flex justify-center items-center text-gray-900 px-4 bg-center" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay to improve text readability */}
      

      <div className="relative max-w-4xl flex flex-col mx-auto text-center z-10">
        {/* Name and Title */}
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-red-600 font-custom">
          {name}
        </h1>
        <h2 className="text-2xl mb-6 text-gray-700 font-custom">
          {title}
        </h2>

        {/* Brief Introduction */}
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto font-custom">
          {introduction}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-custom"
          >
            Download Resume
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300 font-custom"
          >
            View Projects
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          {socialLinks.github && (
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition duration-300"
            >
              <Github size={32} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition duration-300"
            >
              <Linkedin size={32} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;