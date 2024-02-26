import React from "react"
import { Box, Grid, Heading } from "@chakra-ui/react"
import { TipsData } from "../data/tips.ts"
import { BlogCard } from "../components/Card"
import Layout from "../components/Layout"
import FaqSection from "../components/FaqSection"
import { FaqOptions } from "../data/faq.ts"
function TipsList() {
  return (
    <Layout>
      <Box my={8} textAlign="center">
        <Heading margin="5vh">Tips</Heading>
        <Grid
          gridGap="4"
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          justifyItems="center"
        >
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
        </Grid>
        <Heading margin="5vh">Frequently Asked Questions</Heading>
        <FaqSection items={FaqOptions} />
      </Box>
    </Layout>
  )
}

export default TipsList
