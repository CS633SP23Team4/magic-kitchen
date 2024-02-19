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
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SiGoogle } from "react-icons/si";

import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  logout
} from '../firebaseInit';

export function SignupModal() {
  //const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure()
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conf_password, setConfPassword] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const SignIn = async () => {
    const user = await signInWithGoogle()
    setUser(user.email)
    console.log(user)
    if (user) {
      //{onClose}
      navigate('/');
      window.location.reload();
    }
  }
  
const RegisterUser = async () => {
  null
  //implement user reg here
}

const openSignUpModal = () => {
  onSignUpOpen()
  if (isLoginOpen) {
    onLoginClose()
  }
}

const openLoginModal = () => {
  onLoginOpen()
  if (isSignUpOpen) {
    onSignUpClose()
  }
}

  return(
    <>
      <Button onClick={onLoginOpen}>Sign in/ Sign up</Button>
      <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
            <Button w="full" my="2" >
              Login
            </Button>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup variant='solid' spacing='70px' alignItems="center">
            <Button leftIcon={<SiGoogle />} colorScheme="blue" onClick={RegisterUser}>
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
            <Button w="full" my="2" >
              Signup
            </Button>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup variant='solid' spacing='12' alignItems="center" >
                <Button leftIcon={<SiGoogle />} colorScheme="blue" onClick={RegisterUser}>
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
