/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../../assets/reviewpage.png';
import { Link } from 'react-router-dom';
import '../../styles/section.css';

function Section() {
  return (
    <>
      <section className="bg-[#f5f5f5] h-[80vh]">
        <div className="flex items-center justify-between mx-auto w-[90%]">
          <div className="w-[50%] py-24">
            <p className="text-4xl text-black-200 font-extrabold pb-4">Thoughtful Reviews</p>
            <p className="text-text font-normal pb-4">Our team of dedicated reviewers provides comprehensive and thoughtful analyses, highlighting the Islamic values, cultural significance, and artistic merits of each movie and book. Gain deeper insights into stories that inspire, educate, and uplift while staying true to your beliefs.</p>
            <p className="text-text font-normal pb-6">Our aim is to offer you a nuanced understanding and appreciation 
              for these content, empowering you to make informed choices that resonate 
              with your beliefs.
            </p>
            <Link to="/about" className="button cursor-pointer bg-pink text-white py-2 px-6 rounded hover:bg-opacity-90 transition duration-300">
              Learn more
            </Link>
          </div>
          <div className="">
            <img src={img} alt="user review" className="review mt-5 mr-24" />
          </div>
          
        </div>
        
      
      </section>
    </>
  );
}

export default Section;








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