import React from 'react';
import {Box, Heading} from "@chakra-ui/react"
import {TipsData} from "../data/tips.ts"
import { BlogCard } from "../components/Card"
import Layout from "../components/Layout";
import FaqSection from "../components/FaqSection"
import { FaqOptions } from "../data/faq.ts"
function TipsList() {
    return (
        <Layout>
            <Box my={8} textAlign="center">
              <Heading margin="5vh">Tips</Heading>
                <Box display="grid" gridGap="4" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))">
                    {TipsData.map((tip) => (
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
              <Heading margin="5vh">Frequently Asked Questions</Heading>
              <FaqSection items={FaqOptions} />
            </Box>
        </Layout>
    );
}

export default TipsList;
