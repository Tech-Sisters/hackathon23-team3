/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";

const Login = () => {
  return (
    <div className="font-serif">
      <Navbar />

      <h4 className="uppercase text-primary text-3xl font-extrabold text-center my-10">
        logo
      </h4>

      <div className="shadow-xl rounded-md bg-white md:w-[650px] w-[400px] h-auto m-auto p-10 flex flex-col gap-8">
        <h4 className="text-center text-3xl font-medium">
          Login to continue
        </h4>

        <form className=" flex flex-col gap-5">
          <label htmlFor="" className="font-normal text-2xl text-black-200">
            Enter email <span className="text-primary">*</span>
          </label>
          <input type="email" className="p-2 border border-grey rounded-lg outline-none" required />

          <label htmlFor="" className="font-normal text-2xl text-black-200 mt-6">
            Enter password <span className="text-primary">*</span>
          </label>
          <input type="password" className="p-2 border border-grey rounded-lg outline-none" required />
          <p className="  font-medium text-xl text-pink">Forgot your password?</p>

          <button className="p-2 bg-primary text-white   text-2xl font-medium">Login</button>
        </form>

        <p className="  font-normal text-black-200 text-lg text-center">New to Halal Reads ‘n’ Reels?</p>

        <button className="text-2xl text-primary font-medium border border-primary p-2">Create your free account</button>
      
        <p className="underline text-xl font-normal text-black-200 text-center">View our privacy and policy</p>

      </div>

      <p className="text-xl font-normal text-black-200 text-center my-10">@HalalReadsnReels 2023</p>

      
    </div>
  );
};

export default Login;
