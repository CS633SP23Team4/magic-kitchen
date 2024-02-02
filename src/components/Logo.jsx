import React from "react"
import { Box, Image } from "@chakra-ui/react"
import PropTypes from "prop-types"
import logo from "../logo.png"

Logo.propTypes = {
  size: PropTypes.string,
  radius: PropTypes.string,
}
export default function Logo(props) {
  return (
    <Box>
      <Image
        boxSize={props.size}
        borderRadius={props.radius}
        src={logo}
        alt="Magic Kitchen Logo"
      ></Image>
    </Box>
  )
}
