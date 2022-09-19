import React, { useState } from 'react';

// import icons
import { BsCheckCircleFill } from 'react-icons/bs';

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className='flex'>
    {plans.map((plan,currentIndex)=>{
      //destructure plan 
      const {name,price,list,delay}=plan;
      <div key={currentI}>
      </div>
    })}
    </div>
      

  
};

export default PlanList;