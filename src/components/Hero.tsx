import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  introduction: string;
  backgroundImage: string;
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
  const [isVisible, setIsVisible] = useState({
    paragraph: false,
    skillsList: false
  });

  const paragraphRef = useRef(null);
  const skillsListRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === paragraphRef.current) {
            setIsVisible(prev => ({ ...prev, paragraph: true }));
          }
          if (entry.target === skillsListRef.current) {
            setIsVisible(prev => ({ ...prev, skillsList: true }));
          }
        }
      });
    }, observerOptions);

    // Observe both elements
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (skillsListRef.current) observer.observe(skillsListRef.current);

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      className="relative min-h-screen flex justify-center text-gray-900 px-4 bg-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay to improve text readability */}
      <div className="w-3/4 relative flex flex-col items-right justify-right z-10">
        <div 
          ref={paragraphRef}
          className={`
            w-1/2 h-1/2 absolute right-0 text-right
            transform transition-all duration-700 ease-out
            ${isVisible.paragraph 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'}
          `}
        >
          <p className="font-custom text-4xl text-[#ECE7E1] pt-16">
            Hey there! I'm Gusti, a passionate Machine Learning enthusiast 
            and web designer with a keen eye for detail. 
            Beyond crafting websites, I specialize in diverse design projects,
            including comprehensive branding. 
            I take pride in my ability to critically evaluate and refine my 
            work to achieve the highest standards.
          </p>
        </div>
        <div 
          ref={skillsListRef}
          className={`
            w-3/4 h-1/2 absolute bottom-0 left-0 text-left
            transform transition-all duration-700 ease-out
            ${isVisible.skillsList 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'}
          `}
        >
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