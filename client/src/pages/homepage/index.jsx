// eslint-disable-next-line no-unused-vars
import React from 'react';
import Head from '../../components/head';
import Hero from '../../pages/homepage/hero';
import Section from '../../pages/homepage/section';
import FeaturePage from '../../pages/homepage/features';
import FooterPage from '../../components/footer';

function HomePage() {
      return(
           <>
              <Head />
              <Hero />
              <Section />
              <FeaturePage />
              <FooterPage /> 
           </>
      );
}

export default HomePage;
