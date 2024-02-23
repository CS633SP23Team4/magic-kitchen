import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseInit"

const SignOut = async () => {
    signOut(auth);
    window.location.reload();
}



export function SignOutButton() {
    return(
        <Button onClick={SignOut}>Sign out</Button>
    )
}
