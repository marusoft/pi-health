import React, { useEffect, useState } from 'react';
import { CgMenuLeft, CgMenuMotion } from 'react-icons/cg';
import NAV_CONTENT, { LOGO } from './constants';
import { Link } from 'react-router-dom';
import navFunctions from './navFunctions';

const Navbar = () => {
  const { showList, setShowList, toggleSubList } = navFunctions();
  const [scrollPos, setScrollPos] = useState(window.screenY);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPos(window.scrollY);
    });
  }, [scrollPos]);

  return (
    <nav
      className={`fixed w-full  ${
        scrollPos > 600 ? 'bg-sky-700' : '[backdrop-filter:_blur(10px);]'
      }  z-50`}
    >
      <div className="lg:max-w-[1440px] lg:gap-4 px-4 justify-between flex lg:items-center lg:mx-auto h-[78px] items-center lg:px-[56px]">
        <Link
          to={LOGO.route}
          key={LOGO.label}
          className="flex flex-[0.5] lg:mb-0 items-center gap-4"
        >
          {<img src={LOGO.icon} loading="lazy" alt={LOGO.label} />}
          <h4 className="text-white [word-wrap:normal] min-w-max text-[16px] font-[600]">
            {LOGO.label}
          </h4>
        </Link>
        <div
          className={`absolute ${
            isOpen ? 'left-0 top-0' : 'top-0 lg:left-0 -left-[200vw]'
          } lg:z-[2000] z-[-1] transition-all duration-1000 pl-4 lg:h-max h-screen bgNavbar lg:relative w-full pt-[140px] lg:pt-0 px-4 gap-y-10 flex lg:justify-between lg:items-center  flex-1 lg:flex-row flex-col`}
        >
          <span
            className={`h-[1px] w-32 lg:hidden ${
              isOpen ? '-translate-x-0' : '-translate-x-40'
            }  bg-white transition-all delay-700 ease-in-out duration-1000`}
          />
          {NAV_CONTENT.map((navItem) => {
            if (navItem.subList) {
              return (
                <div
                  onClick={(e) => toggleSubList(e, navItem.label)}
                  role="button"
                  key={navItem.label}
                  className={`flex ${
                    isOpen
                      ? '[@media(max-width:_1020px)]:-translate-x-0 delay-1000'
                      : '[@media(max-width:_1020px)]:-translate-x-80'
                  } transition-all duration-500 relative gap-2 items-center`}
                >
                  <h4 className="text-white text-[14px] font-[600]">
                    {navItem.label}
                  </h4>
                  {navItem.icon}
                  <div
                    onMouseLeave={() => setShowList('')}
                    className={`absolute ${
                      showList === navItem.label ? 'flex' : 'hidden'
                    }  w-max top-10 bg-white rounded-[3px] flex-col items-stretch`}
                  >
                    {navItem.subList.map((list) => (
                      <Link
                        to={list.route}
                        className="font-[600] text-[14px] px-6 py-2 hover:bg-blue hover:text-white "
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
                  className={`text-white ${
                    isOpen
                      ? '[@media(max-width:_1020px)]:-translate-x-0 delay-1000'
                      : '[@media(max-width:_1020px)]:-translate-x-80'
                  } transition-all duration-500  text-[14px] font-[600]`}
                  key={navItem.label}
                >
                  {navItem.label}
                </Link>
              );
            }
          })}
          <span
            className={`h-[1px] lg:hidden w-32 ${
              isOpen ? '-translate-x-0' : '-translate-x-40'
            }  bg-white transition-all ease-in-out delay-700 duration-1000`}
          />
        </div>
        <div>
          {!isOpen ? (
            <CgMenuLeft
              onClick={() => setIsOpen(true)}
              className={`lg:hidden scale-x-[-1] scale-y-[-1] ${
                isOpen ? 'hidden' : 'block'
              } text-white text-3xl`}
            />
          ) : (
            <CgMenuMotion
              onClick={() => setIsOpen(false)}
              className={`${isOpen ? 'block' : 'hidden'} text-white text-3xl`}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
