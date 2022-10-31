import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Container from '../Container';
import TitleWithBg from '../TitleWithBg';
import constants from './constants';
import ContentBox from './ContentBox';

const HowItWorks = () => {
  const parentRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to('.child', {
                y: 0,
                opacity: 1,
                duration: 1,
              });
              gsap.to(`.${entry.target.classList[0]} .leftText`, {
                x: 0,
                opacity: 1,
                duration: 1,
              });
              gsap.to(`.${entry.target.classList[0]} .cont-image`, {
                x: 0,
                opacity: 1,
                duration: 1,
              });
            } else return;
          });
        },
        {
          threshold: window.innerWidth > 768 ? 0.6 : 0.4,
        }
      );
      Array.from(parentRef.current.children).forEach((child) =>
        observer.observe(child)
      );
    }, parentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-screen h-max">
      <Container>
        <>
          <TitleWithBg>How it Works</TitleWithBg>
          <div
            ref={parentRef}
            className="my-16 flex w-full mx-auto items-center lg:items-center flex-col flex-wrap gap-16 lg:gap-[140px]"
          >
            {constants.map((constant, index) => {
              return (
                <ContentBox
                  parentRef={parentRef}
                  key={constant.tag}
                  constant={constant}
                  index={index}
                />
              );
            })}
          </div>
        </>
      </Container>
    </section>
  );
};

export default HowItWorks;
