import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://halal-f92e59ea9eb3.herokuapp.com/movies/${id}`);
        setMovie(response.data); 
      } catch (error) {
        console.error('Error fetching movie details:', error);

      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img src={movie.image_url} alt={movie.title}/>
          <p>{movie.description}</p>
        </div>
      
      )}
    </div>
  );
};

export default MovieDetails;
