import SpoonacularApi from "spoonacular_api"

const defaultClient = SpoonacularApi.ApiClient.instance
// Configure API key authorization: apiKeyScheme
const apiKeyScheme = defaultClient.authentications["apiKeyScheme"]
apiKeyScheme.apiKey = "dd4777b77513425b841d416f91e5a385"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyScheme.apiKeyPrefix['x-api-key'] = "Token"

let apiInstance = new SpoonacularApi.RecipesApi()
export const searchByIngredient = (ingredients) => {
  let opts = {
    ingredients: ingredients, // String | A comma-separated list of ingredients that the recipes should contain.
    number: 10, // Number | The maximum number of items to return (between 1 and 100). Defaults to 10.
    limitLicense: true, // Boolean | Whether the recipes should have an open license that allows display with proper attribution.
    ranking: 1, // Number | Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
    ignorePantry: false, // Boolean | Whether to ignore typical pantry items, such as water, salt, flour, etc.
  }
  apiInstance.searchRecipesByIngredients(opts, (error, data, response) => {
    if (error) {
      console.error(error)
    } else {
      console.log("API called successfully. Returned data: " + data)
      return data
    }
  })
}
