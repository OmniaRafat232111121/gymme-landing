import React from 'react';
// import data
import { banner } from '../data';

const Banner = () => {
  //destructure banner Data
  const {titlePart1,titlePart2,subtitle,textBtn}=banner;
  return (
<section className='bg-neutral-500 h-[790px]'>
<div className='container mx-auto h-full'>
<div>

<div className='text-'>
<h1 className='h1 text-white mb-8'>{titlePart1} <br/><span>{titlePart2}</span></h1>
<button>{textBtn}</button>
</div>
<div>image</div>
</div>

   </div>
    </section>
  );
};

export default Banner;
