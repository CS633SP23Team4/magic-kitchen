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

import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  logout
} from '../firebaseInit';

export function SignupModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  
  return(
    <>
      <Button onClick={onOpen}>Sign in / Sign Up</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign in / Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="email"
              type="email"
              autoComplete="email"
            />
            </FormControl>
            <FormControl isRequired>
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
            <ButtonGroup variant='solid' spacing='122' alignItems="center">
                <Button colorScheme="blue" onClick={SignIn}>
                  Login with Google
                </Button>
                <Button colorScheme="blue" variant="link" onClick={null}>
                  Register
                </Button>
              </ButtonGroup>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
