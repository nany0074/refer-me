import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialSection = () => {
  const [activeTab, setActiveTab] = useState('All Reviews');

  const testimonials = [
    {
      title: 'Comprehensive course!',
      rating: 5,
      text: 'Recently attended the Scrum Master course. The instructor demonstrated profound knowledge of Agile .,',
      author: 'Preethi N',
      role: 'Project Manager',
      source: 'Google',
    },
    {
      title: 'Amazing training ecosystem!',
      rating: 5,
      text: 'This is an amazing training ecosystem. They had assigned individual relationship managers who not only did the tactical ',
      author: 'Rangarajan Rajamani',
      role: 'NA',
      source: 'Google',
    },
    {
      title: 'Well-organized event',
      rating: 5,
      text: 'The workshop was a well-organized event. The trainer was an expert which made it a valuable training.',
      author: 'Karthik Raj Manupatty Ponraj',
      role: 'Lead Consultant',
      source: 'LinkedIn',
    },
    {
      title: 'Well-organized event',
      rating: 5,
      text: 'The workshop was a well-organized event. The trainer was an expert which made it a valuable training.',
      author: 'Karthik Raj Manupatty Ponraj',
      role: 'Lead Consultant',
      source: 'LinkedIn',
    },
    {
      title: 'Well-organized event',
      rating: 5,
      text: 'The workshop was a well-organized event. The trainer was an expert which made it a valuable training.',
      author: 'Karthik Raj Manupatty Ponraj',
      role: 'Lead Consultant',
      source: 'LinkedIn',
    },
  ];

  const filteredTestimonials = testimonials.filter((testimonial) => {
    if (activeTab === 'All Reviews') return true;
    return testimonial.source === activeTab;
  });

  return (
    <>
    <div className='w-full py-14'    style={{
        backgroundImage: `url('/assets/bg-img/poly.avif')`,
        backgroundSize: 'contain',
        // backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}>

  <div>

<div className="max-w-7xl mx-auto py-8 px-4">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-4">
        LEARNER REVIEWS FROM THE WORLD OVER
      </h2>
      <h3 className="text-2xl font-semibold text-center mb-6">
        TESTIMONIALS THAT SPEAK VOLUMES
      </h3>

      {/* Tabs */}
      {/* <div className="flex justify-center space-x-4 mb-8">
        {['All Reviews', 'Google', 'LinkedIn'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab === 'Google' ? (
              <div className="flex items-center">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4 mr-1"
                />
                {tab}
              </div>
            ) : tab === 'LinkedIn' ? (
              <div className="flex items-center">
                <img
                  src="https://www.linkedin.com/favicon.ico"
                  alt="LinkedIn"
                  className="w-4 h-4 mr-1"
                />
                {tab}
              </div>
            ) : (
              tab
            )}
          </button>
        ))}
      </div> */}

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {filteredTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300 transition-all duration-300 hover:shadow-xl hover:border-gray-500"
            >
              <h4 className="text-lg font-semibold mb-2">{testimonial.title}</h4>
              <div className="flex mb-2">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              {/* <a href="#" className="text-blue-500 hover:underline">
                READ MORE
              </a> */}
              <div className="flex items-center mt-4 border-t-2 pt-4">
                {/* <img
                  src="https://via.placeholder.com/40"
                  alt="avatar"
                  className="w-10 h-10 rounded-full mr-3"
                /> */}
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <img
                  src={
                    testimonial.source === 'Google'
                      ? 'https://www.google.com/favicon.ico'
                      : 'https://www.linkedin.com/favicon.ico'
                  }
                  alt={testimonial.source}
                  className="w-5 h-5 ml-auto"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-6 space-x-4">
        <button className="swiper-button-prev-custom w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="swiper-button-next-custom w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
    </div>

    </div>
  
    
    </>
 
  );
};

export default TestimonialSection;