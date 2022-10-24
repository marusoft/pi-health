import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
