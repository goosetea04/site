"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface ScrollTransitionProps {
  image1Src: string;
  image2Src: string;
  image1Alt?: string;
  image2Alt?: string;
  onImage1Click?: () => void;
  onImage2Click?: () => void;
  onTransitionComplete?: () => void;
}

const ScrollTransitionComponent: React.FC<ScrollTransitionProps> = ({ 
  image1Src, 
  image2Src, 
  image1Alt = 'First Image', 
  image2Alt = 'Second Image',
  onImage1Click,
  onImage2Click,
  onTransitionComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isTransitionComplete, setIsTransitionComplete] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollPosition = window.scrollY;
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;

        const progress = Math.min(
          Math.max((scrollPosition - containerTop) / (containerHeight / 2), 0),
          1
        );

        setScrollProgress(progress);

        if (progress >= 1 && !isTransitionComplete) {
          setIsTransitionComplete(true);
          onTransitionComplete?.();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onTransitionComplete, isTransitionComplete]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-full w-full overflow-hidden"
    >
      <div 
        className="sticky top-0 h-screen w-full flex items-center justify-center"
      >
        <button 
          onClick={onImage1Click}
          className={`absolute w-full h-full transition-all duration-300 ease-out ${
            scrollProgress > 0 ? 'opacity-0 translate-x-[-100%]' : 'opacity-100 translate-x-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image 
              src={image1Src} 
              alt={image1Alt}
              fill
              quality={100}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </button>

        <button 
          onClick={onImage2Click}
          className={`absolute w-full h-full transition-all duration-300 ease-out ${
            scrollProgress > 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'
          }`}
        >
          <div className="relative w-full h-full">
            <Image 
              src={image2Src} 
              alt={image2Alt}
              fill
              quality={100}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ScrollTransitionComponent;