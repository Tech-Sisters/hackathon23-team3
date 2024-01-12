/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "../../pages/moviepage/heroSection";
import FooterPage from "../../components/footer";
import MovieGrid from "../../pages/moviepage/moviegrid";

function Home() {

  

  return (

    <>
      <HeroSection />
      <MovieGrid />
      <FooterPage />

    </>
    
  );
}

export default Home;