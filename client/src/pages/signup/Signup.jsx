/* eslint-disable no-unused-vars */
import React from "react";
// import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";


const Signup = () => {
  return (
    <><div>
      <div className="font-serif">
        {/* <Navbar /> */}

        <h4 className="uppercase text-primary text-3xl font-extrabold text-center my-10">
          logo
        </h4>

        <div className="shadow-xl rounded-md bg-white md:w-[650px] w-[400px] h-auto m-auto p-10 flex flex-col gap-8">
          <h4 className="text-center text-3xl font-medium">Create account</h4>

          <form className=" flex flex-col gap-5">
            <label htmlFor="" className="font-normal text-2xl text-black-200">
              Your name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              className="p-2 border border-grey rounded-lg outline-none"
              required />

            <label htmlFor="" className="font-normal text-2xl text-black-200">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              className="p-2 border border-grey rounded-lg outline-none"
              required />

            <label htmlFor="" className="font-normal text-2xl text-black-200">
              Age <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              className="p-2 border border-grey rounded-lg outline-none"
              required />

            <label htmlFor="" className="font-normal text-2xl text-black-200">
              Gender <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              className="p-2 border border-grey rounded-lg outline-none"
              required />

            <label
              htmlFor=""
              className="font-normal text-2xl text-black-200 mt-6"
            >
              Password <span className="text-primary">*</span>
            </label>
            <input
              type="password"
              className="p-2 border border-grey rounded-lg outline-none"
              required />

            <label
              htmlFor=""
              className="font-normal text-2xl text-black-200 mt-6"
            >
              Confirm password <span className="text-primary">*</span>
            </label>
            <input
              type="password"
              className="p-2 border border-grey rounded-lg outline-none"
              required />

            <button className="p-2 bg-primary text-white mt-6 text-2xl font-medium">
              Create account
            </button>
          </form>

          <p className="  font-normal text-black-200 text-lg text-center">
            Already have an account? <span className="text-primary">Login</span>
          </p>
        </div>

        <p className="text-xl font-normal text-black-200 text-center my-10">
          @HalalReadsnReels 2023
        </p>
      </div>
    </div><Footer /></>
  );
};

export default Signup;
