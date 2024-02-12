import React from 'react';
import { Heading } from '@chakra-ui/react';
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="App-header">
        <Navbar />
        <Heading as="h1" size="lg" fontWeight="bold">
          Magic Kitchen
        </Heading>
    </header>
  );
};

export default Header;
