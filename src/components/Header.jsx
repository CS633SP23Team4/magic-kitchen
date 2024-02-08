import React from 'react';
import Navbar from "./Navbar";
import { Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <header className="header">
        <Navbar />
        <Heading as="h1" size="lg" fontWeight="bold">
          My Website
        </Heading>
    </header>
  );
};

export default Header;
