import React from 'react';

// import data
import { workouts } from '../data';
const Workouts = () => {
  // destructure workouts data
  const { title, icon } = workouts;
  return (
    <section className='section'>
    <div className='section-title-group max-w-[540px] mx-auto p'>
    </div>
    </section>
  );
};

export default Workouts;
