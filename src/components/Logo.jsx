import React from "react"
import { Box, Image } from "@chakra-ui/react"
import logo from "../logo.png"

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
