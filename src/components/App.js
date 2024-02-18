import Layout from "./Layout"
import { Filter } from "./Filters"

function App() {
  const times = [
    {
      value: "15",
      label: "0-15 minutes",
    },
    {
      value: "30",
      label: "15-30 minutes",
    },
  ]
  return (
    <div className="App">
      <Layout>
        <Filter title="Cooking Time" options={times} />
      </Layout>
    </div>
  )
}

export default App
