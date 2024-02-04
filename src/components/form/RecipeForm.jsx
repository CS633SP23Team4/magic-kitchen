import { useEffect, useState } from "react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Flex,
  Box,
  Heading,
  Stack,
  InputGroup,
  Textarea,
  Text,
} from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import PropTypes from "prop-types"

IngredientGroup.propTypes = {
  id: PropTypes.string,
  deleteFunction: Function,
}
StepsGroup.propTypes = {
  id: PropTypes.string,
  deleteFunction: Function,
}

function IngredientGroup(props) {
  const [item, setItem] = useState("")
  const [amount, setAmount] = useState("")
  return (
    <InputGroup id={`${props.id}`} pt={2}>
      <Input
        bg="gray.50"
        placeholder="Ingredient (e.g. eggs)"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <Input
        bg="gray.50"
        ml={2}
        placeholder={`Amount needed`}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button border="1px" borderColor="gray.200" onClick={props.deleteFunction}>
        <DeleteIcon />
      </Button>
    </InputGroup>
  )
}

function StepsGroup(props) {
  return (
    <Flex id={`${props.id}`} pt={2}>
      <Text textAlign={"center"} p={2} color="gray.500" fontSize="1.2em">
        Step {parseInt(props.id) + 1}
      </Text>
      <Textarea bg="gray.50" height={48} placeholder="Add step instructions"></Textarea>
      <Button border="1px" borderColor="gray.200" size="xs" onClick={props.deleteFunction}>
        <DeleteIcon boxSize={3} />
      </Button>
    </Flex>
  )
}

export default function CustomRecipe() {
  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState([{ id: "0", item: "", amount: "0" }])
  const [steps, setSteps] = useState([{ id: "0", instructions: "" }])
  const [time, setTime] = useState("")
  const [kitchenware, setKitchenware] = useState("")
  const [tips, setTips] = useState("")

  useEffect(() => {
    setIngredients((prevIngredients) =>
      prevIngredients.map((obj, index) => ({ ...obj, id: `${index}` }))
    )
  }, [ingredients])

  const moreIngredients = () => {
    setIngredients(ingredients.concat([{ id: `${ingredients.length}`, item: "", amount: "0" }]))
  }
  const fewerIngredients = (i) => {
    setIngredients((prevIngredients) => {
      return prevIngredients.filter((obj) => obj.id !== i)
    })
  }

  const moreSteps = () => {
    setSteps(steps.concat([{ id: `${steps.length}`, instructions: "" }]))
  }

  return (
    <Box px={24} bg="#f0f9fa" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Add a New Recipe</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired>
              <FormLabel fontSize={24}>Name</FormLabel>
              <Input
                bg="gray.50"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormHelperText>Enter the name of this recipe.</FormHelperText>
            </FormControl>
            <FormControl my={6} isRequired>
              <Flex py={2} align={"center"}>
                <FormLabel fontSize={24} m={0}>
                  Ingredients
                </FormLabel>
                <Button border="1px" borderColor="gray.200" ml={6} onClick={moreIngredients}>
                  Add Ingredient
                </Button>
              </Flex>
              {ingredients.map((ingredient) => (
                <IngredientGroup
                  id={ingredient.id}
                  key={ingredient.id}
                  deleteFunction={() => fewerIngredients(ingredient.id)}
                />
              ))}
            </FormControl>
            <FormControl my={6} isRequired>
              <Flex py={2} align={"center"}>
                <FormLabel fontSize={24} m={0}>
                  Steps
                </FormLabel>
                <Button border="1px" borderColor="gray.200" ml={6} onClick={moreSteps}>
                  Add Step
                </Button>
              </Flex>
              <Stack>
                {steps.map((step) => (
                  <StepsGroup id={step.id} key={step.id} />
                ))}
              </Stack>
            </FormControl>
            <FormControl my={6} isRequired>
              <FormLabel fontSize={24}>Est Time</FormLabel>
              <Input
                bg="gray.50"
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <FormHelperText>Estimated cooking time</FormHelperText>
            </FormControl>
            <FormControl my={6}>
              <FormLabel fontSize={24}>Ktichenware Needed</FormLabel>
              <Input
                bg="gray.50"
                type="text"
                value={kitchenware}
                onChange={(e) => setKitchenware(e.target.value)}
              />
              <FormHelperText>What cookware will you need?</FormHelperText>
            </FormControl>
            <FormControl my={6}>
              <FormLabel fontSize={24}>Tips</FormLabel>
              <Input
                bg="gray.50"
                type="text"
                value={tips}
                onChange={(e) => setTips(e.target.value)}
              />
              <FormHelperText>Any common mistakes or tips</FormHelperText>
            </FormControl>
            <Button bg="brand.900" color="gray.50" width="full" mt={4} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  )
}
