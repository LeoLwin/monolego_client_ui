import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row xl:flex-row w-full bg-sky-950 h-auto p-4">
        <div className="w-full flex justify-between px-5  lg:w-1/5 xl:w-1/5 flex sm:flex-row ">
          <div>
            <h1 className="text-gray-100 font-sans text-4xl font-bold tracking-wide">
              APK
            </h1>
          </div>
          <div className="block sm:hidden md:block lg:hidden text-center">
            <p className="text-gray-200 font-sans text-2xl font-bold tracking-[.10em]">
              Icon
            </p>
          </div>
        </div>

        <div className="w-full lg:w-3/5 xl:w-3/5 text-center mb-2 lg:mb-0">
          <p className="text-gray-200 font-sans text-2xl font-bold tracking-[.10em] sm:text-sm md:text-base lg:text-2xl">
            Style Speaks Louder Than Words.
          </p>
        </div>

        <div className=" hidden md:block w-full lg:w-1/5 xl:w-1/5 text-center">
          <p className="text-gray-200 font-sans text-2xl font-bold tracking-[.10em]">
            Icon
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
