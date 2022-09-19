import React from 'react';
// import data
import { workouts } from '../data';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../workoutSlider.css';
// import required modules
import { Navigation } from 'swiper';
const WorkoutSlider = () => {
  // destructure data
  const { programs } = workouts;
  return (
    
  <Swiper>
  {programs.map((program,index)=>{
    const { image, name } = program;
    return(
      <SwiperSlide className='max-w-[320px] max-h-[320px] bg-purple-200' key={index}>
      <img className='w-full h-full object-cover' src={image} alt='' />
      <div className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center justify-center rounded-[1px]'>
      <div className='font-primary font-semibold text-sm text-neutral-500'>
      <div>{name}</div>
      </div>
      </div>
      </SwiperSlide>
    )
  })}
  </Swiper>
  );
};

export default WorkoutSlider;
