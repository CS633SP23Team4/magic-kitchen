import React from 'react';
import {Box, Heading} from "@chakra-ui/react"
import { TipsList } from "../data/tips.ts"
import { BlogCard } from "../components/Card"
import Layout from "../components/Layout";
function TipsList() {
    return (
        <Layout>
            <Heading margin="5vh">Tips</Heading>
            <Box my={8} textAlign="center">
                <Box display="grid" gridGap="4" gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))">
                    {TipsList.map((tip) => (
                        <BlogCard // Use BlogCard component
                            key={tip.id}
                            title={tip.title}
                            link={tip.link}
                            image={tip.image_url}
                            alt={tip.alt}
                            description={tip.content}
                        />
                    ))}
                </Box>
            </Box>
        </Layout>
    );
}

export default TipsList;
