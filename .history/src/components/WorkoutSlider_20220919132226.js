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
    return(
      <SwiperSlide key={index}>
      <img src={program.image}/>
      <div>
      <div>
      
      </div>
      </div>
      </SwiperSlide>
    )
  })}
  </Swiper>
  );
};

export default WorkoutSlider;
