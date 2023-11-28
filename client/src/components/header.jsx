/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://halal-f92e59ea9eb3.herokuapp.com/movies/search`,
        { q: searchQuery }
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="fixed z-50 w-full h-auto bg-white">
        <div className="flex items-center justify-between w-[90%] mx-auto py-3">
          <div className="">
            <Link to="/">
              <img
                src={logo}
                alt="Halal ReadsnReels Official brand logo"
                className="brandLogo"
              />
            </Link>
          </div>

          <div className="flex right-[19%] relative border border-gray-800 rounded-full w-[40%]">
            <form action="" className="">
              <div className="flex items-center pl-4">
                <AiOutlineSearch className="text-2xl font-medium text-[#34495E]" />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for Movie, Books and more..."
                  className="text-black-200 p-2 w-[350px] outline-none"
                />
              </div>
              
            </form>

            <ul className="absolute bg-white mt-11 max-h-50 overflow-y-auto list-item">
              {searchResults.map((product) => (
                <li key={product.id} className="p-2 list">
                  <Link to="/products" className="">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

            <div>
            <Link to="/login" className="button bg-pink text-white py-1 px-4 rounded hover:bg-opacity-90 transition duration-300">
                  Login
            </Link>          
            </div>
        </div>
        <div className="bg-black-200">
            
            <nav className="text-white font-sans w-[90%] mx-auto flex flex-row gap-5 py-4">
                  <Link to="/" className="font-medium text-xl hover:text-hover">Movies</Link>
                  <Link to="/" className="font-medium text-xl hover:text-hover">Books</Link>
                  <Link to="/" className="font-medium text-xl hover:text-hover">FAQ</Link>

            </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
