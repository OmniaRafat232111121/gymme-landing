import React from 'react';
// import data
import { community } from '../data';
// import components
import CommunitySlider from './CommunitySlider';
const Community = () => {
  // destructure community data
  const { icon, title, testimonials } = community;
  return (
    <section className='section relative'>
      <div className='container mx-auto'>
      <div className='flex'>
      {/*section title*/}
      <div  className='section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto'
      data-aos='fade-up'
      data-aos-offset='200'
      data-aos-delay='200'>
      <img src={icon} alt='' />
      <h2 className='h2 section-title'>
        {title} <span className='text-primary-200'>.</span>
      </h2>
    </div>
    {/*slii}
      </div>
      </div>
      
    </section>
  );
};

export default Community;
