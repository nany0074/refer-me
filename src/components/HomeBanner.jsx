import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { FaShippingFast, FaHeadset, FaUndoAlt } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: "Summer Collection",
    subtitle: "New Arrivals 2023",
    image: '/assets/banner-new/online-coures1.1.jpg',
    cta: "Shop Now"
  },
  {
    id: 2,
    title: "Winter Special",
    subtitle: "Up to 50% Off",
    image: "/assets/banner-new/online-coures2.1.jpg",
    cta: "Discover More"
  },
  {
    id: 3,
    title: "Limited Edition",
    subtitle: "Exclusive Designs",
    image: "/assets/banner-new/online-coures3.1.jpg",
    cta: "View Collection"
  },
  {
    id: 4,
    title: "Limited Edition",
    subtitle: "Exclusive Designs",
    image: "/assets/banner-new/online-coures4.1.jpg",
    cta: "View Collection"
  },
  {
    id: 5,
    title: "Limited Edition",
    subtitle: "Exclusive Designs",
    image: "/assets/banner-new/online-coures5.1.jpg",
    cta: "View Collection"
  },
  {
    id: 6,
    title: "Limited Edition",
    subtitle: "Exclusive Designs",
    image: "/assets/banner-new/online-coures8 (4).jpg",
    cta: "View Collection"
  },
];

const HomeBanner = () => {
  return (
    <>
      <section className="pb-12 px-2 sm:px-4 lg:py-0 bg-gray-50 pt-3 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-2 sm:-mx-4 lg:-mx-8">
            {/* Left column (8/12 width) */}
            <div className="w-full lg:w-8/12 px-2 sm:px-4 mb-4 lg:mb-0">
              <div className="relative rounded-xl overflow-hidden h-full min-h-[300px] sm:min-h-[400px]">
                <Swiper
                  modules={[Autoplay, EffectFade, Navigation]}
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Right column (4/12 width) */}
            <div className="w-full lg:w-4/12 px-2 sm:px-4">
              <div className="grid gap-3 sm:gap-4 h-full">
                {/* First promotional box */}
                <div className="relative rounded-xl min-h-[150px] sm:min-h-[190px] h-full text-white overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/assets/banners/sb1.webp')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-blue-600/30"></div>
                  <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-between h-full">
                    <div>
                      <span className="text-xs sm:text-sm font-medium">Special Offer</span>
                      <h3 className="text-xl sm:text-2xl font-bold mt-1">Weekend Sale</h3>
                    </div>
                    <button className="mt-2 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-white text-blue-600 text-xs sm:text-sm font-medium rounded-full hover:bg-gray-100 transition w-fit">
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* Second promotional box */}
                <div className="relative rounded-xl min-h-[150px] sm:min-h-[190px] h-full text-black overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/assets/bg-img/summer-sale-discount-banner-offer-260nw-2455399257.webp')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-amber-500/20"></div>
                  <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-between h-full">
                    <div>
                      <span className="text-xs sm:text-sm font-medium">New Arrivals</span>
                    </div>
                    <button className="mt-2 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-white text-amber-600 text-xs sm:text-sm font-medium rounded-full hover:bg-gray-100 transition w-fit">
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