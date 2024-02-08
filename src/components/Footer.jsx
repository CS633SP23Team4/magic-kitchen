import React from 'react';
import { Box, Text, Flex, Link, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer className="footer">
      <Box
        bgColor="gray.700"
        color="white"
        p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>&copy; 2024 BU MET 633 Team 4</Text>
        <Stack direction="row" spacing={4}>
          <Link href="https://github.com/CS633SP23Team4/magic-kitchen" target="_blank">
            View on GitHub
          </Link>
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
