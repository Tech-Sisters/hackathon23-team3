/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StarRating from "../../components/starRating";

const BookGrid = () => {
  const [books, setBooks] = useState([]);


  useEffect(() => {

      axios.get(`https://halal-f92e59ea9eb3.herokuapp.com/books`)
        .then(response => {
          setBooks(response.data.items || []);
        })
        .catch(error => {
          console.error("Error fetching books:", error);
        });
    }, []);

  return (
     <>   
        <div className="bg-offwhite h-[108vh]">
           <div className="pt-10 pb-4 text-3xl font-bold text-black-200 w-[90%] mx-auto">
                  <p>New Streaming Books</p>
            </div>
           
           <div className="book-grid w-[90%] mx-auto">
                  {books.map((book) => (
                      <div key={book._id}>
                            <Link to={`/books/${book._id}`}>

                              <img src={book.image_url} alt={book.title} className="rounded shadow mb-4" />
                              <h3 className="font-semibold mb-4 text-black-200">{book.title}</h3>
                              <p className="text-gray font-medium text-sm">{book.description}</p>
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

export default BookGrid;
