/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header";
import { Link, useParams } from "react-router-dom";
import StarRating from "../../components/starRating";
import "../../styles/moviedetails.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://halal-f92e59ea9eb3.herokuapp.com/movies/${id}`);
        setMovie(response.data.items[0]); 
      } catch (error) {
        console.error("Error fetching movie details:", error);

      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <Header />
      <div className="bg-offwhite h-[100vh] pt-8">
        {movie && (
          <>
            <div className="flex items-top w-[90%] mx-auto mt-[4rem]">
              <div className="w-[20%] mr-6">

              <div className="sticky top-20">
                <img src={movie.image_url} alt={movie.title} className="rounded shadow mb-4" />
                <p>{movie.genre}</p>
                <p>{movie.kid_friendly}</p>
                <div className="py-4">
                  <StarRating />
                </div>
                <Link to="/" className="text-pink font-medium">
                 Rate this movie
                </Link>

              </div>
                
              </div>
              
              <div className="w-[70%] overflow-y-auto scrollbar-hidden">
                  <p className="font-bold text-3xl text-black-200">{movie.title}</p>
                  <div className="py-4 text-[1.3rem]">
                    <StarRating />
                  </div>
                  <p className="text-text font-medium">{movie.description}</p>
        
                  <p className="text-2xl font-semibold text-black-200 py-6">User Reviews</p>
                  <img src={movie.image_url} alt={movie.title} className="rounded shadow mb-4" />
                  <Link to="/reviewedit" className="bg-pink py-3 px-6 rounded text-white">
                    Add review
                  </Link>
              </div>
            
            </div>
            
           
          </>
        
        )}
      </div>

    </div>
  );
};

export default MovieDetails;


