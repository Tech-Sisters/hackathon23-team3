/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StarRating from "../../components/starRating";
import "../../styles/movie.css";

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {

      axios.get(`https://halal-f92e59ea9eb3.herokuapp.com/movies`)
        .then(response => {
          setMovies(response.data.items || []);
        })
        .catch(error => {
          console.error("Error fetching movie:", error);
        });
    }, []);

  return (
     <>   
        <div className="bg-offwhite h-[108vh]">
           <div className="pt-10 pb-4 text-3xl font-bold text-black-200 w-[90%] mx-auto">
                  <p>New Streaming Movies</p>
            </div>
           
           <div className="movie-grid w-[90%] mx-auto">
                  {movies.map((movie) => (
                      <div key={movie._id}>
                            <Link to={`/movies/${movie._id}`}>

                              <img src={movie.image_url} alt={movie.title} className="rounded shadow mb-4" />
                              <h3 className="font-semibold mb-4 text-black-200">{movie.title}</h3>
                              <p className="text-gray font-medium text-sm">{movie.description}</p>
                              <p className="text-gray font-medium text-sm">{movie.kid_friendly}</p>
                              <div className="py-4">
                              <StarRating />
                              </div>
                            </Link>
                      </div>
                  ))}
           </div>
        </div>

      </>
  );
};

export default MovieGrid;
