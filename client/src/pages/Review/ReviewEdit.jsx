import Header from "../../components/header";
import React from "react";

const ReviewEdit = () => {
  return (
    <div>
      <Header />
      <div className="font-serif pl-20 py-[40px] w-5/12">
        <h3 className="text-[20px] font-bold">Write Your Review</h3>
        <p className="text-sm mt-[20px]">
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
            className="w-full mt-[20px] border rounded-[4px] text-sm py-2.5 px-2.5"
          />
        </div>
        <button className="block bg-pink text-white font-semibold mt-[20px] py-2.5 px-5 border hover:bg-black">
          Post your review
        </button>
        <button className="mt-[20px] border text-pink font-semibold py-2.5 px-5 hover:bg-pink hover:text-white">Cancel</button>
      </div>
    </div>
  );
};

export default ReviewEdit;
