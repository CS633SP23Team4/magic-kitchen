import { Box } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import PropTypes from "prop-types"

Rating.propTypes = {
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
}

export function Rating(props) {
  return (
    <Box display="flex" mt="2" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <StarIcon key={i} color={i < props.rating ? "darkgray.500" : "gray.300"} />
        ))}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {props.reviewCount ? props.reviewCount : "0"} reviews
      </Box>
    </Box>
  )
}
