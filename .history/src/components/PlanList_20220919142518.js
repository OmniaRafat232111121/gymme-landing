import React, { useState } from 'react';
// import icons
import { BsCheckCircleFill } from 'react-icons/bs';
const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);
  return (
   <div className='bg-pink-200'>
   {plans.map((plan,currentIndex)=>{
    return(
      //destructure pla
     <div key={currentIndex}>
     plan
     </div>
    );
   })}
   </div>
  )
};

export default PlanList;