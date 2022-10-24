import React from 'react';
import {
  CustomerReview,
  Hero,
  HowItWorks,
  OurProducts,
  Subscribe,
  Layout,
} from '../../Components';

import windowResizerListener from '../../Utils/helper';

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
            <div className="w-full lg:h-[100px] h-[100px]" />
            {windowWidth > 1289 && (
              <div className="w-full lg:h-[100px] h-[150px]" />
            )}
            <HowItWorks />
            <div className="w-full lg:h-[120px] h-[100px]" />
            <OurProducts />
            <div className="w-full lg:h-[120px] h-[100px]" />
            <CustomerReview />
            <div className="w-full lg:h-[120px] h-[100px]" />
            <Subscribe />
            <div className="w-full lg:h-[120px] h-[100px]" />
          </Layout>
        </>
      )}
    </section>
  );
};

export default Home;
