export async function getRecipeFromIngredients(selectedIngredients) {
  const ingredientIds = selectedIngredients.map((ingredient) => ingredient.value)
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientIds.join(",+")}&apiKey=597bacfd71824f7586aad89a023bddb8`
    )
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}

export async function getBulkRecipeInformation(ids) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&apiKey=597bacfd71824f7586aad89a023bddb8`
    )
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}
