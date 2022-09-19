import React from 'react';
// import data
import { pricing } from '../data';
// import components
import PlanList from './PlanList';

const Pricing = () => {
  // destructure pricing
  const { icon, title, plans } = pricing;
  return (
   <section className='bg-pink-200 section'>
   <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0' data-aos='fade-up'
   data-aos-offset='200'
   data-aos-delay='200'>
   <img src={icon} alt=""/>
   <h2>{title}</h2>
   </div>
   </section>
 
  );
};

export default Pricing;
