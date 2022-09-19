import React from 'react';
// import data
import { faq } from '../data';
// import components
import Accordion from './Accordion';

const Faq = () => {
  // destructure faq data
  const { icon, title, accordions } = faq;
  return (
    <section className='section pt-[480px] lg:pt-[280px] mb-[80px'>
      <div className='max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-6'>
        {/* section title */}
        <div
          className='section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='200'
        >
          <img className='lg:hidden' src={icon} alt='' />
          <h2 className='h2 section-title lg:mt-[100px]'>
            {title} <span className='text-primary-200'>.</span>
          </h2>
        </div>
        {/* accordion list */}
        <div
          className='flex flex-col gap-y-4 px-4'
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-delay='200'
        >
         
        </div>
      </div>
    </section>
  );
};

export default Faq;
