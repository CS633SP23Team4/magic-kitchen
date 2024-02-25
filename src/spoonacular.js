export async function getRecipeFromIngredients(selectedIngredients) {
  const ingredientIds = selectedIngredients.map((ingredient) => ingredient.value)
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientIds.join(",+")}&apiKey=075d758830d041ea9b8ae7f3e3b3c8e3`
    )
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}

export async function getBulkRecipeInformation(ids) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&apiKey=075d758830d041ea9b8ae7f3e3b3c8e3`
    )
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}
