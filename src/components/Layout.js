import React from 'react';
import PropTypes from 'prop-types';
import { Container } from "@chakra-ui/react"
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
      <Container as="main" h="100vh" minHeight="100vh" alignItems="center" justifyContent="center">
      {children}
      </Container>
      <Footer />
    </>
  );
};


Layout.propTypes = { children: PropTypes.any }
export default Layout;