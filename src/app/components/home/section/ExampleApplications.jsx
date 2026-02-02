"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sliderData = [
  { title: "Warehouses and Distribution Centers", description: "Securing valuable inventory, creating separate storage areas, and restricting access to hazardous materials.", image: '/assets/example.png' },
  { title: "Manufacturing Facilities", description: "Guarding machinery, creating controlled environments for specific processes, and securing tool cribs and equipment.", image: '/assets/example.png' },
  { title: "Data Centers", description: "Securing server racks and IT equipment, ensuring data protection and compliance.", image: '/assets/example.png' },
  { title: "Logistic", description: "Securing server racks and IT equipment, ensuring data protection and compliance.", image: '/assets/example.png' }
];

// Split into chunks of 3 items per slide
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const ExampleApplications = () => {
  const slides = chunkArray(sliderData, 3);
  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent((prev) => prev === 0 ? slides.length - 1 : prev - 1);
  const handleNext = () => setCurrent((prev) => prev === slides.length - 1 ? 0 : prev + 1);

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto py-20 px-4 md:px-16">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] text-center mb-16">
          Example Applications
        </h2>

        <div className="relative max-w-full mx-auto">
          <div className="overflow-hidden rounded-[24px]">
            {slides.map((group, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out ${
                  index === current ? 'translate-x-0' : 'hidden'
                }`}
              >
                {group.map((item, idx) => (
                  <div key={idx} className="relative h-[420px] rounded-[24px] overflow-hidden cursor-pointer shadow-sm group">
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
                      <p className="text-[15px] text-gray-200 leading-relaxed font-medium">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev} 
            className="absolute left-[-20px] md:left-[-55px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full shadow-md bg-gray-400 text-white transition-all hover:bg-[#FFA024]"
          >
            <ChevronLeft size={22} />
          </button>
          <button 
            onClick={handleNext} 
            className="absolute right-[-20px] md:right-[-55px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full shadow-md bg-gray-400 text-white transition-all hover:bg-[#FFA024]"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-12 gap-2">
            {slides.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrent(idx)} 
                className={`w-3 h-3 rounded-full ${current === idx ? 'bg-[#FFA024]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleApplications;
