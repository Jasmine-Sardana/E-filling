import React from 'react'
import Hero from '../layout/Hero';
import ChooseUs from '../layout/ChooseUs';
import Testimonial from '../layout/testimonial';


export const Home = () => {
  return (
    <div className='p-4'>
      <Hero/>
      <br /> 
      <ChooseUs/>
      <br />
      <Testimonial/>
    </div>
    

  );
}



export default Home;