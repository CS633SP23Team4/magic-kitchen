import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box, Grid, GridItem } from "@chakra-ui/react"
import { IngredientSearch } from "../components/IngredientSearch"
import Layout from "../components/Layout"
import { Filter } from "../components/Filters"
import { RecipeCard } from "../components/Card"

const filterOptions = [
  {
    title: "Max Cooking Time",
    options: [
      { label: "Any", value: "2880" },
      { label: "15 min", value: "15" },
      { label: "30 min", value: "30" },
      { label: "60 min", value: "60" },
    ],
  },
]
export default function Search() {
  const data = useLocation()
  let recipes = []
  if (data.state) {
    recipes = data.state.recipes
  }
  const [cookingTimeOption, setCookingTimeOption] = useState("")
  const [displayedRecipes, setDisplayedRecipes] = useState([])

  useEffect(() => {
    let filteredRecipes = recipes

    if (cookingTimeOption) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.readyInMinutes <= Number(cookingTimeOption)
      )
    }
    setDisplayedRecipes(filteredRecipes)
  }, [recipes, cookingTimeOption])

  return (
    <Layout>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(5, 1fr)" }} gap={{ lg: 8 }}>
        <GridItem py={12} colSpan={{ sm: 4, lg: 1 }}>
          {filterOptions.map((filter, index) => (
            <Filter
              key={index}
              title={filter.title}
              options={filter.options}
              onChangeFunc={(value) => setCookingTimeOption(value)}
            />
          ))}
        </GridItem>

        <GridItem py={{ lg: 12 }} colSpan={4}>
          <Box mb={6} p={2} bg="white">
            <IngredientSearch />
          </Box>

          <Box>
            {displayedRecipes.map(
              (recipe) =>
                recipe.suspiciousDataScore < 60 && (
                  <RecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    cookTime={recipe.readyInMinutes}
                    rating={recipe.spoonacularScore}
                    reviewCount={recipe.aggregateLikes}
                    imgLink={recipe.image}
                    link={recipe.spoonacularSourceUrl}
                    extendedIngredients={recipe.extendedIngredients}
                  />
                )
            )}
          </Box>
        </GridItem>
      </Grid>
    </Layout>
  )
}
