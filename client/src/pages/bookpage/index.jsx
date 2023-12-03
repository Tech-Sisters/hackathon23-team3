/* eslint-disable no-unused-vars */
import React from 'react';
import HeroSection from '../../pages/moviepage/heroSection';
import Head from '../../components/head';
import FooterPage from '../../components/footer';
import BookGrid from '../../pages/bookpage/bookgrid';

function Home() {
  return (

    <>
      <Head />
      <HeroSection />
      <BookGrid />
      <FooterPage />

    </>
    
  );
}

export default Home;