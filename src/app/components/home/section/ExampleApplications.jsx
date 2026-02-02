/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const sliderData = [
    {
        title: "Warehouses and Distribution Centers",
        description: "Securing valuable inventory, creating separate storage areas, and restricting access to hazardous materials.",
        image: '/assets/example.png'
    },
    {
        title: "Manufacturing Facilities",
        description: "Guarding machinery, creating controlled environments for specific processes, and securing tool cribs and equipment.",
        image: '/assets/example.png'
    },
    {
        title: "Data Centers",
        description: "Securing server racks and IT equipment, ensuring data protection and compliance.",
        image: '/assets/example.png'
    },
    {
        title: "Logistic",
        description: "Securing server racks and IT equipment, ensuring data protection and compliance.",
        image: '/assets/example.png'
    }
];

const ExampleApplications = () => {
    return (
        <div className="bg-white">
            <div className="max-w-360 mx-auto py-20 px-4 md:px-16">
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] text-center mb-16">
                    Example Applications
                </h2>

                <div className="relative max-w-310 mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        navigation={{
                            nextEl: ".btn-next",
                            prevEl: ".btn-prev",
                        }}
                        pagination={{
                            clickable: true,
                            el: ".dots-container",
                        }}
                        className="rounded-[24px]"
                    >
                        {sliderData.map((item, index) => (
                            <SwiperSlide key={index}>
                                {/* Each slide gets its own group */}
                                <div className="relative h-[420px] rounded-[24px] overflow-hidden cursor-pointer shadow-sm group">
                                    <div className="h-full w-full overflow-hidden rounded-[24px]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                    <div className="absolute top-10 left-0 p-8 text-white z-10">
                                        <h3 className="text-[24px] font-bold mb-4 leading-tight">{item.title}</h3>
                                        <p className="text-[15px] text-gray-200 leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button className="btn-prev absolute left-[-20px] md:left-[-55px] top-1/2 -translate-y-1/2 z-20 bg-[#FFA024] w-11 h-11 flex items-center justify-center rounded-full shadow-md text-white transition-all hover:bg-orange-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none">
                        <ChevronLeft size={22} />
                    </button>

                    <button className="btn-next absolute right-[-20px] md:right-[-55px] top-1/2 -translate-y-1/2 z-20 bg-[#FFA024] w-11 h-11 flex items-center justify-center rounded-full shadow-md text-white transition-all hover:bg-orange-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none">
                        <ChevronRight size={22} />
                    </button>
                </div>


                {/* Pagination Dots */}
                <div className="dots-container flex justify-center mt-12 gap-2"></div>

                <style jsx global>{`
          .dots-container .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #d1d5db;
            opacity: 1;
          }
          /* Active dot ko yellow (orange) karne ke liye */
          .dots-container .swiper-pagination-bullet-active {
            background: #ffa024 !important;
          }
        `}</style>
            </div>
        </div>
    )
}

export default ExampleApplications