import React from 'react'
import { CalendarCheck, File } from 'lucide-react'

export const Hero = () => {
  return (
    <div className='text-black mt-4 p-2 flex-col gap-3 '>
        <div className='text-center p-3 flex-col gap-4'>
            
            <h1 className='font-bold text-4xl'>Expert Tax & Financial Advisory Services </h1>
            <h2 className='text-gray-700 mt-2'> Helping individuals and businesses manage taxes, compliance, and financial growth.</h2>

            <div className="flex justify-center mt-7 gap-6 p-2.5 items-center ">

                {/* Book Consultation */}
                <button className="flex gap-3 bg-red-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-red-700 transition duration-300">
                    Book Consultation
                    <CalendarCheck size={22} />
                </button>

                {/* Our Services */}
                <button className="flex gap-3 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-red-400 hover:bg-gray-50 transition duration-300">
                    <File size={22} />
                    Services
                </button>

            </div>
                        

            

            
        </div>
    </div>
  )
}

export default Hero