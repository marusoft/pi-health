import React from 'react';
import CustomerReview from '../../Components/CustomerReview';
import Hero from '../../Components/Hero';
import HowItWorks from '../../Components/HowItWorks';
import OurProducts from '../../Components/OurProdiucts';
import Subscribe from '../../Components/Subscribe';
import Layout from '../../Layout';
import windowResizerListener from '../../Utils/helper';

const Home = () => {
  const { windowWidth } = windowResizerListener();

  return (
    <section>
      {windowWidth < 1200 ? (
        <div className="text-[40px] text-center font-[600] flex w-full h-screen items-center justify-center">
          Website Not Optimised for Mobile view at the moment
        </div>
      ) : (
        <>
          <Layout>
            <Hero />
            {windowWidth > 1289 && <div className="w-full h-[200px]" />}
            <HowItWorks />
            <OurProducts />
            <CustomerReview />
            <Subscribe />
          </Layout>
        </>
      )}
    </section>
  );
};

export default Home;
