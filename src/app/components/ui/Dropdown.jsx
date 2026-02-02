import React from "react";

const Dropdown = () => {
  return (
    <>
      <div className="relative">
        <button
          popovertarget="desktop-menu-product"
          className="flex items-center gap-x-1 text-sm/6 font-semibold text-white"
        >
          About Us
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            data-slot="icon"
            aria-hidden="true"
            className="size-5 flex-none text-white"
          >
            <path
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <el-popover
          id="desktop-menu-product"
          anchor="bottom"
          popover=""
          className="w-screen max-w-md overflow-hidden left-[37%] top-24 rounded-3xl bg-gray-100 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(3)] backdrop:bg-transparent open:block data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
        >
          <div className="p-4">
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
              <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-900/50 group-hover:bg-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6 text-gray-900 group-hover:text-gray-500"
                >
                  <path
                    d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-black">
                  Analytics
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-800">
                  Get a better understanding of your traffic
                </p>
              </div>
            </div>
          </div>
        </el-popover>
      </div>
    </>
  );
};

export default Dropdown;
