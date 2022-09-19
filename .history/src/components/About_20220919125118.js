import React from 'react';

// import data
import { about } from '../data';

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2,subtitle3, icon, link ,lin} = about;
  return (
    <section className='py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
    <div className='container mx-auto'>
    <div className='section-title-group justify-start'>
     <img data-aos='fade-up' data-aos-delay='100'  src={icon} alt=""/>
     <h2 className='h2 section-title' data-aos='fade-up' data-aos-delay='100'>
     {title} <span className='text-primary-200'>.</span>
   </h2>
    </div>
    <p
    className='md:text-body-md mb-12'
    data-aos='fade-up'
    data-aos-delay='200'
  >
    {subtitle1}
  </p>
  <p
    className='md:text-body-md mb-8'
    data-aos='fade-up'
    data-aos-delay='300'
  >
    {subtitle2}
  </p>

  <p
  className='md:text-body-md mb-8'
  data-aos='fade-up'
  data-aos-delay='400'
>
  {subtitle3}
</p>
  <div data-aos='fade-up' data-aos-delay='500'>
    <a
      className='link flex items-center gap-x-4 hover:gap-x-6 transition-all'
      href='#'
    >
      {link}
      <IoIosArrowDroprightCircle className='text-2xl' />
      </a>
    </div>
    </div>
    </section>

  );
};

export default About;
