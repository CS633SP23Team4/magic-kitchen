import PropTypes from "prop-types"
import { Box, Flex, Heading, Text } from "@chakra-ui/react"

Ingredients.propTypes = {
  items: PropTypes.array,
}

export function Ingredients(props) {
  return (
    <>
      <Heading size="md" py="1em">
        Ingredients Details
      </Heading>
      <Box bg="gray.300">
        <Flex align="center" justify="center">
          {props.items.map(function (data) {
            return (
              <Flex
                key={data.id}
                p="1em"
                direction="row"
                wrap="wrap"
                align="center"
                justify="flex-start"
                alignItems="center"
              >
                <Text fontWeight="semibold" pr="10px">
                  {data.name}
                </Text>
                <Text>
                  {data.portion} {data.unit}
                </Text>
              </Flex>
            )
          })}
        </Flex>
      </Box>
    </>
  )
}
