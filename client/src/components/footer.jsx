/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
// import Top from '../components/top';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.onscroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <div className="bg-black-200 font-sans h-[90vh] pt-24">
      <div className="flex justify-evenly items-baseline">
        <div className="flex-column">
          <div>
            <img src={Logo} alt="" className="w-[80px] pb-8" />
          </div>

          <div className="">
            <p className="text-white font-medium w-96 text-sm leading-6 pb-8">
              Halal Reads ‘n’ Reels" is a dynamic and inclusive movie and book
              review web app tailored for those seeking entertainment aligned
              with Halal principles. Our platform provides a curated selection
              of reviews and recommendations, ensuring a wholesome and enjoyable
              experience for users interested in Halal-centric content.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <FaFacebook className="text-white text-2xl mr-2" /> 
              <FaInstagram className="text-white text-2xl mr-2" /> 
              <FaLinkedin className="text-white text-2xl mr-2" /> 

            </div>
           
          </div>
        </div>

        <div>
          <ul className="font-sans text-sm">
            <li className="text-white pb-2 font-bold">COMPANY</li>
            <li className="text-white pb-2 hover:text-hover cursor-pointer">About us</li>
            <li className="text-white pb-2 hover:text-hover cursor-pointer">Careers</li>
            <li className="text-white pb-2 hover:text-hover cursor-pointer">Terms</li>
            <li className="text-white pb-2 hover:text-hover cursor-pointer">Privacy</li>
            <li className="text-white pb-2 hover:text-hover cursor-pointer">Help</li>
            <Link to='/FAQ' className="text-white hover:text-hover cursor-pointer">FAQ</Link>
          </ul>
        </div>

        <div>
          <ul className="font-sans text-sm cursor-pointer text-white">
            <li className="pb-2 hover:text-hover font-bold">WORK WITH US</li>
            <li className="pb-2 hover:text-hover">Advertise</li>
            <li className="pb-2 hover:text-hover">Ad Blog</li>
            <li className="hover:text-hover">Partnership</li>
            <div>
              {showButton && (
                <button onClick={scrollToTop} className="hover:text-hover mt-8 text-pink">
                Subscribe to Newsletter                
                </button>
              )}
            </div>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-white text-sm font-normal text-center pt-12">
          @HalalReadsnReels 2023
        </p>
      </div>
      {/* <div>
         <Top />
      </div> */}
    </div>
  );
};

export default Footer;
