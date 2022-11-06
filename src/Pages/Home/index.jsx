import React from 'react';
import {
  CustomerReview,
  Hero,
  HowItWorks,
  OurProducts,
  Subscribe,
  StatsBar,
} from './Components';
import { Layout } from '../../Components';

import windowResizerListener from '../../Utils/helper';

/**
 *@Spacing -  A Component used to add spacing between each section of the home page
 *
 **/

export const Spacing = () => <div className="w-full lg:h-[120px] h-[100px]" />;

const Home = () => {
  const { windowWidth } = windowResizerListener();

  return (
    <section>
      <Layout>
        <Hero />
        <StatsBar />
        <Spacing />
        <HowItWorks />
        {windowWidth > 768 ? (
          <Spacing />
        ) : (
          <div className="w-full lg:h-[120px] h-[10px]" />
        )}
        <OurProducts />
        <Spacing />
        <CustomerReview />
        <Spacing />
        <Subscribe />
        <Spacing />
      </Layout>
    </section>
  );
};

export default Home;
