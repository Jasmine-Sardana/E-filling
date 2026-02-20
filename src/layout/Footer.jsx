import React from 'react'
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Copyright } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='bg-red-500/80 text-white'>
        <div className='text-center'>

          <div>
            <h2 className='my-1 font-bold'>YSA</h2>
            <p>" Tax planning is not about avoiding taxes; it’s about managing them wisely "</p>
          </div>
          <div className='flex justify-between p-2 gap-5'>
            <div className='flex '>
              <p className='flex gap-10 '>Follow us on </p>
                <ul className='flex gap-10 mx-10'>
                  <li className='cursor-pointer hover:text-black transition duration-300'><Linkedin/></li>
                  <li className='cursor-pointer hover:text-black transition duration-300'><Facebook/></li>
                  <li className='cursor-pointer hover:text-black transition duration-300'><Instagram/></li>
                </ul>
                
            </div> 

            <div className='flex justify-between'>
                <p className='flex gap-3 sm:gap-2'><Copyright/> All right reserved</p>
              </div>
            </div>
          


        </div>
    </footer>
  );
};



export default Footer