import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Stack,
  Divider,
  ButtonGroup,
  Text,
  Image,
  IconButton,
  Flex,
  Spacer,
  HStack,
} from "@chakra-ui/react"
import { InfoIcon, QuestionIcon, StarIcon, TimeIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { PropTypes } from "prop-types"
import { Rating } from "./Rating"

BlogCard.propTypes = {
  likes: PropTypes.number,
  bookmarks: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  imgLink: PropTypes.string,
  imgAlt: PropTypes.string,
}

export function BlogCard(props) {
  return (
    <Card maxW="sm" borderRadius="lg" overflow="hidden">
      <CardBody>
        <Image
          src={props.imgLink}
          fallbackSrc="https://thecrites.com/sites/all/modules/cookbook/theme/images/default-recipe-big.png"
          alt={props.imgAlt}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="4" textAlign="left">
          <Heading size="md">{props.title}</Heading>
          <Text>{props.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup
          spacing="8"
          display="flex"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="gray"
            aria-label="Like"
            fontSize="15px"
            size="sm"
            mr="1em"
            icon={<TriangleUpIcon />}
          />
          {props.likes ? props.likes : "0"}
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="gray"
            aria-label="Favorite"
            fontSize="15px"
            size="sm"
            mr="1em"
            icon={<StarIcon />}
          />
          {props.bookmarks ? props.bookmarks : "0"}
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

RecipeCard.propTypes = {
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
  title: PropTypes.string,
  imgLink: PropTypes.string,
  imgAlt: PropTypes.string,
  cookTime: PropTypes.number,
  flavor: PropTypes.string,
  difficulty: PropTypes.string,
}

export function RecipeCard(props) {
  return (
    <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline">
      <Image
        maxW={{ base: "100%", sm: "200px" }}
        src={props.imgLink}
        fallbackSrc="https://thecrites.com/sites/all/modules/cookbook/theme/images/default-recipe-big.png"
        alt={props.imgAlt}
        borderRadius="lg"
      />
      <Stack>
        <CardBody>
          <Heading size="md" pb="1em" textAlign="left">
            {props.title}
          </Heading>
          <Rating rating={props.rating} reviewCount={props.reviewCount} />
        </CardBody>
        <CardFooter pt="1em">
          <HStack spacing="24px">
            <TimeIcon /> <Text>{props.cookTime} minutes</Text>
            <Divider borderColor="darkgray" orientation="vertical" />
            <InfoIcon /> <Text>{props.flavor}</Text>
            <Divider borderColor="darkgray" orientation="vertical" />
            <QuestionIcon /> <Text>{props.difficulty}</Text>
          </HStack>
        </CardFooter>
      </Stack>
    </Card>
  )
}
