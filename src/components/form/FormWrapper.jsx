import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react"
import PropTypes from "prop-types"

FormWrapper.propTypes = {
  header: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export function FormWrapper({ children, header }) {
  return (
    <Box px={24} bg="#f0f9fa" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>{header}</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            {children}
            <Button bg="brand.900" color="gray.50" width="full" mt={4} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  )
}
