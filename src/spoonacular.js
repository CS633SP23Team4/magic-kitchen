

export async function getRecipeFromIngredients(selectedIngredients) {
  const spoon_key = process.env.REACT_APP_SPOON_apiKey
  const ingredientIds = selectedIngredients.map((ingredient) => ingredient.value)
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientIds.join(",+")}&apiKey=${spoon_key}`
    )
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}

export async function getBulkRecipeInformation(ids) {
  const spoon_key = process.env.REACT_APP_SPOON_apiKey
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&apiKey=${spoon_key}`
    )
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}
