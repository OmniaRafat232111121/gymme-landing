import React, { useState } from 'react';

// import icons
import { BsCheckCircleFill } from 'react-icons/bs';

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4'>
      {plans.map((plan, currentIndex) => {
        // destructure plan
        const { name, price, list, delay } = plan;
        return (
     
        )
      

  
};

export default PlanList;