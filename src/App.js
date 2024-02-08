import logo from "./logo.svg"
import "./App.css"
import CustomRecipe from "./components/form/RecipeForm"
import ProfileForm from "./components/form/ProfileForm"
import { FormWrapper } from "./components/form/FormWrapper"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FormWrapper header="Submit a Custom Recipe">
        <ProfileForm />
      </FormWrapper>
    </div>
  )
}

export default App
