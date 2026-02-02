/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { HandHeart, Network, ShieldCheck } from 'lucide-react'
import React from 'react'

const Characteristics = [
    {
        title: "Security",
        description: "They prevent unauthorized access to valuable inventory, tools, equipment, or sensitive areas like server rooms and hazardous material storage.",
        icon: <img src='/assets/keyone.png' alt='' size={32} />
    },
    {
        title: "Organization",
        description: "They help streamline workflow by creating specific work zones and separating different types of processes or materials within a facility.",
        icon: <img src='/assets/keytwo.png' alt='' size={32} />
    },
    {
        title: "Safety",
        description: "They contribute to a safer work environment by isolating hazardous areas or machinery and protecting employees from potential dangers.",
        icon: <img src='/assets/keythree.png' alt='' size={32} />
    }
]

const KeyCharacteristics = () => {
    return (
        <section className="bg-[#FFF5E0] py-20 px-4 md:px-16">
            <h4 className=" text-[26px] md:text-[45px] font-bold  mb-4 text-2xl text-center uppercase text-black">
                Key Characteristics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Characteristics?.map((items, i) => (
                    <div key={i} className='bg-white p-10 rounded-[20px] shodow-sm hover:shedow-md transition-shadow border border-gray-50 flex flex-col items-start'>
                        <div className='mb-6 p-2 text-[#FFA920] rounded-lg'>
                            {items?.icon}
                        </div>
                        <h3 className='mb-4 text-black text-[24px] font-bold rounded-lg'>
                            {items?.title}
                        </h3>
                        <p className='text-gray-600 text-md leading-relaxed mb-6'>
                            {items?.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default KeyCharacteristics