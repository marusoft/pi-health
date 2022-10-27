import React from 'react';
import {
  CustomerReview,
  Hero,
  HowItWorks,
  OurProducts,
  Subscribe,
  Layout,
} from '../../Components';
import StatsBar from '../../Components/StatBar';

import windowResizerListener from '../../Utils/helper';

const Spacing = () => <div className="w-full lg:h-[120px] h-[100px]" />;

const Home = () => {
  const { windowWidth } = windowResizerListener();

  return (
    <section>
      {windowWidth < 200 ? (
        <div className="text-[40px] text-center font-[600] flex w-full h-screen items-center justify-center">
          Website Not Optimised for Mobile view at the moment
        </div>
      ) : (
        <>
          <Layout>
            <Hero />
            <StatsBar />
            <Spacing />
            <HowItWorks />
            <Spacing />
            <OurProducts />
            <Spacing />
            <CustomerReview />
            <Spacing />
            <Subscribe />
            <Spacing />
          </Layout>
        </>
      )}
    </section>
  );
};

export default Home;
