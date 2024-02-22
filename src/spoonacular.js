export async function getRecipeFromIngredients(selectedIngredients) {
  const ingredientIds = selectedIngredients.map((ingredient) => ingredient.value)
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientIds.join(",+")}&apiKey=dd4777b77513425b841d416f91e5a385`
    )
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}

export async function getBulkRecipeInformation(ids) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&apiKey=dd4777b77513425b841d416f91e5a385`
    )
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}
