import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import Home from "./routes/home"
import Tips from "./routes/tips"
import Account from "./routes/account"
import Search from "./routes/search"
import CreateRecipe from "./routes/createRecipe"
import "@fontsource/aladin"

const colors = {
  brand: {
    prussianBlue: "#0A2537ff",
    azure: "#D7E7E5ff",
    azureLight: "#f4f6f6",
    offWhite: "#F4F6F6FF",
    cadet: "#8EACBFff",
    grey: "#AEC2C6ff",
    cadetGrey: "#8F9EA1ff",
  },
  fonts: {
    logo: `Aladin`,
  },
}

const breakpoints = {
  base: "0px",
  sm: "445px",
  md: "968px",
  lg: "1000px",
  xl: "1200px",
  "2xl": "1536px",
}

const theme = extendTheme({
  breakpoints,
  colors,
  styles: {
    global: () => ({
      body: {
        bg: "#F4F6F6FF",
      },
    }),
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/new-recipe",
    element: <CreateRecipe />,
  },
  {
    path: "/tips",
    element: <Tips />,
  },
  {
    path: "/account",
    element: <Account />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
