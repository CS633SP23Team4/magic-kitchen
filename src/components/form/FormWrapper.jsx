import { Box, Heading } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { PrimaryButton } from "./CustomButton"

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
      align="center"
      justifyContent="center"
    >
      <Box p={2}>
        <Box textAlign="center">
          <Heading>{header}</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            {children}
            <PrimaryButton
              bg="brand.900"
              color="gray.50"
              width="full"
              mt={4}
              type="submit"
              text="Submit"
            />
          </form>
        </Box>
      </Box>
    </Box>
  )
}
