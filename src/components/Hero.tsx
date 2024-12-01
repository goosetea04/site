import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  introduction: string;
  profileImage: string;
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
  profileImage,
  socialLinks
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <Image 
            src={profileImage} 
            alt={name} 
            width={200} 
            height={200} 
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          {name}
        </h1>
        <h2 className="text-2xl mb-6 text-gray-700">
          {title}
        </h2>

        {/* Brief Introduction */}
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          {introduction}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300"
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
          {socialLinks.twitter && (
            <a 
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition duration-300"
            >
              <Twitter size={32} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;