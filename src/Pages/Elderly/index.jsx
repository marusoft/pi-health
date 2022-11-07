import React, { useEffect, useRef } from 'react';
import { Layout } from '../../Components';
import PiElderlyHero from '../../Assets/images/pi-elderly-hero.png';
import PiElderlyProductOne from '../../Assets/images/pi-elderly-product-1.png';
import PiElderlyProductTwo from '../../Assets/images/pi-elderly-product-2.png';
import PiElderlyProductThree from '../../Assets/images/pi-elderly-product-3.png';
import PiElderlyProductFour from '../../Assets/images/pi-elderly-product-4.png';
import gsap, { Elastic } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import windowResizerListener from '../../Utils/helper';

gsap.registerPlugin(ScrollTrigger);

const Spacing = () => <div className="my-8 w-full h-1" />;

const PIELDERLY_PRODUCTS_CONSTS = [
  {
    number: '01',
    tagColor: '#52A511',
    title: 'EGG-Patch',
    image: PiElderlyProductOne,
    list: [
      ' ECG + PPG Heart Rate Monitoring',
      'Real time electrocardiogramcheck',
      'Abnormal Heart Rate Alert',
      'Skin Temperature',
      'Steps/Distance/Calories/Activity Time/Daily goal',
      'Body Position',
      'Sleep Tracker',
      'Phone GPS Supported',
      'DTA Supported',
      'Medical Level Silicon',
    ],
  },
  {
    number: '02',
    title: 'ECG + PPG Heart Rate Monitor',
    tagColor: '#A57311',
    image: PiElderlyProductTwo,
    list: [
      'Real Time Electrocardiogram check',
      '24 Real Time Heart Rate Monitoring',
      'Warm up/ Fat burn / Aerobic / Anaerobic / High',
      'Abnormal Heart Rate Alert',
      'Steps / Distance / Calories / Activity Time / Daily Goal',
      'HRV Report Supported',
      'Fatigue and pressure index analysis',
      'Vascular Occulusion Potential Evaluate',
      'SOS',
      'Auto Sleep Tracking',
      'Call & SMS Alert',
      'Phone Notification',
      'Vibration Clock and Sedentary Reminder',
      'Phone GPS Supported',
      'OTA Supported',
      '30 Days History Data',
      'Find your phone',
      'Atrial fibrillation alert',
    ],
  },
  {
    number: '03',
    tagColor: '#A211A5',
    title: 'Smart Sleep Monitor',
    image: PiElderlyProductThree,
    list: [
      'Under- Bedsheet Design',
      'Full Night Heart Rate-Variability',
      'Movement Activity, Tossing & Turning',
      'Full Night Breathing Rate',
      'Skin Temperature',
      'Super Sensitive Sensor',
      'Sleep Period Statistics',
      'Sleep Report & Analysis',
      'Sleep Plan',
      'Smart Sleep Alarm',
      'Rechargeable Lithium Battery',
      'High Precison',
      'Sleep Aid Music',
    ],
  },
  {
    number: '04',
    tagColor: '#11A5A5',
    title: 'Smart Sleep Monitor',
    image: PiElderlyProductFour,
    list: [
      '4G Supported with Network and Phone call',
      'GPS Chip Embedded',
      'Navigation Supported',
      'Anti-Lost with Electronic Fence',
      'Real Time Electrocardiogram',
      'Medical level Blood Oxygen',
      '24H Real Time Heart Rate',
      'Five Heart Rate Training Zone',
      'All Day HRV & Stress',
      'Blood Pressure Health Trend Checking',
      'All Activity Track: Steps/Calories/Distance/Activity Time/Daily Goal',
      'Sleep Quality Analysis',
    ],
  },
];

const PIELDERLY_PRODUCTS_TWO_CONSTS = [
  {
    number: '01',
    headerColor: '#4897E0',
    tagColor: '#52A511',
    title: 'PI Health User Mobile Interface',
    list: [
      'Personalized health vitals display monitoring & management',
      'Medical Management',
      'In-app appointment scheduling',
      'Weight tracking and management',
      'Patient fall detection sensor',
      'A.I enabled decision intelligence',
      'Group or individual sleep tracking',
      'Telementary Analysis',
      'Multi Sensor Integration',
      'Bluetooth, Zigbee, Wifi and 4G comms enabled',
      'GPS location enabled',
    ],
  },
  {
    number: '02',
    headerColor: '#4897E0',
    tagColor: '#A57311',
    title: 'PI Health Carers Interface',
    list: [
      'Patient risk alert',
      'EMR and EHR integration',
      'Sleep tracking',
      'Patient fall detection sensor',
      'GPS location enabled',
      'Medication mgt',
      'Patient group sleep tracking and oxygen levels',
    ],
  },
  {
    number: '03',
    headerColor: '#4897E0',
    tagColor: '#A211A5',
    title: 'PI Health Friends & Family Interface',
    list: [
      'Summarized Patients Health Alert',
      'Health and Wellness Market',
      'See patient activities remotely',
      'GPS location enabled',
      'Call to action by phone or text',
    ],
  },
  {
    number: '04',
    headerColor: '#4897E0',
    tagColor: '#11A5A5',
    title: 'PI Health User Mobile Interface',
    list: [
      'Severity stratified information for patient group ',
      'A.I enabled decison intelligence',
      'EMR and EHR integration',
      'Ailment specific risk stratification',
      'View patient stats by severity and ailment',
      'Patient risk alert',
      'Manage patient volumes by severity',
      'Call to action by phone or text',
    ],
  },
];

const ProductsCard = ({ product, index }) => {
  return (
    <div className={`${'prodRef' + '_' + index} px-2`}>
      <div className=" flex gap-2 items-center text-base font-[600]">
        <div
          style={{ backgroundColor: product.tagColor }}
          className={`tag -translate-y-10 opacity-0 text-white flex items-center justify-center rounded-[10px] font-[600] text-base h-[31px] w-[36px]`}
        >
          {product.number}
        </div>
        <h2
          className="header text-[18px] font-[700] -translate-y-10 opacity-0"
          style={{ color: product?.headerColor }}
        >
          {product.title}
        </h2>
      </div>
      {product.image && (
        <div className="prod_image w-[154px] translate-x-10 opacity-0 overflow-hidden flex items-center h-[168px]">
          <img src={product.image} className="max-w-full" alt={product.title} />
        </div>
      )}
      <ul className="prod_list w-full translate-y-10 opacity-0 px-4 list-disc text-base font-[500] mt-4 flex flex-col gap-4">
        {product.list.map((item, index) => {
          return (
            <li key={item + index} className="pl-3">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Elderly = () => {
  const elderlyRef = useRef();

  const { windowWidth } = windowResizerListener();

  const prodOneRef = useRef();
  const prodTwoRef = useRef();

  useEffect(() => {
    if (windowWidth < 769) {
      let ctx = gsap.context(
        () => {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.to(`.${entry.target.classList[0]} .tag`, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: Elastic.easeOut.config(1, 0.3),
                  });

                  gsap.to(`.${entry.target.classList[0]} .header`, {
                    y: 0,
                    opacity: 1,
                    duration: 2.5,
                    delay: 0.5,
                    ease: Elastic.easeOut.config(1, 0.3),
                  });
                  gsap.to(`.${entry.target.classList[0]} .prod_image`, {
                    x: 0,
                    opacity: 1,
                    duration: 2.5,
                    ease: Elastic.easeOut.config(1, 0.3),
                  });
                  gsap.to(`.${entry.target.classList[0]} .prod_list`, {
                    y: 0,
                    opacity: 1,
                    duration: 2.5,
                    ease: Elastic.easeOut.config(1, 0.3),
                  });
                } else return;
              });
            },
            {
              threshold: 0.45,
            }
          );

          Array.from(prodOneRef.current.children).forEach((child) =>
            observer.observe(child)
          );

          Array.from(prodTwoRef.current.children).forEach((child) =>
            observer.observe(child)
          );
        },
        prodOneRef,
        prodTwoRef
      );
      return () => ctx.revert();
    }
  }, []);

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
      }, elderlyRef);

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
        <main ref={elderlyRef}>
          <section>
            <div className="w-full overflow-hidden max-h-screen">
              <img
                src={PiElderlyHero}
                className="hero_image -translate-y-10 opacity-0 object-cover min-h-[40vh] min-w-full"
                alt="Hero"
              />
            </div>
            <div className="px-2">
              <p className="pet_definition translate-y-10 opacity-0 px-2 font-[500] mt-8 text-[rgb(0,0,0,0.6)] font-Nunito text-base">
                <b>Pi-Health Elderly</b> is a remote health monitoring and
                decision intelligence platform dedicated to deliver non-evasive,
                continuous and inclusionary care using our smart care and
                artificial intelligence technology”
              </p>
            </div>
          </section>

          <Spacing />

          <section>
            <div ref={prodOneRef} className="w-full px-2 flex flex-col gap-12">
              <h2
                className={`text-[28px] font-[700] break-words px-2 text-left tracking-[0.4px] [background-image:_linear-gradient(90deg,_#1d78d9_30.12%,_rgba(210,_137,_50,_0.95)70%)] [-webkit-text-fill-color:_transparent] [-webkit-background-clip:_text] [background-clip:_text] [text-fill-color:_transparent]`}
              >
                Wearables
              </h2>
              {PIELDERLY_PRODUCTS_CONSTS.map((product, index) => {
                return (
                  <ProductsCard
                    key={product.title + index}
                    product={product}
                    index={index}
                  />
                );
              })}
            </div>
          </section>

          <Spacing />

          <section>
            <div ref={prodTwoRef} className="w-full px-2 flex flex-col gap-12">
              <h2
                className={`text-[28px] font-[700] break-words px-2 text-left tracking-[0.4px] [background-image:_linear-gradient(90deg,_#1d78d9_30.12%,_rgba(210,_137,_50,_0.95)70%)] [-webkit-text-fill-color:_transparent] [-webkit-background-clip:_text] [background-clip:_text] [text-fill-color:_transparent]`}
              >
                Applications
              </h2>
              {PIELDERLY_PRODUCTS_TWO_CONSTS.map((product, index) => {
                return (
                  <ProductsCard
                    key={product.title + index}
                    product={product}
                    index={index + 1 * 5}
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

export default Elderly;
