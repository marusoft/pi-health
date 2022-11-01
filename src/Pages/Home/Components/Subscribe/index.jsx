import React, { useEffect, useRef } from 'react';
import SubscribeImage from '../../../../Assets/images/subscribe-image.png';
import { Button, Container } from '../../../../Components';
import gsap, { Elastic } from 'gsap';

const Subscribe = () => {
  const parentRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            gsap.to('.image', {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: Elastic.easeOut.config(1, 0.3),
            });
            setTimeout(() => {
              gsap.to('.letter', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: Elastic.easeOut.config(1, 0.3),
              });
            }, 300);
          }
        },
        {
          threshold: 0.6,
        }
      );

      observer.observe(parentRef.current);
    }, parentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={parentRef}
      className="w-screen subscribeMobile bg-sky-200 lg:py-8 py-16 h-max"
    >
      <Container>
        <div className="flex justify-between flex-wrap gap-8 items-center">
          <form className="letter -translate-x-[100vw] opacity-0 flex-1 items-center lg:items-start min-[320px] flex gap-2 flex-col">
            <h2 className="text-[28px] text-white [@media(min-width:_769px)]:text-[#050505eb] font-[600]">
              Lets stay in touch
            </h2>
            <p className="text-[16px] font-Nunito -translate-y-2 mb-4 text-white [@media(min-width:_769px)]:text-[#050505eb] font-[600]">
              Get all our latest content and updates
            </p>
            <div className=" bg-white rounded-[3px] relative w-[99%] md:max-w-[520px] lg:min-w-[450px] p-2 h-[60px]">
              <input
                type="text"
                className="outline-none pl-4 w-[70%] md:w-[60%] h-full"
              />
              <div className="absolute right-1 top-[50%] -translate-y-[50%]">
                <Button size="w-[100px]" type="submit" variant="secondary">
                  Subscribe
                </Button>
              </div>
            </div>
          </form>

          <div className="image translate-x-[100vw] opacity-0 flex-1 lg:flex hidden min-w-[320px] translate-y-[35px]">
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
