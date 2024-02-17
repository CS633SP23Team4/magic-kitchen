import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@chakra-ui/react"
import { IngredientSearch } from "../components/IngredientSearch"

export default function Home() {
  const [ingredients, setIngredients] = useState([])
  const navigate = useNavigate() // react hook for sending data between pages

  // we will pass this function to the child component so that the ingredients state gets
  // updated in the home page
  const chooseIngredients = (items) => {
    setIngredients(items)
  }

  const getRecipes = (selectedIngredients) => {
    const ingredientIds = selectedIngredients.map((ingredient) => ingredient.value)

    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientIds.join(",+")}&apiKey=dd4777b77513425b841d416f91e5a385`
    )
      .then((response) => response.json())
      .then((data) => {
        navigate("/search", { state: { recipes: data } })
      })
      .catch((error) => console.error(error))
  }

  return (
    <>
      <Box p={6}>
        <IngredientSearch
          recipeFunction={() => getRecipes(ingredients)}
          chooseIngredients={chooseIngredients}
        ></IngredientSearch>
      </Box>
    </>
  )
}
