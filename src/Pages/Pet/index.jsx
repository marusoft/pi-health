import React, { useEffect } from 'react';
import { Layout } from '../../Components';
import PiHeroOne from '../../Assets/images/pet-hero-1-png.png';
import PiProductOne from '../../Assets/images/pet-products-1-png.png';
import PiProductTwo from '../../Assets/images/pet-products-2-png.png';
import PiProductThree from '../../Assets/images/pet-products-3-png.png';
import { useRef } from 'react';
import gsap, { Elastic } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import windowResizerListener from '../../Utils/helper';

gsap.registerPlugin(ScrollTrigger);

const Spacing = () => <div className="my-8 w-full h-1" />;

const Products = ({ title, image, listArray, identifier, prodRef }) => (
  <div
    ref={prodRef}
    className={`${'prod_cont' + identifier} w-full flex flex-col`}
  >
    <h2
      className={`${
        'title' + identifier
      } -translate-y-[50px] opacity-0 text-[28px] font-[700] break-words mx-auto text-center tracking-[0.4px] [background-image:_linear-gradient(90deg,_#1d78d9_30.12%,_rgba(210,_137,_50,_0.95)70%)] [-webkit-text-fill-color:_transparent] [-webkit-background-clip:_text] [background-clip:_text] [text-fill-color:_transparent]`}
    >
      {title}
    </h2>
    <div
      className={`${
        'image' + identifier
      } -translate-y-[50px] opacity-0 w-full pt-4 overflow-hidden px-2 max-h-screen`}
    >
      <img
        className="object-cover shadow-lg min-h-[40vh] min-w-full"
        src={image}
        alt="PiProduct"
      />
    </div>
    <div
      className={`${
        'list' + identifier
      } translate-y-[50px] opacity-0 mx-2 mt-8 rounded-b-[12px]`}
    >
      <ul className="w-full px-4 list-disc text-base font-[500] flex flex-col gap-4">
        {listArray.map((list, index) => {
          return (
            <li key={list + index} className="font-Nunito pl-2">
              {list}
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

const Pet = () => {
  const petRef = useRef();
  const prodRefOne = useRef();
  const prodRefTwo = useRef();
  const prodRefThree = useRef();

  const { windowWidth } = windowResizerListener();

  useEffect(() => {
    if (windowWidth < 769) {
      let ctx = gsap.context(() => {
        gsap.to('.hero_image', {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: Elastic.easeOut.config(1, 0.3),
        });

        gsap.to('.pet_definition', {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: Elastic.easeOut.config(1, 0.3),
        });

        gsap.to(`.${prodRefOne.current.children[0].classList[0]}`, {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: Elastic.easeOut.config(1, 0.3),

          scrollTrigger: {
            trigger: `.${prodRefOne.current.classList[0]}`, // make .panel2 the trigger
            start: '30% bottom', // 10% of .panel2 enters the bottom of the viewport
            // Whatever other ScrollTrigger vars you need here
          },
        });
        gsap.to(`.${prodRefOne.current.children[1].classList[0]}`, {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: Elastic.easeOut.config(1, 0.3),

          scrollTrigger: {
            trigger: `.${prodRefOne.current.classList[0]}`, // make .panel2 the trigger
            start: '50% bottom', // 10% of .panel2 enters the bottom of the viewport
            // Whatever other ScrollTrigger vars you need here
          },
        });
        gsap.to(`.${prodRefOne.current.children[2].classList[0]}`, {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: Elastic.easeOut.config(1, 0.3),

          scrollTrigger: {
            trigger: `.${prodRefOne.current.classList[0]}`, // make .panel2 the trigger
            start: '70% bottom', // 10% of .panel2 enters the bottom of the viewport
            // Whatever other ScrollTrigger vars you need here
          },
        });

        gsap.to(`.${prodRefTwo.current.children[0].classList[0]}`, {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: Elastic.easeOut.config(1, 0.3),

          scrollTrigger: {
            trigger: `.${prodRefTwo.current.classList[0]}`, // make .panel2 the trigger
            start: '30% bottom', // 10% of .panel2 enters the bottom of the viewport
            // Whatever other ScrollTrigger vars you need here
          },
        });
        gsap.to(`.${prodRefTwo.current.children[1].classList[0]}`, {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: Elastic.easeOut.config(1, 0.3),

          scrollTrigger: {
            trigger: `.${prodRefTwo.current.classList[0]}`,
            start: '50% bottom',
          },
        });
        gsap.to(`.${prodRefTwo.current.children[2].classList[0]}`, {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: Elastic.easeOut.config(1, 0.3),

          scrollTrigger: {
            trigger: `.${prodRefTwo.current.classList[0]}`,
            start: '70% bottom',
          },
        });

        gsap.to(`.${prodRefThree.current.children[0].classList[0]}`, {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: Elastic.easeOut.config(1, 0.3),

          scrollTrigger: {
            trigger: `.${prodRefThree.current.classList[0]}`,
            start: '30% bottom',
          },
        });
        gsap.to(`.${prodRefThree.current.children[1].classList[0]}`, {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: Elastic.easeOut.config(1, 0.3),

          scrollTrigger: {
            trigger: `.${prodRefThree.current.classList[0]}`,
            start: '50% bottom',
          },
        });
        gsap.to(`.${prodRefThree.current.children[2].classList[0]}`, {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: Elastic.easeOut.config(1, 0.3),

          scrollTrigger: {
            trigger: `.${prodRefThree.current.classList[0]}`,
            start: '70% bottom',
          },
        });
      }, petRef);

      return () => ctx.revert();
    }
  }, [petRef, windowWidth]);

  return (
    <Layout>
      {windowWidth > 768 ? (
        <div className="w-full h-screen flex items-center justify-center">
          <p className="text-base font-[600]">
            Page not optimised for web view
          </p>
        </div>
      ) : (
        <main ref={petRef}>
          <div className="w-full overflow-hidden max-h-screen">
            <img
              src={PiHeroOne}
              className="hero_image translate-y-[50px] opacity-0 object-cover min-h-[40vh] min-w-full"
              alt="Hero"
            />
          </div>
          <div className="px-2">
            <p className="pet_definition font-[500] mt-8 -translate-y-[80px] opacity-0 text-[rgb(0,0,0,0.6)] font-Nunito text-base">
              <b>Pi-Pet</b> remote monitoring and decision intelligence tool is
              a combination of wearable devices, mobile application and data
              analytics technology deployed to provide personalized,
              uninterrupted and value based care for dogs and horses.
            </p>
          </div>

          <Spacing />

          <section className="w-full px-2">
            <Products
              prodRef={prodRefOne}
              identifier="productOne"
              title="Wearables"
              image={PiProductOne}
              listArray={[
                'Monitoring of heart rate, respiration, faecal output',
                'Telemetry (leg movement, distance covered, jumping)',
                'Sleep and stress tracking',
                'Temp level monitoring',
                ' Bluetooth, Wifi and 4G comms enabled',
                'GPS Location enabled',
              ]}
            />

            <Spacing />

            <Products
              prodRef={prodRefTwo}
              identifier="productTwo"
              title="Breeder/Pet Parent Interface"
              image={PiProductTwo}
              listArray={[
                'Real time health vitals monitoring',
                'A.I enabled data analytics for decision intelligence',
                'Sleep and stress tracking',
                'Temperature',
                'Injury alert',
                'GPS tracking',
                'Vaccination history management',
                'Weight management analytics',
                'Training sessions mode(Horses)',
                'Group stratification analytics by pet/horse breed',
                'Feeding rate',
                'Pet health and wellness marketplace',
              ]}
            />

            <Spacing />

            <Products
              prodRef={prodRefThree}
              identifier="productThree"
              title="Vet Clinician Interface"
              image={PiProductThree}
              listArray={[
                'A.I enabled data analytics for decision intelligence',
                'Weight management analysis',
                'Injury alert',
                'Vaccination history management',
                'Group stratification analytics based on pet/horse breed and/or ailment type',
                'Breed analytics',
              ]}
            />
          </section>
        </main>
      )}
    </Layout>
  );
};

export default Pet;
