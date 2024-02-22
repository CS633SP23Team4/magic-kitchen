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
    tips: "",
    kitchenware: "",
  })
  const [formData, setFormData] = useState(getInitialFormData())

  const handleSetFormData = (items) => {
    setFormData(items)
  }
  const handleSubmit = () => {
    console.log(formData)
  }
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <CustomRecipe setFormData={handleSetFormData} />
      </form>
    </FormWrapper>
  )
}
