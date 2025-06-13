import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import { FaShippingFast, FaHeadset, FaUndoAlt } from 'react-icons/fa';
// import banner1 from '../../src/assets/banners/b1.avif'

 // Sample slide data
 const slides = [
    {
      id: 1,
      title: "Summer Collection",
      subtitle: "New Arrivals 2023",
      // image: '../../src/assets/banners/ban2.png', // - wrong method
      image: '/assets/banners/image (3).png', // - right metho
      cta: "Shop Now"
    },
    {
      id: 2,
      title: "Winter Special",
      subtitle: "Up to 50% Off",
      image: "/assets/banners/ban2.png",
      cta: "Discover More"
    },
    {
      id: 3,
      title: "Limited Edition",
      subtitle: "Exclusive Designs",
      image: "/assets/banners/online-coures 4.jpg",
      cta: "View Collection"
    },
    {
        id: 4,
        title: "Limited Edition",
        subtitle: "Exclusive Designs",
        image: "/assets/banners/online-coures 3.jpg",
        cta: "View Collection"
      },
      {
        id: 5,
        title: "Limited Edition",
        subtitle: "Exclusive Designs",
        image: "/assets/banners/rfm-home.1.jpg",
        cta: "View Collection"
      },
      {
        id: 6,
        title: "Limited Edition",
        subtitle: "Exclusive Designs",
        image: "/assets/banners/online-coures 6.jpg",
        cta: "View Collection"
      },
        {
        id: 7,
        title: "Limited Edition",
        subtitle: "Exclusive Designs",
        image: "/assets/banners/online-coures 5.jpg",
        cta: "View Collection"
      },
        {
        id: 8,
        title: "Limited Edition",
        subtitle: "Exclusive Designs",
        image: "/assets/banners/online-courses6.jpeg",
        cta: "View Collection"
      }
  ];



const HomeBanner = () => {
  return (
    <>
    {/* <div className="bg-white py-2 px-6 shadow-sm hidden lg:block ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <FaShippingFast className="text-orange-500" />
          <span>Free Shipping on orders over ₹999</span>
        </div>
        <div className="flex items-center gap-2">
          <FaHeadset className="text-orange-500" />
          <span>24/7 Customer Support</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUndoAlt className="text-orange-500" />
          <span>Easy 7-Day Returns</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUndoAlt className="text-orange-500" />
          <span>Easy 7-Day Returns</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUndoAlt className="text-orange-500" />
          <span>Easy 7-Day Returns</span>
        </div>
      </div>
    </div> */}

    <section className="pb-12 px-2 sm:px-4 lg:pr-8  bg-gray-50 pt-3">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-8">
          {/* Left column (8/12 width) */}
          <div className="w-full lg:w-8/12 px-4 mb-8 lg:mb-0">
            <div className="relative rounded-xl overflow-hidden h-full min-h-[400px]">
              <Swiper
                modules={[Autoplay, EffectFade, Navigation, ]}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                className="h-full"
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id} className="relative">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover"
                    />
                    {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
                      <div className="px-8 text-white max-w-lg">
                        <span className="text-lg font-semibold mb-2 block">
                          {slide.subtitle}
                        </span>
                        <h2 className="text-4xl font-bold mb-4">
                          {slide.title}
                        </h2>
                        <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-200 transition">
                          {slide.cta}
                        </button>
                      </div>
                    </div> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right column (4/12 width) */}
          <div className="w-full lg:w-4/12 px-0">
            <div className="grid gap-4 h-full">
              {/* First promotional box */}
              <div className="relative rounded-xl min-h-[190px] h-full text-white overflow-hidden">
  <div className="absolute inset-0 bg-[url('/assets/banners/sb1.webp')] bg-cover bg-center"></div>
  <div className="absolute inset-0 bg-blue-600/30"></div>
  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
    <div>
      <span className="text-sm font-medium">Special Offer</span>
      <h3 className="text-2xl font-bold mt-1">Weekend Sale</h3>
    </div>
    <button className="mt-4 px-4 py-2 bg-white text-blue-600 text-sm font-medium rounded-full hover:bg-gray-100 transition w-fit">
      Shop Now
    </button>
  </div>
</div>


              {/* Second promotional box */}
              <div className="relative rounded-xl min-h-[190px] h-full text-black overflow-hidden">
  <div className="absolute inset-0 bg-[url('/assets/bg-img/summer-sale-discount-banner-offer-260nw-2455399257.webp')] bg-cover bg-center"></div>
  <div className="absolute inset-0 bg-amber-500/20"></div>
  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
    <div>
      <span className="text-sm font-medium">New Arrivals</span>
      {/* <h3 className="text-2xl font-bold mt-1">Spring Collection</h3> */}
    </div>
    <button className="mt-4 px-4 py-2 bg-white text-amber-600 text-sm font-medium rounded-full hover:bg-gray-100 transition w-fit">
      Discover
    </button>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default HomeBanner