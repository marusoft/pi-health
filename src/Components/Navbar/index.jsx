import React from 'react';
import NAV_CONTENT from './constants';
import { Link } from 'react-router-dom';
import navFunctions from './navFunctions';

const Navbar = () => {
  const { showList, setShowList, toggleSubList } = navFunctions();

  return (
    <nav className=" fixed w-full z-50 bg-blue">
      <div className="max-w-[1440px] gap-4 justify-between flex items-center mx-auto h-[80px] [@media_(max-width:_1080px)]:hidden px-[56px]">
        {NAV_CONTENT.map((navItem) => {
          if (typeof navItem?.icon === 'string') {
            return (
              <Link
                to={navItem.route}
                key={navItem.label}
                className="flex flex-[0.5] items-center gap-4"
              >
                {<img src={navItem.icon} alt={navItem.label} />}
                <h2 className="text-white [word_-_wrap:normal] min-w-max text-[18px] font-[600]">
                  {navItem.label}
                </h2>
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
                <h2 className="text-white text-[18px] font-[600]">
                  {navItem.label}
                </h2>
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
                      className="font-[500] px-6 py-2 hover:bg-blue hover:text-white "
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
                className="text-white text-[18px] font-[600]"
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
