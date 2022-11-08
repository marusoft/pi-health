import React, { useEffect, useRef } from 'react';
import gsap, { Elastic } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import windowResizerListener from '../../Utils/helper';
import { Layout, DecoratedHeader, InfoGraphic } from '../../Components';
import PiHealthImageHero from '../../Assets/images/pi-health-hero.jpg';
import PiHealthImageOne from '../../Assets/images/pi-health-image-1.jpg';
import PiHealthImageTwo from '../../Assets/images/pi-health-image-2.jpg';
import PiHealthImageThree from '../../Assets/images/pi-health-image-3.png';
import PiHealthImageFour from '../../Assets/images/pi-health-image-4.jpg';

gsap.registerPlugin(ScrollTrigger);

const Spacing = () => <div className="my-8 w-full h-1" />;

const HEALTH_CONSTANTS = [
  {
    tagNumber: '01',
    title: 'Clinicians',
    imageSrc: PiHealthImageOne,
    text: [
      'The predictive artificial intelligence used by Pi-Health assists medical experts to deliver faster prioritization of care delivery to improve medical decision-making. This improves performance and increases patient satisfaction',
      'Pi-Health aids in alleviating medical experts’ burnout by assisting in patient monitoring thereby avoiding patient data overload on the doctors',
      'Pi-Health helps in reducing patient no-shows which chews up valuable time, creates false access issues and most importantly negatively impacts patient care',
      'The organized collation and analysis of health vitals data creates an educational opportunity where the data can be used to tutor less experienced medical practitioners',
      'With Pi-Health, medical experts can reach a wider range of patients who maybe be hindered by various reasons from visiting the medical establishment for consultation.',
    ],
  },
  {
    tagNumber: '02',
    title: 'Caregivers',
    imageSrc: PiHealthImageTwo,
    text: [
      'Data from monitored vital signs empowers caregivers to provide early intervention of patient deterioration or other adverse events that can have substantial financial effects.',
      'Caregivers report high rates of depressive symptoms and mental health problems. Pi-Health helps to reduce burnout by easing the monitoring of the patients through the automated provision of data from patients’ monitored vitals.',
      'Pi-Health suite helps the seamless transfer of a patient from one caregiver to another with the automated and accurate documentation of the patient’s health data. This helps in the removal of data inaccuracies that can have adverse effects on the management of the patient’s health.',
    ],
  },
  {
    tagNumber: '03',
    title: 'Hospital/Clinic',
    imageSrc: PiHealthImageThree,
    text: [
      'Deployment of Pi-Health by hospitals boosts net patient revenue by improving workflow efficiencies, staff productivity, and reduces administrative costs.',
      'Pi-Health technology helps hospitals improve clinical staff efficiency and combats the effects of clinical staff shortage.',
      'Using Pi-Health suite helps hospitals optimize patient data management.',
    ],
  },
  {
    tagNumber: '04',
    title: 'Home Health Organizations',
    imageSrc: PiHealthImageFour,
    text: [
      'Organizational Mobility: Pi-Health technology gives home healthcare organizations the ability to scale more rapidly by keeping infrastructure expenses down while simultaneously creating conditions that are optimal for increasing caregiver productivity.',
      'Pi-Health remote monitoring aids to reduce the amount of travel undertaken by remote health caregivers. This could mean anything from maintaining a fleet of service vehicles, to the actual time spent on the road allowing home healthcare organizations to focus on providing quality patient care.',
      'Pi-Health data communication system aids streamlined communication between caregivers and the patient’s medical network for more productive patient management.',
    ],
  },
];

const PiHealth = () => {
  const healthRef = useRef();
  const healthConstantRef = useRef();

  const { windowWidth } = windowResizerListener();

  useEffect(() => {
    if (windowWidth < 769) {
      let ctx = gsap.context(
        () => {
          gsap.to('.health_hero', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: Elastic.easeOut.config(1, 0.3),
          });

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.to(`.${entry.target.classList[0]} .tag`, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: Elastic.easeOut.config(1, 0.3),
                  });

                  gsap.to(`.${entry.target.classList[0]} .title_info`, {
                    x: 0,
                    opacity: 1,
                    duration: 2.5,
                    delay: 0.5,
                    ease: Elastic.easeOut.config(1, 0.3),
                  });
                  gsap.to(`.${entry.target.classList[0]} .health_image`, {
                    y: 0,
                    opacity: 1,
                    duration: 2.5,
                    ease: Elastic.easeOut.config(1, 0.3),
                  });
                  gsap.to(`.${entry.target.classList[0]} .list_info`, {
                    x: 0,
                    opacity: 1,
                    duration: 2.5,
                    ease: Elastic.easeOut.config(1, 0.3),
                  });
                } else return;
              });
            },
            {
              threshold: 0.3,
            }
          );

          Array.from(healthConstantRef.current.children).forEach((child) =>
            observer.observe(child)
          );
        },
        healthRef,
        healthConstantRef
      );
      return () => ctx.revert();
    }
  }, []);

  return (
    <Layout>
      {windowWidth > 768 ? (
        <div className="w-full h-screen flex items-center justify-center">
          <p className="text-base font-[600]">
            Page not optimised for web view
          </p>
        </div>
      ) : (
        <main ref={healthRef}>
          <section>
            <div className="health_hero -translate-y-20 opacity-0 w-full overflow-hidden max-h-screen">
              <img
                src={PiHealthImageHero}
                className="hero_image object-cover min-h-[40vh] min-w-full"
                alt="Hero"
              />
            </div>
          </section>

          <Spacing />

          <div className="px-2">
            <DecoratedHeader identifier="pi-health">PI-Elderly</DecoratedHeader>
          </div>

          <Spacing />

          <section className="px-2">
            <div
              ref={healthConstantRef}
              className="w-full px-2 flex flex-col gap-12"
            >
              {HEALTH_CONSTANTS.map((product, index) => {
                return (
                  <InfoGraphic
                    identifier={'healthRef' + index}
                    key={product.title + index}
                    index={index}
                    tagNumber={product.tagNumber}
                    imageSrc={product.imageSrc}
                    title={product.title}
                    text={product.text}
                  />
                );
              })}
            </div>
          </section>
        </main>
      )}
    </Layout>
  );
};

export default PiHealth;
