import { useState } from "react"
import { pushUserRecipe } from "../../firebaseInit"
import { useLocation } from "react-router-dom"
import { Text } from "@chakra-ui/react"
import { FormWrapper } from "./FormWrapper"
import CustomRecipe from "./RecipeForm"

export function CreateNewRecipeForm() {
  const data = useLocation()
  const user = data.state.user
  const [message, setMessage] = useState("")
  const [messageColor, setMessageColor] = useState("green")

  const handleSubmit = async (formData) => {
    const requiredFields = ["name", "description", "timeEstimate", "ingredients", "steps"]
    const missingFields = requiredFields.filter(
      (field) => !formData[field] || formData[field].length === 0
    )

    if (missingFields.length > 0) {
      // Display an error message to the user
      setMessage(`Missing required fields: ${missingFields.join(", ")}`)
      setMessageColor("red")
      return
    }
    const result = await pushUserRecipe(user, formData)
    if (result) {
      setMessage("Success! Your recipe was submitted.")
      setMessageColor("green")
    }
  }

  return (
    <FormWrapper>
      <Text color={messageColor}>{message}</Text>
      <form onSubmit={(e) => e.preventDefault()}>
        <CustomRecipe user={user} submitFunction={handleSubmit} />
      </form>
    </FormWrapper>
  )
}
