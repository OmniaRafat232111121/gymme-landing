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
   <div>
   <img src={icon} al/>
   </div>
   </section>
 
  );
};

export default Pricing;
