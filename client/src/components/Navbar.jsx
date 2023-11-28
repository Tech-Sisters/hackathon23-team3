/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="fixed w-full z-10 bg-black-200">
     
      <nav className="text-white font-sans w-[90%] mx-auto flex flex-row gap-5 py-4">
        <Link to="/" className="font-medium text-xl hover:text-hover">Movies</Link>
        <Link to="/" className="font-medium text-xl hover:text-hover">Books</Link>
        <Link to="/" className="font-medium text-xl hover:text-hover">FAQ</Link>

      </nav>
    </div>
  );
};

export default Navbar;
