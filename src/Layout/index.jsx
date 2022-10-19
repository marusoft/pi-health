import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
