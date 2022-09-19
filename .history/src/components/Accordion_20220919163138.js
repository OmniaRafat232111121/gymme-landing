import React, { useState } from 'react';

// import icons
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  // destructure accordion
  const { question, answer } = accordion;
  return (
    <div  className=' cursor-pointer'>
      <div className='bg-white border-rounded-sm'>
     <div className='min-h-[60px] flex-items-center justify-between'>
     <h6 className='h6'>{question}</h6>
     <div>
     {isOpen ?(
      
     )}
     </div>
     </div>
      </div>
    </div>
  );
};

export default Accordion;
