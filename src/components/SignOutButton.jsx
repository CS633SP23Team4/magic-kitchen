import { Button } from "@chakra-ui/react";

const SignOut = async () => {
    console.log("INSIDE SIGNOUT")
    localStorage.clear();
    window.location.reload();
}



export function SignOutButton() {
    return(
        <Button onClick={SignOut}>Sign out</Button>
    )
}