// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
// import { BsPersonFill } from "react-icons/bs";
import ModalComponent from "./auth";
import { Link } from "react-router-dom";
import BrandLogo from "../assets/Logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import "../styles/head.css";

const Head = () => {


  const [scrollY, setScrollY] = useState(0);
  const [headStyle, setHeadStyle] = useState("bg-transparent");
  const [searchStyle, setSearchStyle] = useState("bg-gradient-to-r from-pink");
  const [textStyle, setTextStyle] = useState("text-black-200");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 100) {
      setHeadStyle("bg-dark"); 
      setSearchStyle("bg-transparent"); 
      setTextStyle("text-white"); 
    } else {
      setHeadStyle("bg-transparent");
      setSearchStyle("bg-gradient-to-r from-pink"); 
      setTextStyle("text-white"); 

    }
  }, [scrollY]);

  
      return (
            <>
                  <header className={`fixed w-full ${headStyle} z-10 flex items-center py-3`}>
                        <div className="w-[90%]  mx-auto flex items-center justify-between">
                              <div className="flex items-center">
                                 <Link to="/">
                                      <img src={BrandLogo} alt="Logo" className="brandLogo" />
                                 </Link>
                              </div>
                              
                              <nav className={`${textStyle} space-x-6`}>

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
                                    
                                    <Link className={`${searchStyle} text-white py-1 px-2 rounded text-2xl mr-8 cursor-pointer`}>
                                     <IoSearchOutline />
                                    </Link>
                                    <ModalComponent />
                              </div>
                              
                        
                              
                              
                              

                        </div>
                  </header>
                 
            </>
      );
}

export default Head;