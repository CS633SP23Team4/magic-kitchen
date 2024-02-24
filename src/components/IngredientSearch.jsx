import PropTypes from "prop-types";
import {Flex} from "@chakra-ui/react"
import AsyncSelect from "react-select/async"
import {StylesConfig} from "react-select";
import {Ingredients} from "../data/ingredients.ts"
import {SecondaryButton} from "./form/CustomButton";


IngredientSearch.propTypes = {
    recipeFunction: PropTypes.func,
    chooseIngredients: PropTypes.func
}

const options = []
const MIN_INPUT_LENGTH = 3;
Ingredients.forEach((ingredient) => {
    let label = ingredient.ingredient.replaceAll('-', ' ')
    label = label.charAt(0).toUpperCase() + label.slice(1)
    options.push({value: ingredient.ingredient, label: label})
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
        ...styles, backgroundColor: 'white', borderColor: state.isFocused ? "#0A2537ff" : "#8EACBFff",
        borderRadius: "90px",
        padding: ".5em"
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
    multiValue: (styles) => {
        return {
            ...styles,
            backgroundColor: '#FFFFFF',
            color: "#042433"
        };
    },
};


export function IngredientSearch(props) {
    return (
        <>
            <AsyncSelect
                styles={colourStyles}
                placeholder="Start typing an ingredient!"
                isMulti
                cacheOptions
                noOptionsMessage={noOptionsMessage}
                loadOptions={promiseOptions}
                onChange={(e) => props.chooseIngredients(e)}
            />
            <Flex justify="center" pt={2}>
                <SecondaryButton clickFunction={props.recipeFunction} text="Search"/>
            </Flex>

        </>
    )
}
