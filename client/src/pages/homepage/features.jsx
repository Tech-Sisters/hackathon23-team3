/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "../../styles/feature.css";

function Feature() {
  return (
    <>
      <section className="bg-[#f5f5f5] h-[80vh]">
        <div className=" flex items-center justify-between mx-auto rounded-md py-10 w-[90%]">
     
          <div className="">
            <img src={img} alt="" className="couple" />

          </div>
          <div className="w-[50%] py-24">
            <p className="text-3xl text-black-200 font-extrabold pb-4">Why Choose Halal Reads and Reels?</p>
            
            <span className="flex items-center pb-3">
            <FaCheckCircle  className="text-pink text-2xl" /> 
            <p className="text-text font-normal ml-2">

            Expertly reviewed movies and books respecting Islamic guidelines.
            </p>
            </span>
            <span className="flex items-center pb-3">
            <FaCheckCircle className="text-pink text-2xl" /> 
            <p className="text-text font-normal ml-2">

            Comprehensive reviews for wholesome family entertainment.</p>
            </span>
            <span className="flex items-center pb-3">
              <FaCheckCircle className="text-pink text-2xl" /> 
               <p className="text-text font-normal ml-2">
               Effortless navigation to discover curated Halal-rated content.
               </p>
            </span>
            <span className="flex items-center pb-6">
                  <FaCheckCircle className="text-pink text-2xl" /> 
                  <p className="text-text font-normal ml-2">

                  Join platform, share recommendations, and engage in discussions.</p>
            </span>
            
          
            
    
          </div>


          
        </div>
        
      
      </section>
    </>
  );
}

export default Feature;
