import React, { useState } from 'react';
// import icons
import { BsCheckCircleFill } from 'react-icons/bs';
const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);
  return (
   <div className='bg-pink-200'>
   {plans.map((plan,currentIndex)=>{
    const { name, price, list, delay } = plan;
    return(
      //destructure plan 
     <div key={currentIndex}>
          {/*name&price*/}
     <div> 
     {/*name*/}
     <div>{name}</div>
     <div>
     <div>
  sp
     </div>
     </div>
     
     </div>
     </div>
    );
   })}
   </div>
  )
};

export default PlanList;
