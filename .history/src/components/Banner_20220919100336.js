import React from 'react';
// import data
import { banner } from '../data';

const Banner = () => {
  //destructure banner Data
  const {titlePart1,titlePart2,subtitle,textBtn}=banner;
  return (
    <section className='bg-pink-200'>
<div className='container mx-auto h-full'>
<div>
*
<div>
<h1>{titlePart1} <br/><span>{titlePart2}</span></h1>
<button>{textBtn}</button>
</div>

</div>

   </div>
    </section>
  );
};

export default Banner;
