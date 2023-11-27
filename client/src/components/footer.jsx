/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black-200 font-sans h-[90vh] pt-24 pb-12">
      <div className="flex justify-evenly items-baseline ">
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
            <div className="flex items-center justify-between ml-20">
              <div>
                <p className="text-white">Subscribe to our newsletter</p>
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="bg-transparent w-50 text-sm p-auto"
                  placeholder="Add email to get started"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <BsFillSendFill className="w-6 text-pink" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ul className="font-sans text-sm">
            <li className="text-white pb-2 font-bold">COMPANY</li>
            <li className="text-white pb-2 hover:text-hover">About us</li>
            <li className="text-white pb-2 hover:text-hover">Careers</li>
            <li className="text-white pb-2 hover:text-hover">Terms</li>
            <li className="text-white pb-2 hover:text-hover">Privacy</li>
            <li className="text-white pb-2 hover:text-hover">Help</li>
            <Link to="" className="text-white hover:text-hover">FAQ</Link>
          </ul>
        </div>

        <div>
          <ul className="font-sans text-sm text-white">
            <li className="pb-2 hover:text-hover font-bold">WORK WITH US</li>
            <li className="pb-2 hover:text-hover">Advertise</li>
            <li className="pb-2 hover:text-hover">Ad Blog</li>
            <li className="hover:text-hover">Partnership</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-white text-sm font-normal text-center pt-12">
          @HalalReadsnReels 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
