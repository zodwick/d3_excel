import React from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header>
      <div className="bg-transparent border-b border-emerald-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 lg:h-fit pt-5 pb-2">
            <div className="hidden lg:flex lg:items-center lg:space-x-10 text-[#b7967a] font-sans font-semibold">
              <a href="#" title="" className="text-base font-medium ">
                {" "}
                Features{" "}
              </a>

              <a href="#" title="" className="text-base font-medium ">
                {" "}
                Resources{" "}
              </a>

              <a href="#" title="" className="text-base font-medium ">
                {" "}
                Pricing{" "}
              </a>
            </div>

            <div className="lg:absolute lg:-translate-x-1/2  lg:left-1/2">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex items-baseline">
                  {/* <img
                    className="w-auto h-10 lg:h-12 "
                    src="/bg/logo_use.png"
                    alt=""
                  /> */}
                  <h1 className="bg-gradient-to-br from-[#b7967a] via-[#e0a16a] to-[#3d2714] inline-block text-transparent text-4xl  bg-clip-text">
                    Unfold
                  </h1>
                  
                </a>
              </div>
            </div>

            <Button
              variant="outline"
              className=" bg-[#b7967a] text-black font-sans font-semibold border-none  "
            >
              Try now
            </Button>
          </nav>
        </div>
      </div>

      <nav className="py-4 bg-white lg:hidden">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Menu
            </p>

            <button
              type="button"
              className="inline-flex p-2  transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6">
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                title=""
                className="py-2 text-base font-medium  transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                className="py-2 text-base font-medium  transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Resources{" "}
              </a>

              <a
                href="#"
                title=""
                className="py-2 text-base font-medium  transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Pricing{" "}
              </a>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="flex flex-col space-y-2">
              <a
                href="#"
                title=""
                className="py-2 text-base font-medium  transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Sign up{" "}
              </a>

              <a
                href="#"
                title=""
                className="py-2 text-base font-medium  transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Sign in{" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
