/* eslint-disable no-unused-vars */
import React from 'react';
import HeroSection from '../../pages/moviepage/heroSection';
import Head from '../../components/head';
import FooterPage from '../../components/footer';
import MovieGrid from '../../pages/moviepage/moviegrid';

function Home() {
  return (

    <>
      <Head />
      <HeroSection />
      <MovieGrid />
      <FooterPage />

    </>
    
  );
}

export default Home;