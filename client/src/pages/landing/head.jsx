// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../../assets/Logo.svg';
import '../../styles/head.css';

function Head() {
     

      return (
            <>
                  <header className="fixed w-full z-10 bg-black flex py-3">
                        <div className="w-[90%]  mx-auto flex items-center justify-between">
                              <Link to="/">
                                    <img src={BrandLogo} alt="Logo" className="brandLogo" />
                              </Link>

                              <nav className="flex shrink items-center text-white space-x-6">
                                    <Link to="/home" className="text-lg hover:text-hover">
                                          Home
                                    </Link>
                                    <Link to="/" className="text-lg hover:text-hover">
                                          About
                                    </Link>
                                    <Link
                                          to="/subscribe"
                                          className="text-lg hover:text-hover">
                                          Subscription Plan
                                    </Link>
                              </nav>

                              <Link to="/login" className="button bg-pink text-white py-1 px-4 rounded hover:bg-opacity-90 transition duration-300">
                                    Login
                              </Link>
                        </div>
                  </header>
                 
            </>
      );
}

export default Head;