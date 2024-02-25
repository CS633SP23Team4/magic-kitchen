import { useState } from "react"
import { pushUserRecipe } from "../../firebaseInit"
import { FormWrapper } from "./FormWrapper"
import CustomRecipe from "./RecipeForm"

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
    setFormData(items);
    const requiredFields = ['name', 'description', 'timeEstimate', 'ingredients', 'steps'];
    const missingFields = requiredFields.filter(field => !formData[field] || formData[field].length === 0);

    if (missingFields.length > 0) {
      console.error(`Missing required fields: ${missingFields.join(', ')}`);
      // Display an error message to the user
      return;
    }
    handleSubmit();
  };


  var loggedInUser = localStorage.getItem('user');
  const handleSubmit = async () => {
    const result = await pushUserRecipe(loggedInUser, formData)
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
