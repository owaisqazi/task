import { Search } from 'lucide-react'
import React from 'react'
import ServiceCart from './ServiceCart'

const Services = () => {
    return (
        <div className="bg-white p-4 sm:p-6 md:p-8 font-sans">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8">

                {/* Top Filters + Search */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">

                    {/* Filters */}
                    <div className="flex gap-4 sm:gap-6 overflow-x-auto md:overflow-visible 
                      text-black text-[14px] sm:text-[15px] font-medium w-full md:w-auto pb-2">
                        {[
                            "Latest",
                            "Popular",
                            "Featured",
                            "Price: Low–High",
                            "Price: High–Low",
                        ].map((item, i) => (
                            <button
                                key={i}
                                className="pb-2 sm:pb-3 hover:text-[#ffa024] transition-all relative whitespace-nowrap"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-105">
                        <input
                            type="text"
                            placeholder="Search your product here"
                            className="w-full border border-gray-200 rounded-full 
                     py-4 sm:py-5 pr-14 ps-4 
                     focus:border-orange-400 placeholder:text-gray-400 text-[13px] sm:text-[14px]"
                        />
                        <button
                            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 
                     bg-[#FFA920] p-2.5 sm:p-3 rounded-full"
                        >
                            <Search size={18} className="text-black sm:size-5" />
                        </button>
                    </div>

                </div>

                {/* Product Grid */}
                <ServiceCart />
            </div>
        </div>

    )
}

export default Services