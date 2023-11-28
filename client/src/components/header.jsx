import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex w-full py-3.5 pl-20">
        <div className="">
          <img src={Logo} alt="" className="w-16" />
        </div>
        <div>
          <input
            placeholder="Search for Movies, Books, and more... "
            className="ml-24 mr-48 font-serif h-10 bg-gray-50 border border-[#1A252F] text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-[#1A252F] block w-11/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
          </input>
        </div>
        <div>
          <button
            type="button"
            className="font-serif font-normal ml-[280px] text-white bg-pink hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-[4px] text-sm px-8 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
          <button
            type="button"
            className="font-serif font-normal ml-[20px] text-white bg-black hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-[4px] text-sm px-8 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="bg-black w-full">
        <div className="font-serif pl-20 py-3.5">
          <Link to="https://www.google.com" className="text-white pr-[40px] active:text-link-pink">Movies</Link>
          <Link to="https://www.google.com" className="text-white pr-[40px] active:text-link-pink">Books</Link>
          <Link to={"https://www.google.com"} className="text-white active:text-link-pink">FAQ</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
