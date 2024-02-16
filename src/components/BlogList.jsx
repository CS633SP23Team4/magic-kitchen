import React, { useState, useEffect } from 'react';
import { Box, Heading, List, ListItem, Link, Text, Flex, Image, useBreakpointValue } from "@chakra-ui/react"
import { BlogOptions } from "../data/blogs.ts"
import { BlogCard } from "./Card"
function BlogList() {
  const fontSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });

  return (
    <Box my={8} textAlign="center">
      <Box display="grid" gridGap="4" gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))">
        {BlogOptions.map((blog) => (
          <BlogCard // Use your existing BlogCard component
            key={blog.id}
            title={blog.title}
            link={blog.link}
            image={blog.image}
            alt={blog.alt}
            description={blog.description}
          />
        ))}
      </Box>
    </Box>
  );
}

export default BlogList;
