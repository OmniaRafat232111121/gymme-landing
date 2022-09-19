import React, { useState, useEffect } from 'react';

// import header data
import { header } from '../data';

// import components
import Nav from '../components/Nav';
import NavMobile from './NavMobile';

// import icons
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

const Header = () => {
  //header state  
  const [isActive,setIsActive]=useState(false);

  //destructring header data 
  const {logo,btnLoginText,btnSignupText}=header;
  return (
   <header className={`${isActive ?'bg-neutral-500 py-[16px]':'bg-transparent py-[20px]'}fixed max-w-[1440px] left-0 right-0 flex item`}>
   <a href=" ">
   <img src={logo} alt=" " />
   </a>
   {/*nav - initially hidden-show on dsktop*/}
   <Nav/>
   {/*btn -initially hidden -show on Desktop*/}
<div>
<button>{btnLoginText}</button>
<button>{btnSignupText}</button>
</div>
<div className='lg:hiddeb absolute right-4 top-0'>
</div>
  {/*navmobilde-hide on desktop*/}
  


   </header>
  );
};

export default Header;
