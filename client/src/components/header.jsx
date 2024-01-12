/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ModalComponent from "./auth";
import { Link } from "react-router-dom";
import BrandLogo from "../assets/Logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import "../styles/head.css";

const Header = () => {

      return (
            <>
                  <header className="fixed w-full bg-black-200 z-10 flex items-center text-white py-2">
                        <div className="w-[90%]  mx-auto flex items-center justify-between">
                              <div className="flex items-center">
                                 <Link to="/">
                                      <img src={BrandLogo} alt="Logo" className="brandLogo" />
                                 </Link>
                              </div>
                              
                              <nav className="space-x-6">

                                    <Link to="/movies" className="text-lg hover:text-hover">
                                          Movies
                                    </Link>
                                    <Link to="/books" className="text-lg hover:text-hover">
                                          Books
                                    </Link>
                                    <Link
                                          to="/faq"
                                          className="text-lg hover:text-hover">
                                          FAQ
                                    </Link>
                                    <Link
                                          to="/subscribe"
                                          className="text-lg hover:text-hover">
                                          Subscription Plan
                                    </Link>
                                   
                              </nav>
                              
                              <div className="ml-[30%] flex items-center">
                                    
                                    <Link className=" text-white py-1 px-2 rounded text-2xl mr-8 cursor-pointer">
                                     <IoSearchOutline />
                                    </Link>
                                    <div>
                                    <ModalComponent cta="Login" />

                                    </div>    
                              </div>
                              
                        
                              
                              
                              

                        </div>
                  </header>
                 
            </>
      );
}

export default Header;