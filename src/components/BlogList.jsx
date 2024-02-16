import React from 'react';
import { Box } from "@chakra-ui/react"
import { BlogOptions } from "../data/blogs.ts"
import { BlogCard } from "./Card"
function BlogList() {
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
