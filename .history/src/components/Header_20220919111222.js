import React, { useState, useEffect } from 'react';

// import header data
import { header } from '../data';

// import components
import Nav from '../components/Nav';
import NavMobile from './NavMobile';

// import icons
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

const Header = () => {
  //destructring header data 
  const {logo,btnLoginText,btnSignupText}=header;
  return (
   <header>
   <img
   </header>
  );
};

export default Header;
