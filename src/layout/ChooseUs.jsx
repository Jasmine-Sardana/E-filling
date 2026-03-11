import React from 'react'
import { Award, UserCheck, Zap, Shield } from 'lucide-react'


const features = [
    {
        icon : Award,
        title: "20+ Years of Experience",
        description: "Proven track record in delivering exceptional financial services"
    },
    {
        icon: UserCheck,
        title: 'Expert CA Professionals',
        description: 'Highly qualified and certified chartered accountants',
    },
    {
        icon: Zap,
        title: 'Fast & Reliable Service',
        description: 'Quick turnaround time without compromising on quality',
    },
    {
    icon: Shield,
        title: 'Trusted by Businesses',
        description: 'Serving hundreds of satisfied clients across industries',
    },
];

export function ChooseUs(){
    return(
        <section className='lg:px-8 sm:px-6'>
            <div className=' max-w-4xl mx-auto text-center'>
                <h2 className='text-3xl font-semibold lg:p-5 '> Why Choose Us?</h2>
                <div className="w-40 h-1 bg-red-600 mx-auto mb-4"></div>
            </div>
            
            <div className='grid lg: grid-cols-2 gap-10 p-4 '>
                {features.map((features,index) =>{
                    const Icon = features.icon;

                    return(
                        <div
                            key = {index}
                            className='text-center group'>
                            <div className='w-20 h-20 group-hover:scale-110 transition-transform bg-red-600 rounded-2xl flex items-center justify-center mx-auto '>
                            <Icon className="text-white mb-4 size={36} "/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 p-3">
                                {features.title}
                            </h3>
                            <p className="text-gray-600">
                                {features.description}
                            </p>

                        </div>
                    )

                })}
            </div>

        </section>
    )
}
export default ChooseUs
