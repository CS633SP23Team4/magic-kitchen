import Layout from "../components/Layout"
import CustomRecipe from "../components/form/RecipeForm"
import { FormWrapper } from "../components/form/FormWrapper"

export default function CreateRecipe() {
  return (
    <Layout>
      <FormWrapper header="Submit a New Recipe">
        <CustomRecipe />
      </FormWrapper>
    </Layout>
  )
}
