import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Divider,
  ButtonGroup,
  Text,
  Image,
  IconButton,
  HStack,
  Link,
  AspectRatio,
  Icon,
} from "@chakra-ui/react"
import PropTypes from "prop-types"
import { StarIcon, TimeIcon } from "@chakra-ui/icons"
import DinnerIcon from "../icons/dinnerplate.svg"
import HeartIcon from "../icons/Heart.svg"
import { ChefIcon, PlateIcon } from "../icons/Icons"

import { Rating } from "./Rating"

BlogCard.propTypes = {
  likes: PropTypes.number,
  bookmarks: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  imgLink: PropTypes.string,
  imgAlt: PropTypes.string,
  link: PropTypes.string,
}

export function BlogCard(props) {
  return (
    <Card maxW="sm" borderRadius="lg" overflow="hidden">
      <CardBody>
        <AspectRatio maxW="400px" ratio={4 / 3}>
          <Image
            objectFit="cover"
            maxH="200px"
            maxW="100%"
            src={props.imgLink}
            fallbackSrc="https://thecrites.com/sites/all/modules/cookbook/theme/images/default-recipe-big.png"
            alt={props.imgAlt}
            borderRadius="lg"
          />
        </AspectRatio>
        <Stack mt="6" spacing="4" textAlign="left">
          <Heading size="md">
            <Link href={props.link}>{props.title}</Link>
          </Heading>
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
          <HStack spacing="12px">
            <TimeIcon /> <Text>{props.cookTime} minutes</Text>
            <Divider borderColor="darkgray" orientation="vertical" />
            <Icon as={PlateIcon} /> <Text>{props.flavor}</Text>
            <Divider borderColor="darkgray" orientation="vertical" />
            <Icon as={ChefIcon} />
            <Text>{props.difficulty}</Text>
          </HStack>
        </CardFooter>
      </Stack>
    </Card>
  )
}
