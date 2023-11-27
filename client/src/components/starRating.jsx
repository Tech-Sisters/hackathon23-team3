/* eslint-disable no-unused-vars */
// StarRating.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ movieId, rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleStarClick = (selectedRating) => {
    onRatingChange(selectedRating);
  };

  const handleStarHover = (hoveredRating) => {
    setHoveredRating(hoveredRating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${
            star <= (hoveredRating || rating) ? "active" : ""
          }`}
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => handleStarHover(star)}
          onMouseLeave={handleMouseLeave}
        >
          <FaStar />
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  movieId: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default StarRating;
