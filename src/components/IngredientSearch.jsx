import {Button, Flex, FormLabel} from "@chakra-ui/react"
import AsyncSelect from "react-select/async"

import {Ingredients, IngredientOptions} from "../data/ingredients.ts"

// Only perform the search within the select if >3char
//
const options = []
const MIN_INPUT_LENGTH = 3;
Ingredients.forEach((ingredient) => {
    options.push({value: ingredient.ingredientId, label: ingredient.ingredient})
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

export function IngredientSearch() {

    return (
        <>
            <Flex wrap="wrap" alignItems="center" justify="center">
                <AsyncSelect
                    styles={{
                        indicatorSeparator: () => ({display: "none"}),
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? "grey" : "lightpink",
                            borderRadius: "90px",
                            minWidth: "28vw",
                        }),
                    }}
                    placeholder="Start typing an ingredient!"
                    isMulti
                    cacheOptions
                    noOptionsMessage={noOptionsMessage}
                    loadOptions={promiseOptions}
                />
                <Button m="1em" w="100px" bg="pink" borderRadius="90px">
                    Search
                </Button>
            </Flex>
        </>
    )
}
