/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import '../../styles/suggest.css';

function SuggestedForYou() {
  const [movieSuggestions, setMovieSuggestions] = useState([]);

  useEffect(() => {

    axios.get("https://halal-f92e59ea9eb3.herokuapp.com/movies")
      .then(response => {
        setMovieSuggestions(response.data.items || []);
      })
      .catch(error => {
        console.error("Error fetching movie suggestions:", error);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 0,
    nextArrow: <FaArrowAltCircleRight className="text-4xl text-white" />,
    prevArrow: <FaArrowAltCircleLeft className="text-4xl text-white" />,
  };

  return (
    <div className="bg-offwhite">
        <div className="w-[90%] mx-auto">
          <p className="font-extrabold text-dark text-3xl pb-4">Our Suggestion Movies</p>
        
          <Slider {...settings}>
            {movieSuggestions.map(movie => (
              <div key={movie._id} className="">
                <div className="flex items-center justify-between">
                  <img src={movie.image_url} alt={movie.title} className="content" />
                  
                </div>
                <div>
                <p className="text-dark font-extrabold">{movie.title}</p>
                  <p className="text-text">{movie.genre}</p>
                  <p className="text-text">{movie.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
    </div>
  );
}

export default SuggestedForYou;


