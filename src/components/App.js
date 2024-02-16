import { FaqOptions } from "../data/faq.ts"
import Layout from "./Layout"
import BlogList from "./BlogList"
import FaqSection from "./FaqSection"

function App() {
  return (
    <div className="App">
        <Layout>
          <BlogList />
          <FaqSection items={FaqOptions} />
        </Layout>
    </div>
  )
}

export default App
