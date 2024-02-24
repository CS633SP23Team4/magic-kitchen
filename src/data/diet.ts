export interface DietOption {
  readonly value: string
  readonly label: string
}

export const DietOptions: readonly DietOption[] = [
  { value: "egg", label: "Eggs" },
  { value: "dairy", label: "Dairy" },
  { value: "soy", label: "Soy" },
  { value: "glutin", label: "Glutin" },
  { value: "seafood", label: "Seafood" },
  { value: "treenut", label: "Tree Nuts" },
  { value: "peanut", label: "Peanuts" },
  { value: "grain", label: "Grain" },
  { value: "shellfish", label: "Shellfish" },
  { value: "sesame", label: "Sesame" },
  { value: "wheat", label: "Wheat" },
  { value: "sulfite", label: "Sulfite" },
]
