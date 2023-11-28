/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <Header />
      <div className="font-serif  bg-offwhite py-8">


      <div className="w-[40%] drop-shadow-lg  rounded-md mx-auto bg-white p-10 flex flex-col gap-8">
        <h4 className="text-center text-3xl text-black-200 font-extrabold">
          Create account
        </h4>

        <form onSubmit={handleSubmit} className=" flex flex-col gap-5 mt-8">
          <label htmlFor="" className="font-normal text-md text-text">
            Your name <span className="text-pink">*</span>
          </label>
          <input type="text"
            id="fn"
            name="fn_name"
            placeholder="First and last name"
            className="p-2 border bg-offwhite border-grey rounded" required 
          />

          <label htmlFor="" className="font-normal text-md text-text">
            Email <span className="text-pink">*</span>
          </label>
          <input type="email"
            id="email"
            name="email"
            placeholder="Your emaild"
            className="p-2  bg-offwhite border border-grey rounded focus:outline-pink focus:border-pink" required 
          />
          <label htmlFor="" className="font-normal text-md text-text">
            Age <span className="text-pink">*</span>
          </label>
          <input type="number"
            id="age"
            name="age"
            placeholder="22"
            className="p-2  bg-offwhite border border-grey rounded focus:outline-pink focus:border-pink" required 
          />
          <label htmlFor="" className="font-normal text-md text-text">
            Gender <span className="text-pink">*</span>
          </label>
          <input type="text"
            id="gender"
            name="gender"
            placeholder="Enter gender"
            className="p-2  bg-offwhite border border-grey rounded focus:outline-pink focus:border-pink" required 
          />
          <label htmlFor="" className="font-normal text-md text-text">
            Password <span className="text-pink">*</span>
          </label>
          <input type="password"
            id="password"
            name="password"
            placeholder=""
            className="p-2  bg-offwhite border border-grey rounded focus:outline-pink focus:border-pink" required 
          />
          <label htmlFor="" className="font-normal text-md text-text">
            Confirm password <span className="text-pink">*</span>
          </label>
          <input type="password"
            id="password"
            name="password"
            placeholder=""
            className="p-2  bg-offwhite border border-grey rounded focus:outline-pink focus:border-pink" required 
          />

          <button className="p-2 bg-pink text-white text-xl rounded">Create your free account</button>
          <p className="text-sm font-normal text-black-200">Already have an account?<span className="text-pink cursor-pointer underline decoration-solid pl-1"><Link to="/login">Login</Link></span></p>

        </form>




      </div>



    </div><Footer /></> 

  );
};

export default Login;
