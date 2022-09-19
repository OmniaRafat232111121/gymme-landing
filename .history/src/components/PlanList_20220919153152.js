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
          <div>
            <div
  >
              <div className='flex flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center'>
                {/* name & price wrapper */}
                <div>
                  {/* name */}
                  <div
                    className={`${
                      currentIndex === index
                        ? 'bg-white text-neutral-500'
                        : 'bg-neutral-500 text-white'
                    } h-[26px] font-primary text-sm font-semibold max-w-min mx-auto px-[14px] flex items-center justify-center mb-8`}
                  >
                    {name}
                  </div>
                  {/* price */}
                
                {/* list & btn wrapper */}
                <div>
                  {/* list */}
                
                  {/* btn */}
             
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;