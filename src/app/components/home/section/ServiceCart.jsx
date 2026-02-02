/* eslint-disable @next/next/no-img-element */
"use client"
import { Heart } from "lucide-react"
import React, { useState } from "react"
import CustomButton from "../../ui/CustomButton"

const ProductCart = [
  {
    id: 1,
    title: "36″ and 48″ Wide 5-S Storage Cabinets",
    price: "$1,523.66 – $1,544.67",
    image: "/assets/cart.png",
  },
  {
    id: 2,
    title: "36″ Small Parts Storage and Security Cabinets",
    price: "$1,933.93 – $2,180.76",
    image: "/assets/cart.png",
  },
  {
    id: 3,
    title: "Adjustable Spring Safety Gate",
    price: "$159.91 – $199.55",
    image: "/assets/cart.png",
  },
  {
    id: 4,
    title: "All Welded Heavy Duty Gear Lockers",
    price: "$534.61 – $1,172.86",
    image: "/assets/cart.png",
  },
  {
    id: 5,
    title: "Extra Product",
    price: "$100 – $200",
    image: "/assets/cart.png",
  },
]

const ServiceCart = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 4
  const totalPages = Math.ceil(ProductCart.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = ProductCart.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <>
      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-10">
        {currentItems.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="relative bg-[#F5F5F5] rounded-[20px] p-6 mb-5 aspect-[1.35/1] flex items-center justify-center group overflow-hidden">
              <div className="absolute top-2 left-0 z-10">
                <img
                  src="/public/assets/tag.png"
                  className="w-auto h-9 object-contain"
                  alt=""
                />
              </div>

              <button className="absolute top-4 right-4 bg-white p-3 rounded-full text-gray-400 hover:bg-red-400 transition-colors z-20">
                <Heart size={20} />
              </button>

              <img
                src={product.image}
                alt=""
                className="w-auto max-h-[85%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="px-1 grow">
              <h3 className="font-bold text-[#000000] text-[16px] mb-4 min-h-10.5">
                {product.title}
              </h3>
              <hr className="border-gray-100 mb-4" />
              <p className="mb-3 text-[#670000]">{product.price}</p>
            </div>

            <div className="flex gap-2.5">
              <CustomButton
                hoverCorlor="#ffa024e0"
                bgColor="#FFA920"
                text="Add to Cart"
                textColor="#000"
                size="13px"
              />
              <CustomButton
                hoverCorlor="#a7a7a7"
                bgColor="#dddbdb"
                text="Add to Cart"
                textColor="#000"
                size="13px"
              />
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION (UI SAME) */}
      <nav className="flex items-center justify-center gap-x-1 mt-10">
        {/* Previous */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex items-center text-sm rounded-lg text-black hover:bg-[#FFA920]"
        >
          ‹
        </button>

        <div className="flex items-center gap-x-1">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`min-h-9.5 min-w-9.5 flex justify-center items-center py-2 px-3 text-sm rounded-lg text-black hover:bg-[#FFA920]
                ${currentPage === page ? "bg-[#FFA920]" : ""}`}
            >
              {page}
            </button>
          ))}

          <button className="min-h-9.5 min-w-9.5 flex justify-center items-center text-black">
            •••
          </button>

          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`min-h-9.5 min-w-9.5 flex justify-center items-center py-2 px-3 text-sm rounded-lg text-black hover:bg-[#FFA920]
              ${currentPage === totalPages ? "bg-[#FFA920]" : ""}`}
          >
            {totalPages}
          </button>
        </div>

        {/* Next */}
        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(totalPages, p + 1))
          }
          className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex items-center text-sm rounded-lg text-black hover:bg-[#FFA920]"
        >
          ›
        </button>
      </nav>
    </>
  )
}

export default ServiceCart
