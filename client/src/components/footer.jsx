import React from "react";
import Logo from "../assets/Logo.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import SendIcon from "../assets/send-icon.svg";

const Footer = () => {
  return (
    <div className="bg-black font-sans pt-12 pb-12">
      <div className="flex justify-evenly items-baseline ">
        <div className="flex-column">
          <div>
            <img src={Logo} alt="" className="w-14 pb-8" />
          </div>

          <div className="">
            <p className="text-white w-96 text-sm leading-10 pb-8">
              Halal Reads ‘n’ Reels" is a dynamic and inclusive movie and book
              review web app tailored for those seeking entertainment aligned
              with Halal principles. Our platform provides a curated selection
              of reviews and recommendations, ensuring a wholesome and enjoyable
              experience for users interested in Halal-centric content.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <img src={Facebook} alt="" className="w-8 mr-2" />
              <img src={Instagram} alt="" className="w-8 mr-2" />
              <img src={LinkedIn} alt="" className="w-8 mr-2" />
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
                  <img src={SendIcon} alt="" className="w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ul className="font-sans text-sm">
            <li className="text-white pb-2">COMPANY</li>
            <li className="text-pink pb-2">About us</li>
            <li className="text-white pb-2">Careers</li>
            <li className="text-white pb-2">Terms</li>
            <li className="text-white pb-2">Privacy</li>
            <li className="text-white pb-2">Help</li>
            <li className="text-white">FAQ</li>
          </ul>
        </div>

        <div>
          <ul className="font-sans text-sm text-white">
            <li className="pb-2">WORK WITH US</li>
            <li className="pb-2">Advertise</li>
            <li className="pb-2">Ad Blog</li>
            <li className="">Partnership</li>
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
