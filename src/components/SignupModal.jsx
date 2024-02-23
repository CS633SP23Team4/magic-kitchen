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
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiGoogle } from "react-icons/si";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
 } from "firebase/auth";
import {
  auth,
  signInWithGoogle,
} from '../firebaseInit';


export function SignupModal() {
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure()
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conf_password, setConfPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const SignInGoogle = async () => {
    const user = await signInWithGoogle()
    setUser(user.email)
    console.log(user)
    if (user) {
      navigate('/');
      window.location.reload();
    }
  }


  const SignIn = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res.user)
      .catch((err) => alert(err.message))
    })
    .catch(err => setError("INVALID EMAIL OR PASSWORD!"))

    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/');
        window.location.reload();
      }
    })
  }
  
  const validateRegisteration = () => {
    let isValid = true
    if (password !== '' && conf_password !== ''){
      if (password !== conf_password) {
        isValid = false
        setError('PASSWORDS MUST MATCH!')
      } else if (!email.includes('@')) {
          setError('Invalid Email')
      }
      else {
        setError('Login Successful')
      }
    }
    return isValid
  }

  const RegisterUser = e => {
    e.preventDefault()
    if(validateRegisteration()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res.user)
            .catch((err) => alert(err.message))
          })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfPassword('')
  }

  const openSignUpModal = () => {
    onSignUpOpen()
    if (isLoginOpen) {
      setError('')
      onLoginClose()
    }
  }

  const openLoginModal = () => {
    onLoginOpen()
    if (isSignUpOpen) {
      setError('')
      onSignUpClose()
    }
  }

  return(
    <>
      <Button onClick={onLoginOpen}>Sign in/ Sign up</Button>
      <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {error && <div className='auth__error'>{error}</div>}
          <FormControl isRequired py="10px">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="current-password"
              />
            </FormControl>
            <Button w="full" my="2" onClick={SignIn}>
              Login
            </Button>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup variant='solid' spacing='70px' alignItems="center">
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
          {error && <div className='auth__error'>{error}</div>}
          <FormControl isRequired py="10px">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControl isRequired py="10px">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                value={conf_password}
                onChange={e => setConfPassword(e.target.value)}
                placeholder="Confirm Password"
                autoComplete="current-password"
                
              />
            </FormControl>
            <Button w="full" my="2" onClick={RegisterUser} >
              Signup
            </Button>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup variant='solid' spacing='12' alignItems="center" >
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
