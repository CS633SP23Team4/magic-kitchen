import {useEffect, useState} from "react"
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Flex,
    Stack,
    InputGroup,
    Textarea,
    Text,
} from "@chakra-ui/react"
import AsyncSelect from "react-select/async"
import {StylesConfig} from "react-select";
import PropTypes from "prop-types"
import {Ingredients} from "../../data/ingredients.ts"
import {DeleteButton, PrimaryButton, SecondaryButton} from "./CustomButton"


IngredientGroup.propTypes = {
    id: PropTypes.string,
    deleteFunction: Function,
    setIngredientsFunction: PropTypes.func
}
StepsGroup.propTypes = {
    id: PropTypes.string,
    deleteFunction: Function,
    setStepsFunction: PropTypes.func
}
const MIN_INPUT_LENGTH = 3
const options = []
Ingredients.forEach((ingredient) => {
    let label = ingredient.ingredient.replaceAll("-", " ")
    label = label.charAt(0).toUpperCase() + label.slice(1)
    options.push({value: ingredient.ingredientId, label: label})
})

const filterColors = (inputValue: string) => {
    if (inputValue.length >= MIN_INPUT_LENGTH) {
        return options.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    }
};

const promiseOptions = (inputValue: string) =>
    new Promise((resolve) => {
        setTimeout(() => {

            resolve(filterColors(inputValue));
        }, 500);
    });

const noOptionsMessage = (input) =>
    input.inputValue.length >= MIN_INPUT_LENGTH
        ? "No options"
        : "Search input must be at least 3 characters";

const colourStyles: StylesConfig = {
    control: (styles, state) => ({
        ...styles, backgroundColor: '#F7FAFC', borderColor: state.isFocused ? "#E2E8F0" : "#E2E8F0",
        borderRadius: "10px",
        padding: "2px",
        minWidth: "25vw"
    }),
    menu: (styles, state) => ({
        ...styles,
        position: "relative",
        top: 0
    }),

    option: (styles, {isDisabled, isFocused}) => {
        return {
            ...styles,

            backgroundColor: isDisabled
                ? undefined
                : isFocused
                    ? "#D2E7E5"
                    : undefined,
            color: isDisabled
                ? '#ccc'
                : "#042433",
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
            },
        };
    },
};


function IngredientGroup(props) {
    const [id, setId] = useState(props.id)
    const [item, setItem] = useState("")
    const [amount, setAmount] = useState("")

    useEffect(() => {
        // Call the setIngredientsFunction passed from parent to update the ingredient
        props.setIngredientsFunction({id: props.id, item: item, amount: amount})
    }, [item, amount])

    return (
        <InputGroup id={props.id} p={2}>
            <AsyncSelect
                options={Ingredients}
                onChange={(selectedOption) => {
                    setItem(selectedOption.label)
                    setId(selectedOption.value)
                }}
                cacheOptions
                noOptionsMessage={noOptionsMessage}
                loadOptions={promiseOptions}
                placeholder="Start typing an ingredient!"
                styles={colourStyles}
                value={{value: id, label: item}}
            />
            <Input
                bg="gray.50"
                ml={2}
                maxW="200px"
                placeholder={`Amount needed`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <DeleteButton deleteFunction={props.deleteFunction}/>
        </InputGroup>
    )
}

function StepsGroup(props) {
    const [instructions, setInstructions] = useState("")

    useEffect(() => {
        // Call the setIngredientsFunction passed from parent to update the ingredient
        props.setStepsFunction({id: props.id, step: parseInt(props.id) + 1, instructions: instructions})
    }, [instructions])
    return (
        <Flex id={`${props.id}`} pt={2}>
            <Text textAlign={"center"} p={2} color="gray.500" fontSize="1.2em">
                Step {parseInt(props.id) + 1}
            </Text>
            <Textarea bg="gray.50" height={48} placeholder="Add step instructions"
                      onChange={(e) => setInstructions(e.target.value)}/>
            <DeleteButton deleteFunction={props.deleteFunction}/>
        </Flex>
    )
}

CustomRecipe.propTypes = {
    submitFunction: PropTypes.func,
    user: PropTypes.string
}
export default function CustomRecipe(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [ingredients, setIngredients] = useState([{id: "0", item: "", amount: "0"}])
    const [steps, setSteps] = useState([{id: "0", instructions: ""}])
    const [time, setTime] = useState("")
    const [kitchenware, setKitchenware] = useState("")
    const [tips, setTips] = useState("")

    useEffect(() => {
        setIngredients((prevIngredients) =>
            prevIngredients.map((obj, index) => ({...obj, id: `${index}`}))
        )
    }, [ingredients])

    const moreIngredients = () => {
        setIngredients(ingredients.concat([{id: `${ingredients.length}`, item: "", amount: "0"}]))
    }
    const fewerIngredients = (i) => {
        setIngredients((prevIngredients) => {
            return prevIngredients.filter((obj) => obj.id !== i)
        })
    }

    const setIngredientsFunction = (updatedIngredient) => {
        setIngredients((prevIngredients) => {
            return prevIngredients.map((prevIngredient) => {
                if (prevIngredient.id === updatedIngredient.id) {
                    return updatedIngredient
                } else {
                    return prevIngredient
                }
            })
        })
    }

    const moreSteps = () => {
        setSteps(steps.concat([{id: `${steps.length}`, step: `${steps.length + 1}`, instructions: ""}]))
    }

    const fewerSteps = (i) => {
        setSteps((prevSteps) => {
            return prevSteps.filter((obj) => obj.id !== i)
        })
    }

    const setStepsFunction = (updatedStep) => {

        setSteps((prevSteps) => {
            return prevSteps.map((prevStep) => {
                if (prevStep.id === updatedStep.id) {
                    return updatedStep
                } else {
                    return prevStep
                }
            })
        })
    }

    const submitForm = () => {
        props.submitFunction({
            name: title,
            description: description,
            owner: props.user,
            intoleranceTags: [],
            timeEstimate: time,
            steps: steps,
            ingredients: ingredients,
            tips: tips,
            kitchenware: kitchenware,
        })
    }


    return (
        <>
            <FormControl isRequired>
                <FormLabel fontSize={24}>Name</FormLabel>
                <Input bg="gray.50" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <FormHelperText>Enter the name of this recipe.</FormHelperText>
            </FormControl>
            <FormControl my={6} isRequired>
                <FormLabel fontSize={24}>Description</FormLabel>
                <Input bg="gray.50" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <FormHelperText>A short summary of this recipe</FormHelperText>
            </FormControl>
            <FormControl my={6} isRequired>
                <FormLabel fontSize={24}>Est Time</FormLabel>
                <Input bg="gray.50" type="text" value={time} onChange={(e) => setTime(e.target.value)}/>
                <FormHelperText>Estimated cooking time in minutes</FormHelperText>
            </FormControl>
            <FormControl my={6} isRequired>
                <Flex py={2} align={"center"}>
                    <FormLabel fontSize={24} m={0}>
                        Ingredients
                    </FormLabel>
                    <SecondaryButton text="Add Ingredient" clickFunction={moreIngredients}/>
                </Flex>
                {ingredients.map((ingredient) => (
                    <IngredientGroup
                        id={ingredient.id}
                        key={ingredient.id}
                        deleteFunction={() => fewerIngredients(ingredient.id)}
                        setIngredientsFunction={setIngredientsFunction}
                    />
                ))}
            </FormControl>
            <FormControl my={6} isRequired>
                <Flex py={2} align={"center"}>
                    <FormLabel fontSize={24} m={0}>
                        Steps
                    </FormLabel>
                    <SecondaryButton text="Add Step" clickFunction={moreSteps}/>
                </Flex>
                <Stack>
                    {steps.map((step) => (
                        <StepsGroup id={step.id} key={step.id} setStepsFunction={setStepsFunction}
                                    deleteFunction={() => fewerSteps(step.id)}/>
                    ))}
                </Stack>
            </FormControl>

            <FormControl my={6}>
                <FormLabel fontSize={24}>Kitchenware Needed</FormLabel>
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
                <Input bg="gray.50" type="text" value={tips} onChange={(e) => setTips(e.target.value)}/>
                <FormHelperText>Any common mistakes or tips</FormHelperText>
            </FormControl>
            <PrimaryButton
                bg="brand.900"
                color="gray.50"
                width="full"
                mt={4}
                type="submit"
                text="Submit"
                clickFunction={submitForm}
            />
        </>
    )
}
