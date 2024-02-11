import React from "react"
import { Box, Image } from "@chakra-ui/react"
import PropTypes from "prop-types"
import logo from "../logo.png"
import mkIcon from "../icon.png"

Logo.propTypes = {
  size: PropTypes.string,
  radius: PropTypes.string,
}

MkIcon.propTypes = {
  size: PropTypes.string,
  radius: PropTypes.string,
}

export function Logo(props) {
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

export function MkIcon(props) {
  return (
    <Box>
      <Image
        boxSize={props.size}
        borderRadius={props.radius}
        src={mkIcon}
        alt="Magic Kitchen Icon"
      ></Image>
    </Box>
  )
}
