import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealImageProps {
  bottomImageSrc: string;
  topImageSrc: string;
  alt?: string;
}

const ScrollRevealImage: React.FC<ScrollRevealImageProps> = ({ 
  bottomImageSrc, 
  topImageSrc, 
  alt = 'Scroll reveal image' 
}) => {
  const [revealPercentage, setRevealPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate reveal based on container's position in viewport
      const startReveal = windowHeight - height;
      const endReveal = windowHeight;
      
      const progress = Math.max(0, Math.min(
        (startReveal - top) / (endReveal - startReveal), 
        1
      ));

      setRevealPercentage(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden"
    >
      <img 
        src={bottomImageSrc} 
        alt={alt} 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ 
          clipPath: `polygon(0 0, 100% 0, 100% ${100 - revealPercentage}%, 0 ${100 - revealPercentage}%)` 
        }}
      >
        <img 
          src={topImageSrc} 
          alt={alt} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
    </div>
  );
};

export default ScrollRevealImage;