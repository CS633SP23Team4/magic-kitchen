import { useState } from "react"
import { FormWrapper } from "./FormWrapper"
import CustomRecipe from "./RecipeForm"
import { pushUserRecipe } from "../../firebaseInit"

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
    handleSubmit()
  }
  const handleSubmit = async () => {
    const result = await pushUserRecipe("testUser", formData)
    if (result) console.log("success")
  }
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <CustomRecipe setFormData={handleSetFormData} />
      </form>
    </FormWrapper>
  )
}
