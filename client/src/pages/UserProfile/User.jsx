/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import image from "../../assets/ellipse16.png";
import { Link } from "react-router-dom";
import bilal from "../../assets/bilal.png";
import moana from "../../assets/moana.png";
import paws from "../../assets/paws.png";
import StarRating from "../../components/starRating";
import { MdEdit } from "react-icons/md";
import Dropdown from "../../components/dropdown";

const User = () => { 
  const [movieRatings, setMovieRatings] = useState({});

  const handleRatingChange = (movieId, newRating) => {
    setMovieRatings((prevRatings) => ({
      ...prevRatings,
      [movieId]: newRating,
    }));
  };

  // Sample movie data
  const movies = [
    { id: "movie1", title: "Movie 1" },
    { id: "movie2", title: "Movie 2" },
    // Add more movies as needed
  ];

  const handleDropdownSelect = (selectedOption) => {
    console.log(`Sort By: ${selectedOption}`);
    // Add any logic you want to perform with the selected option
  };

  return (
    <div className="bg-pink">
      <Navbar />

      <div className="flex flex-row gap-4 md:px-20 p-10 py-10">
        <div className="bg-white flex flex-col gap-4 w-[300px] h-auto p-5">
          <h4 className="text-gray text-3xl font-medium font-serif capitalize">
            profile
          </h4>

          <div className="flex flex-row gap-3 py-3">
            <img src={image} alt="" width={40} height={40} />
            <h5 className="font-medium text-2xl font-serif">Faiza Doe</h5>
          </div>
          <p className="text-xl font-normal text-gray font-serif pb-6">
            <Link to="mailto:faizadoe10@gmail.com">faizadoe10@gmail.com</Link>
          </p>

          <hr className="w-[95%] py-3 text-[#ADAFB0]" />

          <p className="text-pink text-xl font-serif font-normal text-center">
            Manage account
          </p>
        </div>

        <div className="bg-pink w-[85%] flex flex-col gap-5">
          <div className="bg-white w-full h-auto py-6 px-3">
            <div className="flex flex-row justify-between">
              <h4 className="font-serif font-medium text-3xl text-black-200">
                Bookmarked
              </h4>
              <Dropdown
                options={["Movie", "Book"]}
                defaultOption="Sort By"
                onSelect={handleDropdownSelect}
                // style={}
              />
            </div>

            <div className="py-8 grid grid-cols-3">
              <div className="flex flex-col gap-3">
                <img src={bilal} alt="Bilal" className="w-3/4" />
                <h4 className="font-medium font-serif text-2xl text-black-200">
                  Bilal: A New Breed...
                </h4>
                <p className="font-normal font-serif text-sm text-gray">
                  Bilal&apos;s timeless tale of courage against injustice.
                </p>
                <span className="text-pink font-medium font-serif text-sm capitalize">
                  age 13+
                </span>
                <StarRating
                   movieId={movies.id}
                   rating={movieRatings[movies.id] || 0}
                   onRatingChange={handleRatingChange}
                />
              </div>

              <div className="flex flex-col gap-3">
                <img src={moana} alt="Moana" className="w-3/4" />
                <h4 className="font-medium font-serif text-2xl text-black-200">
                  Moana
                </h4>
                <p className="font-normal font-serif text-sm text-gray">
                  Chosen by the sea, quest to reunite a relic with Te Fiti.
                </p>
                <span className="text-pink font-medium font-serif text-sm capitalize">
                  age 13+
                </span>
                <StarRating
                  movieId={movies.id}
                  rating={movieRatings[movies.id] || 0}
                  onRatingChange={handleRatingChange}
                />
              </div>

              <div className="flex flex-col gap-3">
                <img src={paws} alt="Bilal" className="w-3/4" />
                <h4 className="font-medium font-serif text-2xl text-black-200">
                  Paws Of Fury
                </h4>
                <p className="font-normal font-serif text-sm text-gray">
                  Hank, defends a cat town, chasing his samurai dream
                </p>
                <span className="text-pink font-medium font-serif text-sm capitalize">
                  age 13+
                </span>
                <StarRating
                  movieId={movies.id}
                  rating={movieRatings[movies.id] || 0}
                  onRatingChange={handleRatingChange}
                />
              </div>
            </div>
          </div>

          <div className="bg-white w-full h-auto py-6 px-3">
            <div className="flex flex-row justify-between">
              <h4 className="font-medium font-serif text-3xl text-black-200">
                My Reviews & Ratings
              </h4>
              <Dropdown
                options={["Movie", "Book"]}
                defaultOption="Sort By"
                onSelect={handleDropdownSelect}
                // style={}
              />
            </div>

            <div className="flex flex-row justify-between py-10">
              <div className="flex flex-row gap-5 w-1/2">
                <img src={bilal} alt="Bilal" className="w-[25%]" />
                <div className="flex flex-col gap-3">
                  <h3 className="font-medium font-serif text-2xl text-black-200">
                    Bilal: A New Breed Of Hero
                  </h3>
                  <StarRating
                    movieId={movies.id}
                    rating={movieRatings[movies.id] || 0}
                    onRatingChange={handleRatingChange}
                  />
                  <p className="font-normal font-serif text-lg text-gray">
                    I think this is a great movie for all, I will recommend for
                    Muslim parents
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <button className="bg-primary py-2 px-4 text-white flex gap-2">
                  <MdEdit color="#FFFFFF" className="mt-1" /> Edit review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer />
    </div>
  );
};

export default User;
