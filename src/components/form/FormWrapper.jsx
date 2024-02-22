import { Box, Heading } from "@chakra-ui/react"
import PropTypes from "prop-types"

FormWrapper.propTypes = {
  header: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export function FormWrapper({ children, header }) {
  return (
    <Box
      px={{
        base: "6",
        md: "24",
      }}
      bg="white"
      align="center"
      justifyContent="center"
    >
      <Box p={2}>
        <Box textAlign="center">
          <Heading>{header}</Heading>
        </Box>
        <Box my={4} textAlign="left">
          {children}
        </Box>
      </Box>
    </Box>
  )
}
