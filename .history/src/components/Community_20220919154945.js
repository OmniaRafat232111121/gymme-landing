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
      {/*}
      </div>
      </div>
    </section>
  );
};

export default Community;
