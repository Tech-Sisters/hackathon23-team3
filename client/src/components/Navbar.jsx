/* eslint-disable no-unused-vars */
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-3 font-serif">
      <div className="md:px-20 px-10 py-6 flex flex-row justify-between">
        <h3 className="text-primary font-extrabold text-3xl uppercase">logo</h3>
        {/* <IoMdSearch className="relative" /> */}
        <input
          type="search"
          className="w-[700px] h-[60px] px-10 rounded-full border-2 border-black-100 outline-none placeholder:text-xs placeholder:font-normal placeholder:text-gray placeholder:font-sans"
          placeholder="Search for Movies, Books, and more... "
        />
        {/* <MdOutlineArrowDropDown className="relative" /> */}

        <div className="flex flex-row justify-end gap-5">
          <IoNotifications color="#E31C5F" size={30} className="mt-3" />
          <button className="bg-primary px-6 py-2 text-white text-xl font-medium">
            Login
          </button>
        </div>
      </div>

      <div className="bg-black-200 font-sans flex flex-row gap-5 md:px-20 px-10 py-4">
        <h4 className="text-white font-normal text-2xl">Movies</h4>
        <h4 className="text-white font-normal text-2xl">Books</h4>
        <h4 className="text-white font-normal text-2xl">FAQ</h4>
      </div>
    </nav>
  );
};

export default Navbar;
