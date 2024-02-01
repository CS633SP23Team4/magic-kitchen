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

const theme = extendTheme({ colors })

const router = createBrowserRouter([
  {
    path: "/",
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
