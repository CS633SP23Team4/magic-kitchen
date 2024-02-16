import { Heading } from "@chakra-ui/react"
import { FaqOptions } from "../data/faq.ts"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import FaqSection from "../components/FaqSection"

export default function Blogs() {
  return (
    <div className="App">
      <Layout>
        <Heading margin="5vh">Blogs</Heading>
        <BlogList />
        <Heading margin="3vh">FAQs</Heading>
        <FaqSection items={FaqOptions} />
      </Layout>
    </div>
  )
}
