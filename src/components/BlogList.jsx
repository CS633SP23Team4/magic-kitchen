import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
import { Box, Heading, List, ListItem, Link, Text, Flex, Image, useBreakpointValue } from "@chakra-ui/react"

function BlogList() {
  const fontSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });

  const sampleBlogData = [
    {
      id: 1,
      title: "The Power of Open Source Collaboration in Software Development",
      link: "https://[insert your actual link].com",
      description: "Explore the benefits and challenges of open source collaboration in software development.",
      image: "https://[insert your actual image link].jpg",
    },
    // ... more entries
  ];
  const [blogs=sampleBlogData, setBlogs] = useState([]);
    /*
    useEffect(() => {
      // Fetch blog data from Firebase

      const db = firebase.firestore();
      const blogsRef = db.collection('blogs');

      blogsRef.get().then((querySnapshot) => {
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogData);
      });
    }, []);

    */
  // Replace sampleBlogs once firestore working


  return (
    <Box my={8} textAlign="center">
      <Heading as="h2" size="lg" mb={4}>Blogs</Heading>
      <List spacing={3}>
        {blogs.map((blog) => (
          <ListItem key={blog.id}>
            <Flex align="center">
              <Image boxSize="100px" src={blog.image} alt={blog.title} mr={4} />
              <Box>
                <Link href={blog.link} color="teal.500" fontWeight="bold" fontSize={fontSize}>
                  {blog.title}
                </Link>
                <Text fontSize="sm" color="gray.500">
                  {blog.description}
                </Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default BlogList;
