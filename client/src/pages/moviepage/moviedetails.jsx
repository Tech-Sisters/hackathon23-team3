/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from '../../components/head';
import { useParams } from 'react-router-dom';
import StarRating from '../../components/starRating';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://halal-f92e59ea9eb3.herokuapp.com/movies/${id}`);
        setMovie(response.data.items[0]); 
      } catch (error) {
        console.error('Error fetching movie details:', error);

      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <Head />
      <div className="bg-offwhite h-[100vh] pt-8">
        {movie && (
          <>
           <div className="grid grid-row gap-2 bg-pink w-[50%]">
            <img src={movie.image_url} alt={movie.title} className="rounded shadow w-[80%] mb-4" />
            <p className="ite">{movie.genre}</p>
            <div className="py-4">
              <StarRating />
            </div>
           </div>
           
           
          </>
        
        )}
      </div>

    </div>
  );
};

export default MovieDetails;
