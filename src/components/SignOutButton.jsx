import { Button } from "@chakra-ui/react"

import { redirect } from "react-router-dom"

export function SignOutButton() {
  const SignOut = async () => {
    localStorage.clear()
    redirect("/")
    window.location.reload()
  }

export function SignOutButton() {
  return <Button onClick={SignOut}>Sign out</Button>
}
