import Layout from "../components/Layout"
import CustomRecipe from "../components/form/RecipeForm"
import { FormWrapper } from "../components/form/FormWrapper"
import { CreateNewRecipeForm } from "../components/form/RecipeWrapper"

export default function CreateRecipe() {
  return (
    <Layout>
      <CreateNewRecipeForm />
    </Layout>
  )
}
