import React from 'react';
import Hero from '@/components/Hero';

const LandingPage: React.FC = () => {
  return (
    <Hero 
      name="Gusti"
      title="Software Developer & Designer"
      introduction="Passionate about creating innovative solutions at the intersection of technology and design. I build elegant, efficient, and user-centric digital experiences."
      backgroundImage='/backgroundImage.png'
      profileImage="/profile-image.jpg"
      socialLinks={{
        github: "https://github.com/goosetea04",
        linkedin: "https://linkedin.com/in/gustirais",
        twitter: "https://twitter.com/goose_tea_rice"
      }}
    />
  );
};

export default LandingPage;