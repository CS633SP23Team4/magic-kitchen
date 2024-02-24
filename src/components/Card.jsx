import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Divider,
  Text,
  Image,
  HStack,
  Link,
  AspectRatio,
  Icon,
} from "@chakra-ui/react"
import PropTypes from "prop-types"
import { ExternalLinkIcon, TimeIcon } from "@chakra-ui/icons"
import { PlateIcon } from "../icons/Icons"
import { Rating } from "./Rating"

BlogCard.propTypes = {
  likes: PropTypes.number,
  bookmarks: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.string,
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
            src={props.image}
            fallbackSrc="https://thecrites.com/sites/all/modules/cookbook/theme/images/default-recipe-big.png"
            alt={props.alt}
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
    </Card>
  )
}

RecipeCard.propTypes = {
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
  title: PropTypes.string,
  imgLink: PropTypes.string,
  link: PropTypes.string,
  cookTime: PropTypes.number,
  extendedIngredients: PropTypes.array,
}

export function RecipeCard(props) {
  const extendedIngredientsArray = props.extendedIngredients
  const extendedIngredientsNames = []
  extendedIngredientsArray.forEach((ingredient) => extendedIngredientsNames.push(ingredient.name))
  const uniqueIngredients = [...new Set(extendedIngredientsNames)]
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      my={2}
      shadow="md"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.imgLink}
        fallbackSrc="https://thecrites.com/sites/all/modules/cookbook/theme/images/default-recipe-big.png"
        borderRadius="lg"
      />
      <Stack>
        <CardBody>
          <Heading size="md" pb="1em" textAlign="left">
            <Link href={props.link} isExternal>
              {props.title}
              <ExternalLinkIcon mx="4px" mb="8px" boxSize={4} />
            </Link>
          </Heading>
          <Rating rating={props.rating} reviewCount={props.reviewCount} />
        </CardBody>
        <CardFooter pt="1em">
          <HStack spacing="12px">
            <TimeIcon /> <Text>{props.cookTime} min</Text>
            <Divider borderColor="darkgray" orientation="vertical" />
            <Icon as={PlateIcon} />
            {props.extendedIngredients && <Text>{uniqueIngredients.join(", ")}</Text>}
          </HStack>
        </CardFooter>
      </Stack>
    </Card>
  )
}
