import PropTypes from "prop-types"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ButtonGroup,
  Button,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SiGoogle } from "react-icons/si"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, getCurrentUserData, RegisterLocal, signInWithGoogle } from "../firebaseInit"

SignupModal.propTypes = {
  setUserFunc: PropTypes.func,
}

export function SignupModal(props) {
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure()
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conf_password, setConfPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [userData, setUserData] = useState("")

  useEffect(() => {
    if (user) {
      localStorage.setItem("userId", user.uid)
      localStorage.setItem("userData", JSON.stringify(userData))
      props.setUserFunc(user.uid, userData)
    }
  }, [user, userData])

  const getUserData = async (id) => {
    try {
      const currentUserData = await getCurrentUserData(id)
      if (currentUserData) setUserData(currentUserData)
    } catch (error) {
      console.error(error)
    }
  }

  const SignInGoogle = async () => {
    try {
      const googleUser = await signInWithGoogle()
      if (googleUser) {
        await getUserData(googleUser.uid)
        setUser(googleUser)
      }
    } catch (err) {
      console.error(err) // Log the error for debugging
      setError("An error occurred while signing in. Please try again.") // User-friendly error message
    }
  }

  const SignIn = async (e) => {
    e.preventDefault()

    // Input validation
    const emailError = !email ? "Email cannot be blank!" : null
    const passwordError = !password ? "Password cannot be blank!" : null

    // Clear any existing error message
    setError("")

    // Display any validation errors immediately
    if (emailError) {
      setError(emailError)
      return
    }
    if (passwordError) {
      setError(passwordError)
      return
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      // Successfully signed in
      await getUserData(userCredential.user.uid)
      setUser(userCredential.user)

      setEmail("")
      setPassword("")
      navigate("/")
    } catch (err) {
      setError(`Authentication failed: ${err.message}`)
    }
  }

  const validateRegistration = () => {
    let isValid = true
    if (password !== "" && conf_password !== "") {
      if (password !== conf_password) {
        isValid = false
        setError("PASSWORDS MUST MATCH!")
      } else if (!email.includes("@")) {
        setError("Invalid Email")
      } else {
        setError("Registration Successful! Please log in below to continue.")
      }
    }
    return isValid
  }

  const RegisterUser = async (e) => {
    e.preventDefault()
    if (validateRegistration()) {
      // Create a new user with email and password using firebase
      await RegisterLocal(email, password)
    }
    setEmail("")
    setPassword("")
    setConfPassword("")
  }

  const openSignUpModal = () => {
    onSignUpOpen()
    if (isLoginOpen) {
      //reset errors to prevent error transfer
      setError("")
      onLoginClose()
    }
  }

  const openLoginModal = () => {
    onLoginOpen()
    if (isSignUpOpen) {
      //reset errors to prevent error transfer
      setError("")
      onSignUpClose()
    }
  }

  return (
    <>
      <Button onClick={onLoginOpen}>Sign in/ Sign up</Button>
      <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {error && <div className="auth__error">{error}</div>}
            <FormControl isRequired py="10px">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                type="email"
                autoComplete="email"
              />
            </FormControl>
            <FormControl isRequired py="10px">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="current-password"
              />
            </FormControl>
            <Button w="full" my="2" onClick={SignIn} isDisabled={email === "" || password === ""}>
              Login
            </Button>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup variant="solid" spacing="70px" alignItems="center">
              <Button leftIcon={<SiGoogle />} colorScheme="blue" onClick={SignInGoogle}>
                | Google Login
              </Button>
              <Button colorScheme="blue" variant="link" onClick={openSignUpModal}>
                Register for an account
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isSignUpOpen} onClose={onSignUpClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {error && <div className="auth__error">{error}</div>}
            <FormControl isRequired py="10px">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                type="email"
                autoComplete="email"
              />
            </FormControl>
            <FormControl isRequired py="10px">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControl isRequired py="10px">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                value={conf_password}
                onChange={(e) => setConfPassword(e.target.value)}
                placeholder="Confirm Password"
                autoComplete="current-password"
              />
            </FormControl>
            <Button w="full" my="2" onClick={RegisterUser}>
              Signup
            </Button>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup variant="solid" spacing="12" alignItems="center">
              <Button leftIcon={<SiGoogle />} colorScheme="blue" onClick={SignInGoogle}>
                | Google Login
              </Button>
              <Button colorScheme="blue" variant="link" onClick={openLoginModal}>
                Already registered? Login
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
