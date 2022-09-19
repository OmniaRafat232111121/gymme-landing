import React, { useState } from 'react';

// import icons
import { BsCheckCircleFill } from 'react-icons/bs';

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className='flex'>
    {plans.map((plan,currentIndex)=>{
      //destructure <i class="fa fa-planeconst " aria-hidden="true"></i>
    })}
    </div>
      

  
};

export default PlanList;