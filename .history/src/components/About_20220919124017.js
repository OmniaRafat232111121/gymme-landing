import React from 'react';

// import data
import { about } from '../data';

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, icon, link } = about;
  return (
    <section className='py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
    <div className='container mx-auto'>
    <div className='section-title-group justify-start'>
     <img src={icon} alt=""/>
     <h2 className='h2 section-title'>
     {title} <span className='text-primary-200'>.</span>
   </h2>
    </div>
    
    </div>
    </section>

  );
};

export default About;
