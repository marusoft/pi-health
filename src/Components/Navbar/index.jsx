import React, { useEffect, useState } from 'react';
import NAV_CONTENT from './constants';
import { Link } from 'react-router-dom';
import navFunctions from './navFunctions';

const Navbar = () => {
  const { showList, setShowList, toggleSubList } = navFunctions();
  const [scrollPos, setScrollPos] = useState(window.screenY);

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
      <div className="max-w-[1440px] gap-4 justify-between flex items-center mx-auto h-[78px] [@media_(max-width:_1080px)]:hidden px-[56px]">
        {NAV_CONTENT.map((navItem) => {
          if (typeof navItem?.icon === 'string') {
            return (
              <Link
                to={navItem.route}
                key={navItem.label}
                className="flex flex-[0.5]  items-center gap-4"
              >
                {<img src={navItem.icon} loading="lazy" alt={navItem.label} />}
                <h4 className="text-white [word-wrap:normal] min-w-max text-[16px] font-[600]">
                  {navItem.label}
                </h4>
              </Link>
            );
          }
          if (navItem.subList) {
            return (
              <div
                onClick={(e) => toggleSubList(e, navItem.label)}
                role="button"
                key={navItem.label}
                className="flex relative gap-2 items-center"
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
                className="text-white text-[14px] font-[600]"
                key={navItem.label}
              >
                {navItem.label}
              </Link>
            );
          }
        })}
      </div>
    </nav>
  );
};

export default Navbar;
