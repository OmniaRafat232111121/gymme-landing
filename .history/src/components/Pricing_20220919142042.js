import React from 'react';
// import data
import { pricing } from '../data';
// import components
import PlanList from './PlanList';

const Pricing = () => {
  // destructure pricing
  const { icon, title, plans } = pricing;
  return (
   <section className=' section'>
   <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0' 
   data-aos='fade-up'
   data-aos-offset='200'
   data-aos-delay='200'>
   <img src={icon} alt=""/>
   <h2 className='h2 section-title'>
          {title} <span className='text-primary-200'>.</span>
        </h2>

          {/* plan list */}
      <PlanList plans={plans} />
   </div>
   </section>
 
  );
};

export default Pricing;
