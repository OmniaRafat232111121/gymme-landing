import React, { useState } from 'react';

// import icons
import { BsCheckCircleFill } from 'react-icons/bs';

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center'>
    {plans.map((plan,currentIndex)=>{
      //destructure plan 
      const {name,price,list,delay}=plan;
      <div key={currentIndex}>
      <div>
      {/*name&price*/}
      <div>
      {/*name*/}
      <div>{name}</div>
      {/*price*/}
      <div>
      <div>
      <span>{price}</span>
      </div>
      </div>
      </div>
      </div>
 


export default PlanList;