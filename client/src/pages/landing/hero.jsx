// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import 'animate.css';
import '../../styles/hero.css';

function Hero() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <section className="gradient bg-dark h-[100vh] pt-24">
        <div className="flex items-center justify-between w-[90%] mx-auto py-24">

          <div className="w-[50%]">
            <h1 className="text-4xl text-white font-extrabold pb-4">Discover the exciting world <span className="break">of halaltainment</span></h1>
            <p className="heading heroCopy text-white justify-start font-medium tracking-small pb-5">
              Your platform for insightful movie and books reviews <span className="break"> guiding you through resonating
              entertainment that</span> align with your faith and principles.
            </p>
            <Link to="/" className="text-pink">
              <span className="row">Explore with Us<BsArrowRight className="ml-2 text-1xl" /></span>
            </Link>
          </div>
          

          <div className="bg-offwhite contain">
            <div className="flex items-center justify-center">
              <h2 className="text-2xl text-black-200 font-bold text-center">Sign up for our newsletter</h2>
              <p className="animate__animated animate__tada animate__delay-1s animate__infinite text-2xl">👋</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="">
                
                
                  <input
                  type="text"
                  id="fn"
                  name="fn_name"
                  placeholder="Your full name"
                  className="inputfield mt-8 w-full"
                  required
                />
              </div>
              <div className="">
                
                
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="inputfield mt-4 w-full"
                  required
                />
              </div>
              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-pink cursor-pointer w-full text-white btn"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          </div>
      </section>
    </>
  );
}

export default Hero;
