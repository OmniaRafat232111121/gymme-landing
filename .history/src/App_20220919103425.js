import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Workouts from './components/Workouts';
import Pricing from './components/Pricing';
import Community from './components/Community';
import Faq from './components/Faq';
import Join from './components/Join';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
  
      <Banner />

    </div>
  );
};

export default App;
