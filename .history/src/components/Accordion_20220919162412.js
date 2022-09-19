import React, { useState } from 'react';

// import icons
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  // destructure accordion
  const { question, answer } = accordion;
  return (
    <div  className=' cursor-pointer'>
      
    </div>
  );
};

export default Accordion;
