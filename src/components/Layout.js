import React from "react"
import PropTypes from "prop-types"
import { Box } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  // Add prop validation with PropTypes
  Layout.propTypes = {
    children: PropTypes.node.isRequired, // Require children prop
  }

  return (
    <>
      <Header />
      <Box as="main" minHeight="100vh" mx={[2, 15, 40]}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

Layout.propTypes = { children: PropTypes.any }
export default Layout
