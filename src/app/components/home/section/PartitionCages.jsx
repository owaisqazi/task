/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PartitionCages = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h4 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-sm uppercase text-[#FFA920]">
            Products/ Partition and Cages
          </h4>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-black capitalize">
            Partitions and <span className='text-[#670000]'>Cages</span>
          </h1>
          <p className="max-w-2xl font-light text-[#02113799] mb-3 md:text-lg lg:text-xl ">
           Industrial partitions and cages are physical barriers in industrial and commercial settings to create distinct, secure areas within a larger space. They are typically constructed from sturdy materials like wire mesh and steel, providing both security and organization. 
          </p>
          <p className="max-w-2xl font-light text-[#02113799] mb-3 md:text-lg lg:text-xl ">
           Industrial partitions and cages are durable structural solutions designed to divide, secure, and organize large industrial or commercial spaces. Built with heavy-gauge wire mesh, reinforced steel panels, and strong framing, they offer long-term reliability in demanding environments. These systems integrate seamlessly into existing facility layouts and can be expanded, relocated, or reconfigured as operational needs evolve. With multiple door options, locking systems, and customizable layouts, they provide flexible, secure, and efficient workspace management.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            View Products
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/assets/PartitionCages.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>

  )
}

export default PartitionCages
