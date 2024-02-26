import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export function SignOutButton() {
  const navigate = useNavigate()

  const SignOut = async () => {
    localStorage.clear()
    navigate("/")
  }
  return <Button onClick={SignOut}>Sign out</Button>
}
