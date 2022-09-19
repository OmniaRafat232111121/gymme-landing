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
      
      </div>
      </div>
      </div>
    </section>
  );
};

export default Community;
