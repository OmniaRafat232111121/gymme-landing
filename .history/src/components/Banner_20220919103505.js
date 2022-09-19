import React from 'react';
// import data
import { banner } from '../data';

const Banner = () => {
  //destructure banner Data
  const {titlePart1,titlePart2,subtitle,textBtn}=banner;
  return (
<section className='bg-neutral-500 h-[790px]'>
<div className='container mx-auto h-full'>
<div className='flex items-center h-full relative -space-x-48 lg:-space-x-24'>

<div className='text-white flex-1 z-10   pl-6 lg:pl-0'>
<h1 className='h1 text-white mb-8 '>{titlePart1} <br/><span  className='text-primary-200'>{titlePart2}</span></h1>
<p className='max-w-[415px]tex-body-sm tex-body-md lg:text-body-lg mb-8'>{subtitle}</p>
<button className='btn btn-secondary   btn-sm btn-md lg:btn-lg hover:bg-primary-200'>{textBtn}</button>
</div>
<div className='bg-purple-50 w-full h-full bg-cover bg-right bg-banner lg:bg-center bg-no-repeat flex-1'></div>
</div>

   </div>
    </section>
  );
};

export default Banner;
