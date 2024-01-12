/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ReviewEdit = () => {
  const [reviewText, setReviewText] = useState("");
  const [movie, setMovie] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://halal-f92e59ea9eb3.herokuapp.com/movies/${id}`);
        setMovie(response.data); 
      } catch (error) {
        console.error("Error fetching movie details:", error);

      }
    };

    fetchMovie();
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform the API request to post the comment as a review
      const response = await axios.post(`https://halal-f92e59ea9eb3.herokuapp.com/comments`, {
        review: reviewText,
        // Assuming you have user_id and movie_id available
        user_id: "user_id_here",
        movie_id: "movie_id_here"
      });

      console.log("Review posted:", response.data);
      // Handle success or navigate to another page after successful review submission

    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-[90%] mx-auto">

       {movie && ( <p>{movie.title}</p>)}
        <form onSubmit={handleSubmit}>
          <div className="w-[50%] py-[90px]">
            <p className="font-black-200 text-3xl font-bold">Write Your Review</p>
            <p className="text-[0.9em] text-text font-serif font-medium mt-[20px]">
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
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full mt-[20px] border border-black-200 rounded-[4px] text-sm py-2.5 px-2.5"
              />
            </div>
            <button type="submit" className="button block bg-pink cursor-pointer font-medium text-white rounded mt-[20px] py-2.5 px-5 border hover:bg-hover">
              Post your review
            </button>
            <button className="mt-[20px] border text-pink font-medium rounded py-2.5 px-5 hover:bg-pink hover:text-white">Cancel</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewEdit;
