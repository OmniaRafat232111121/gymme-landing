import React from 'react';

// import data
import { workouts } from '../data';
const Workouts = () => {
  // destructure workouts data
  const { title, icon } = workouts;
  return (
    <section className='section'>
    <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
    data-aos='fade-up'
    data-aos-delay='200'>
   
    </div>
    </section>
  );
};

export default Workouts;
