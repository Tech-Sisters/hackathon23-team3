/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../../assets/logo.png';
import { FaCheckCircle } from 'react-icons/fa';
import '../../styles/feature.css';

function Feature() {
  return (
    <>
      <section className="bg-offwhite h-[80vh]">
        <div className=" flex items-center justify-between mx-auto rounded-md py-10 w-[90%]">
     
          <div className="">
            <img src={img} alt="" className="couple" />

          </div>
          <div className="w-[50%] py-24">
            <p className="text-3xl text-dark font-extrabold pb-4">Why Choose Halal Reads and Reels?</p>
            
            <span className="flex items-center pb-3">
            <FaCheckCircle  className="text-pink text-2xl" /> 
            <p className="text-text font-normal ml-2">

            Expertly reviewed movies and books respecting Islamic guidelines.
            </p>
            </span>
            <span className="flex items-center pb-3">
            <FaCheckCircle className="text-pink text-2xl" /> 
            <p className="text-text font-normal ml-2">

            Comprehensive reviews for wholesome family entertainment.</p>
            </span>
            <span className="flex items-center pb-3">
              <FaCheckCircle className="text-pink text-2xl" /> 
               <p className="text-text font-normal ml-2">
               Effortless navigation to discover curated Halal-rated content.
               </p>
            </span>
            <span className="flex items-center pb-6">
                  <FaCheckCircle className="text-pink text-2xl" /> 
                  <p className="text-text font-normal ml-2">

                  Join platform, share recommendations, and engage in discussions.</p>
            </span>
            
          
            
            <button className="button bg-pink text-white py-1 px-4 rounded hover:bg-opacity-90 transition duration-300">
              Join us
            </button>
          </div>


          
        </div>
        
      
      </section>
    </>
  );
}

export default Feature;








// Explore a curated collection of Islamic-centric movies and books that align with your faith and principles. From inspiring cinematic experiences to thought-provoking literary masterpieces, our platform showcases a diverse array of halal entertainment options.

// **Thoughtful Reviews**


// **Foster Meaningful Discussions**

// Join a community passionate about Islamic entertainment! Engage in meaningful discussions, share your thoughts, and connect with fellow enthusiasts. Explore diverse perspectives and celebrate the richness of Islamic storytelling together.

// **Personalized Recommendations**

// Tailored suggestions that resonate with your preferences! Our personalized recommendation system considers your interests, genres you love, and your viewing and reading history to offer suggestions perfectly suited to your tastes.

// **Stay Informed**

// Stay updated on the latest halal entertainment offerings! Receive notifications about new releases, author interviews, film festivals, and events that celebrate Islamic culture and storytelling.

// **Embark on Your Halal Entertainment Journey**

// Whether you seek heartwarming stories that echo Islamic values or cinematic experiences that inspire, Halal Reads and Reels is your companion for discovering meaningful entertainment. Start your halal entertainment journey with us and explore a world of captivating narratives that resonate with your beliefs.

// ---

// Feel free to customize and refine the copy to better align with your app's specific features, mission, and audience. This draft aims to highlight the unique offerings of "Halal Reads and Reels" as a platform dedicated to providing Islamic movie and book reviews while fostering a vibrant community centered around halal entertainment.