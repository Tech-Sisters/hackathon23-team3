/* eslint-disable no-unused-vars */
import React from 'react';
import HeroSection from '../../pages/homepage/heroSection';
import Header from '../../components/header';
import FooterPage from '../../components/footer';
import MovieGrid from '../../pages/homepage/moviegrid';

function Home() {
  return (

    <>
      <Header />
      <HeroSection />
      <MovieGrid />
      <FooterPage />

    </>
    
  );
}

export default Home;