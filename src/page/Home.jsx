import React from 'react'
import Footer from '../layout/Footer';

export const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'> 
      <main className='flex-grow'>
        <h1 className='text-xl text-center py-60'>My home page</h1>
      </main>

      <Footer/>
    </div>

    
  );
}



export default Home;