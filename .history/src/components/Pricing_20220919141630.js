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
   <div className='section-title-group max-w-['>
   <img src={icon} alt=""/>
   <h2>{title}</h2>
   </div>
   </section>
 
  );
};

export default Pricing;
