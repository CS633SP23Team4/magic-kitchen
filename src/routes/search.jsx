import { useLocation, useNavigate } from "react-router-dom"
import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react"
import { IngredientSearch } from "../components/IngredientSearch"
import Layout from "../components/Layout"
import { Filter } from "../components/Filters"
import { RecipeCard } from "../components/Card"
import { DietOptions } from "../data/diet.ts"

export default function Search() {
  const data = useLocation()
  let recipes
  if (data.state) {
    recipes = data.state.recipes
  }

  const navigate = useNavigate() // react hook for sending data between pages

  const filterOptions = [
    {
      title: "Cooking Time",
      options: [
        { label: "0-15 min", value: "15" },
        { label: "15-30 min", value: "30" },
        { label: "30-60 min", value: "60" },
        { label: ">60 min", value: "2880" },
      ],
    },
    {
      title: "Intolerances",
      options: DietOptions,
    },
  ]

  return (
    <Layout>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(5, 1fr)" }} gap={8}>
        <GridItem py={12}>
          {filterOptions.map((filter, index) => (
            <Filter key={index} title={filter.title} options={filter.options} />
          ))}
        </GridItem>

        <GridItem py={12} colSpan={4}>
          <Box mb={6} p={2} bg="white">
            <IngredientSearch />
          </Box>
          <Box>
            {recipes &&
              recipes.map(
                (recipe) =>
                  recipe.suspiciousDataScore < 60 && (
                    <RecipeCard
                      key={recipe.id}
                      title={recipe.title}
                      cookTime={recipe.readyInMinutes}
                      rating={recipe.spoonacularScore}
                      reviewCount={recipe.aggregateLikes}
                      imgAlt={""}
                      imgLink={recipe.image}
                      difficulty={""}
                      flavor={""}
                    />
                  )
              )}
          </Box>
        </GridItem>
      </Grid>
    </Layout>
  )
}
