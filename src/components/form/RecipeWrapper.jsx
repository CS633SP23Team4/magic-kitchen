import { useEffect, useState } from "react"
import { pushUserRecipe } from "../../firebaseInit"
import { FormWrapper } from "./FormWrapper"
import CustomRecipe from "./RecipeForm"

export function CreateNewRecipeForm() {
  const getInitialFormData = () => ({
    name: "",
    description: "",
    intoleranceTags: [],
    timeEstimate: 0,
    steps: [{ id: 1, instructions: "" }],
    ingredients: [{ id: "0", item: "", amount: 0 }],
    tips: "",
    kitchenware: "",
  })
  const [formData, setFormData] = useState(getInitialFormData())

  var loggedInUser = localStorage.getItem("user")

  const handleSetFormData = async (items) => {
    setFormData(items)
    const requiredFields = ["name", "description", "timeEstimate", "ingredients", "steps"]
    const missingFields = requiredFields.filter(
      (field) => !formData[field] || formData[field].length === 0
    )

    if (missingFields.length > 0) {
      console.error(`Missing required fields: ${missingFields.join(", ")}`)
      // Display an error message to the user
      return
    }
    const result = handleSubmit()
    if (result) console.log("success")
  }

  useEffect(() => {
    setFormData(getInitialFormData())
  }, [loggedInUser])
  const handleSubmit = async () => {
    const result = await pushUserRecipe("testUser", formData)
    if (result) console.log("success")
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSetFormData}>
        <CustomRecipe setFormData={handleSetFormData} />
      </form>
    </FormWrapper>
  )
}
