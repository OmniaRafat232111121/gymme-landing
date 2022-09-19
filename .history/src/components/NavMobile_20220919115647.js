import React from 'react';
// import data
import { nav } from '../data';

const NavMobile = ({navMobile}) => {
  return (
    <nav  className={`${  navMobile ? 'min-h-screen' : 'min-h-0'}`}>

    </nav>

  );
};

export default NavMobile;
