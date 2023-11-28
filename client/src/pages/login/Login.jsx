/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
// import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <><div className="font-serif py-8 h-auto">
      {/* <Navbar /> */}

      <div className="w-[40%] drop-shadow-lg  rounded-md mx-auto bg-white p-10 flex flex-col gap-8">
        <h4 className="text-center text-3xl text-black-200 font-extrabold">
          Login to continue
        </h4>

        <form onSubmit={handleSubmit} className=" flex flex-col gap-5 mt-8">
          <label htmlFor="" className="font-normal text-md text-text">
            Enter email <span className="text-pink">*</span>
          </label>
          <input type="email"
            id="fn"
            name="fn_name"
            placeholder="Your full name"
            className="p-2 border bg-offwhite border-grey rounded" required />

          <label htmlFor="" className="font-normal text-md text-text">
            Enter password <span className="text-pink">*</span>
          </label>
          <input type="password"
            id="password"
            name="password"
            placeholder="Your password"
            className="p-2  bg-offwhite border border-grey rounded focus:outline-pink focus:border-pink" required />
          <p className=" font-medium text-sm text-pink">Forgot your password?</p>

          <button className="p-2 bg-pink text-white text-2xl rounded">Login</button>
        </form>

        <p className="font-normal text-text text-md text-center">New to Halal Reads ‘n’ Reels?</p>

        <Link to="/signup" className="button text-center text-xl text-pink border border-pink rounded p-2">Create your free account</Link>

        <p className="underline decoration-solid text-xs font-normal text-text text-center">View our privacy and policy</p>

      </div>



    </div><Footer /></> 

  );
};

export default Login;
