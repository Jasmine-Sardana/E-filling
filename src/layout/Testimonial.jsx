import React from 'react'
import { Star,Quote } from 'lucide-react'

const testimonials = [
    {
    name: 'Rajesh Kumar',
    role: 'CEO, Tech Solutions Pvt Ltd',
    content: 'YSA has been instrumental in managing our company finances and tax compliance. Their expertise and professionalism are unmatched. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Business Owner',
    content: 'The team at YSA made GST registration and filing so simple. They are always available to answer questions and provide guidance. Excellent service!',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Entrepreneur',
    content: 'Professional, reliable, and trustworthy. YSA helped me with tax planning and saved me a significant amount. I wouldn\'t go anywhere else.',
    rating: 5,
  },
]

export function Testimonial() {
  return (
    <section> 
        <div>
            <div>
                <h1 className='m-3 p-3 lg: text-3xl font-bold justify text-center'> Client Testimonials </h1>
                <div className="w-40 h-1 bg-red-600 mx-auto mb-4"></div>
                <p className='text-black'>See what our clients say about us! </p>
            </div>

            <div className="lg:flex justify-center md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
                        >
                        <Quote className="text-red-100 absolute top-6 right-6" size={48} />
                        <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                            ))}
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                        <div className="border-t border-gray-200 pt-4">
                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                    </div>
                ))}
                </div>
            
        </div>
    </section>
  )
}

export default Testimonial
