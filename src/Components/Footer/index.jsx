import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import routes from '../../Routes/routes.const';
import Container from '../Container';
import NAV_CONTENT, { heart } from '../Navbar/constants';
import navFunctions from '../Navbar/navFunctions';

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            gsap.to('.links-container', {
              y: 0,
              opacity: 1,
              duration: 1,
            });
            gsap.to('.logo', {
              y: 0,
              opacity: 1,
              duration: 1,
            });

            gsap.to('.socials', {
              y: 0,
              opacity: 1,
              duration: 1,
            });

            gsap.to('.contact', {
              y: 0,
              opacity: 1,
              duration: 1,
            });
          }
        },
        {
          threshold: 0.7,
        }
      );

      observer.observe(footerRef.current);
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const { showList, setShowList, toggleSubList } = navFunctions();
  return (
    <div
      ref={footerRef}
      className="w-full mt-24 flex justify-center bottom-0 bg-sky-700"
    >
      <Container>
        <div className="flex items-center flex-col w-full gap-4 [col-gap:2rem] py-16 justify-center">
          <Link
            to={routes.root}
            className="flex flex-[0.5] logo -translate-y-[20px] opacity-0 items-center gap-2"
          >
            {<img src={heart} loading="lazy" alt="HeartRate" />}
            <h2 className=" text-white [word_-_wrap:normal] min-w-max text-[22px] font-[600]">
              Pi-Health
            </h2>
          </Link>
          <div className="links-container -translate-y-[20px] opacity-0 flex flex-1 flex-wrap items-center justify-center gap-6">
            {NAV_CONTENT.map((navItem) => {
              if (navItem.subList) {
                return (
                  <div
                    onClick={(e) => toggleSubList(e, navItem.label)}
                    role="button"
                    key={navItem.label}
                    className="flex relative gap-2 items-center"
                  >
                    <h4 className="text-white text-[14px] text-[rgba(255,_255,_255,_0.99)] font-[600]">
                      {navItem.label}
                    </h4>
                    {navItem.icon}
                    <div
                      onMouseLeave={() => setShowList('')}
                      className={`absolute ${
                        showList === navItem.label ? 'flex' : 'hidden'
                      }  w-max left-[-50%] bottom-[-550%] lg:left-[25%] z-10 lg:bottom-0 bg-white  flex-col items-stretch`}
                    >
                      {navItem.subList.map((list) => (
                        <Link
                          to={list.route}
                          className="font-[500] px-6 py-2  hover:bg-[rgba(53,_118,_167,_0.8)] hover:text-white text-[14px]"
                          key={list.label}
                        >
                          {list.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              } else {
                return (
                  <Link
                    to={navItem.route}
                    className="text-[rgba(255,_255,_255,_0.99)] w-max text-[14px] font-[600]"
                    key={navItem.label}
                  >
                    {navItem.label}
                  </Link>
                );
              }
            })}
          </div>
          <div className="w-full h-[1px] [border:0.5px_solid_rgb(255,255,255,0.3)] my-10" />
          <div className="socials translate-y-[20px] opacity-0 flex flex-col gap-6 flex-1">
            <div className="text-white flex items-center gap-3 text-[20px]">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent [border:.5px_solid_white]">
                <AiOutlineTwitter className="w-[50%] h-[50%]" />
              </span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent [border:.5px_solid_white]">
                <ImLinkedin2 className="-translate-y-[2px]" />
              </span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent [border:.5px_solid_white]">
                <AiFillYoutube className="w-[50%] h-[50%]" />
              </span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent [border:.5px_solid_white]">
                <AiFillFacebook className="w-[50%] h-[50%]" />
              </span>
            </div>
          </div>
          <div className="contact -translate-y-[20px] opacity-0 flex items-center text-white gap-4">
            <p className="text-[14px] font-Nunito font-[600]">
              +44 161 3620 101
            </p>
            <span className="h-4 w-[1px] bg-white" />
            <p className="text-[16px] tracking-wide  font-Nunito font-[600]">
              info@pi-health.co.uk
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
