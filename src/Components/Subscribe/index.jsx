import React from 'react';
import Container from '../Container';
import SubscribeImage from '../../Assets/images/subscribe-image.png';
import Buttton from '../Buttton';

const Subscribe = () => {
  return (
    <section className="w-screen subscribeMobile bg-sky-200 lg:py-8 py-16 h-max">
      <Container>
        <div className="flex justify-between flex-wrap gap-8 items-center">
          <form className="flex-1 items-center lg:items-start min-[320px] flex gap-2 flex-col">
            <h2 className="text-[28px] text-white lg:text-[#050505eb] font-[600]">
              Lets stay in touch
            </h2>
            <p className="text-[16px] font-Nunito -translate-y-2 mb-4 text-white lg:text-[#050505eb] font-[600]">
              Get all our latest content and updates
            </p>
            <div className=" bg-white rounded-[3px] relative w-[80%] md:max-w-[380px] lg:min-w-[450px] p-2 h-[60px]">
              <input type="text" className="outline-none pl-4 w-[60%] h-full" />
              <div className="absolute right-1 top-[50%] -translate-y-[50%]">
                <Buttton type="submit" variant="secondary">
                  Subscribe
                </Buttton>
              </div>
            </div>
          </form>

          <div className="flex-1 lg:flex hidden min-w-[320px] translate-y-[35px]">
            <img
              src={SubscribeImage}
              className="object-contain"
              alt="Subscribe"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
