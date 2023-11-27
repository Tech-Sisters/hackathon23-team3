// eslint-disable-next-line no-unused-vars
import React from 'react';
import Head from '../../pages/landing/head';
import Hero from '../../pages/landing/hero';
import Section from '../../pages/landing/section';
import FeaturePage from '../../pages/landing/features';
// import SuggestPage from '../../pages/landing/suggest';

function LandingPage() {
      return(
           <>
              <Head />
              <Hero />
              <Section />
              <FeaturePage />
              {/* <SuggestPage /> */}
           </>
      );
}

export default LandingPage;
