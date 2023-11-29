/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Header from "../../components/header";
import Footer from "../../components/footer";
import React from "react";

const ReviewEdit = () => {
  return (
    <div>
      <Header />
      <div className="pl-20 py-[40px] w-[50%]">
        <p className="font-black-200 text-3xl font-bold">Write Your Review</p>
        <p className="text-[0.9em] text-gray font-serif font-medium mt-[20px]">
          At Halal Reads 'n' Reels, our aim is to create a welcoming and
          inclusive community for individuals seeking inspiring, entertaining,
          and high-quality media recommendations. We understand the importance
          of finding content that aligns with diverse tastes and preferences
          while upholding values that resonate with our community members.
        </p>
        <div>
          <textarea
            rows="10"
            placeholder="Enter your review"
            className="w-full mt-[20px] border  border-black-200 rounded-[4px] text-sm py-2.5 px-2.5"
          />
        </div>
        <button className="button block bg-pink cursor-pointer font-medium text-white rounded mt-[20px] py-2.5 px-5 border hover:bg-hover">
          Post your review
        </button>
        <button className="mt-[20px] border text-pink font-medium rounded py-2.5 px-5 hover:bg-pink hover:text-white">Cancel</button>
      </div>
    <Footer/>
    </div>
  );
};

export default ReviewEdit;
