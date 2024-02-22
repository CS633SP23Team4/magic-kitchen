import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

import Home from "./routes/home"
import Tips from "./routes/tips"
import Account from "./routes/account"
import "@fontsource/aladin"

/*
--dark-moss-green: #354417ff;
--rust: #BD4823ff;
--prussian-blue: #0A2537ff;
--azure-web: #E8F3F2ff;
--ash-gray: #AEC2C6ff;

--azure-web: #E8F3F2ff;
--azure-web-2: #D7E7E5ff;
--ash-gray: #AEC2C6ff;
--cadet-gray: #8F9EA1ff;
--cadet-gray-2: #8EACBFff;
--prussian-blue: #031F32ff;
 */
const colors = {
  brand: {
    prussianBlue: "#0A2537ff",
    azure: "#D7E7E5ff",
    azureLight: "#E8F3F2ff",
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
