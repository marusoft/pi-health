import React from 'react';
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { IoMdMail } from 'react-icons/io';
import { Link } from 'react-router-dom';
import routes from '../../Routes/routes.const';
import Container from '../Container';
import NAV_CONTENT, { heart } from '../Navbar/constants';
import FooterImage from '../../Assets/images/footerImage.png';
import navFunctions from '../Navbar/navFunctions';

const Footer = () => {
  const { showList, setShowList, toggleSubList } = navFunctions();
  return (
    <div className="w-full mt-24 flex justify-center bottom-0 bg-blue">
      <Container>
        <div className="flex w-full flex-wrap gap-x-40 gap-y-16 [col-gap:2rem] py-16 justify-center">
          <div className="flex flex-1 flex-col gap-4 text-white">
            <Link
              to={routes.root}
              className="flex flex-[0.5] items-center gap-8"
            >
              {
                <img
                  src={heart}
                  loading="lazy"
                  alt="HeartRate"
                  className="scale-[1.2]"
                />
              }
              <h2 className="text-white [word_-_wrap:normal] min-w-max text-[22px] font-[600]">
                Pi-Health
              </h2>
            </Link>
            <div className="flex items-center text-white gap-4">
              <IoMdMail className="text-[20px]" />
              <p className="text-[16px] font-[500]">info@pi-health.co.uk</p>
            </div>
            <p className="text-[16px] font-[500]">+44 161 3620 101</p>
            <img src={FooterImage} alt="Footer" className="h-40 w-48" />
            <p className="text-[16px] font-[500] max-w-[280px]">
              For more information, contact Blossom Fletcher CEO of Pi-Health
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <h1 className="text-white [word_-_wrap:normal] min-w-max text-[28px] font-[600]">
              Tab
            </h1>
            {NAV_CONTENT.map((navItem) => {
              if (navItem.subList) {
                return (
                  <div
                    onClick={(e) => toggleSubList(e, navItem.label)}
                    role="button"
                    key={navItem.label}
                    className="flex relative gap-2 items-center"
                  >
                    <h4 className="text-white text-[16px] text-[rgba(255,_255,_255,_0.7)] font-[600]">
                      {navItem.label}
                    </h4>
                    {navItem.icon}
                    <div
                      onMouseLeave={() => setShowList('')}
                      className={`absolute ${
                        showList === navItem.label ? 'flex' : 'hidden'
                      }  w-max left-[25%] bottom-0 bg-white  flex-col items-stretch`}
                    >
                      {navItem.subList.map((list) => (
                        <Link
                          to={list.route}
                          className="font-[500] px-6 py-2  hover:bg-[rgba(53,_118,_167,_0.8)] hover:text-white text-[16px]"
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
                    className="text-[rgba(255,_255,_255,_0.7)] w-max text-[16px] font-[600]"
                    key={navItem.label}
                  >
                    {navItem.label}
                  </Link>
                );
              }
            })}
          </div>
          <div className="flex flex-col gap-6 flex-1 lg:flex-none lg:content-end">
            <h1 className="text-white [word-wrap:normal] min-w-max text-[28px] font-[600]">
              Follow Us
            </h1>
            <div className="text-white flex items-center gap-3 text-[20px]">
              <AiOutlineTwitter />
              <ImLinkedin2 className="-translate-y-[2px]" />
              <AiFillYoutube />
              <AiFillFacebook />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
