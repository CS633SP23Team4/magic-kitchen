import { PrimaryButton } from "./CustomButton"
import { FormWrapper } from "./FormWrapper"
import CustomRecipe from "./RecipeForm"
import { useState } from "react"

export function CreateNewRecipeForm() {
  const getInitialFormData = () => ({
    name: "",
    description: "",
    intoleranceTags: [],
    timeEstimate: 0,
    steps: [{ number: 1, text: "" }],
    ingredients: [{ id: "0", name: "", amount: 0 }],
  })
  const [formData, setFormData] = useState(getInitialFormData())
  const handleSubmit = () => {
    console.log(formData)
  }
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <CustomRecipe />
        <PrimaryButton
          bg="brand.900"
          color="gray.50"
          width="full"
          mt={4}
          type="submit"
          text="Submit"
        />
      </form>
    </FormWrapper>
  )
}
