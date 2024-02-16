import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  // Add prop validation with PropTypes
  Layout.propTypes = {
    children: PropTypes.node.isRequired, // Require children prop
  };

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};


Layout.propTypes = { children: PropTypes.any }
export default Layout;