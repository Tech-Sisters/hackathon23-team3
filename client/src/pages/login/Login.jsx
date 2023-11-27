/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
// import Navbar from "../../components/Navbar";

const Login = () => {
  return (
    <div className="font-serif">
      {/* <Navbar /> */}
      
      

      <div className="w-[50%] shadow-md border border-solid rounded-md mx-auto mb-8 bg-offwhite h-auto p-10 flex flex-col gap-8">
        <h4 className="text-center text-3xl font-extrabold mb-8">
          Login to continue
        </h4>

        <form className=" flex flex-col gap-5 mt-24">
          <label htmlFor="" className="font-normal text-xs text-text">
            Enter email <span className="text-pink">*</span>
          </label>
          <input type="email" className="p-2 border border-grey rounded" required />

          <label htmlFor="" className="font-normal text-xs text-text">
            Enter password <span className="text-pink">*</span>
          </label>
          <input type="password" className="p-2 border border-grey rounded focus:outline-pink focus:border-pink" required />
          <p className=" font-medium text-xs text-pink">Forgot your password?</p>

          <button className="p-2 bg-pink text-white text-2xl rounded mb-4">Login</button>
        </form>

        <p className="font-normal text-text text-lg text-center">New to Halal Reads ‘n’ Reels?</p>

        <button className="text-xl text-pink border border-pink rounded p-2 mb-4 mt-4">Create your free account</button>
      
        <p className="underline decoration-solid text-xs font-normal text-text text-center">View our privacy and policy</p>

      </div>

      <p className="text-sm font-normal text-black-200 text-center my-24">@HalalReadsnReels 2023</p>

      
    </div>
  );
};

export default Login;
