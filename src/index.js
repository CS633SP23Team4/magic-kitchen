import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import Home from "./routes/home"

const colors = {
  brand: {
    900: "#042433",
    800: "#76A1BC",
    700: "#D6E7E4",
  },
}

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "810px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
}

const theme = extendTheme({ breakpoints, colors })

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Home />,
  },
  {
    path: "/new-recipe",
    element: <Home />,
  },
  {
    path: "/tips",
    element: <Home />,
  },
  {
    path: "/account",
    element: <Home />,
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
