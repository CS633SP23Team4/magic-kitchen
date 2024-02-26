import { useState } from "react"
import { useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import { Box, Button, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react"
import { resetPassword } from "../firebaseInit"
import Layout from "../components/Layout"
import ProfileForm from "../components/form/ProfileForm"
import { FormWrapper } from "../components/form/FormWrapper"
import { CreateNewRecipeForm } from "../components/form/RecipeWrapper"

UpdateView.propTypes = {
  value: PropTypes.string,
  user: PropTypes.string,
}

function UpdateView(props) {
  const [message, setMessage] = useState("")

  const resetMyPass = async (user) => {
    const response = await resetPassword(user)
    setMessage(response)
  }
  switch (props.value) {
    case "password":
      return (
        <>
          <Flex
            bg="white"
            flexDir="column"
            align="center"
            justify="center"
            boxShadow="md"
            p={4}
            m={4}
          >
            <Text color={"green"}>{message}</Text>
            <Text>Send Email to Reset Password</Text>
            <Button onClick={() => resetMyPass(props.user)}>Reset</Button>
          </Flex>
        </>
      )
    case "preferences":
      return (
        <FormWrapper>
          <Text>IDK WHAT GOES HERE</Text>
        </FormWrapper>
      )
    case "create":
      return <CreateNewRecipeForm />
    default:
      return (
        <FormWrapper header="Personal Information">
          <ProfileForm user={props.user} />
        </FormWrapper>
      )
  }
}

export default function Account() {
  const [currentView, setCurrentView] = useState("personal")
  const data = useLocation()
  const user = data.state.user

  return (
    <Layout>
      <Grid pt="12" m={0} templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Stack bg="white" p={8} borderWidth="1px" borderRadius="lg" shadow="md">
            <Flex alignItems="center" my={2}>
              <Box w="12px" h="12px" bg="coral" m={2} />
              <Button variant="link" onClick={() => setCurrentView("personal")}>
                Personal Info
              </Button>
            </Flex>
            <Flex alignItems="center" my={2}>
              <Box w="12px" h="12px" bg="deeppink" m={2} />
              <Button variant="link" onClick={() => setCurrentView("create")}>
                Submit a Recipe
              </Button>
            </Flex>
            <Flex alignItems="center" my={2}>
              <Box w="12px" h="12px" bg="darkcyan" m={2} />
              <Button variant="link" onClick={() => setCurrentView("password")}>
                Change Password
              </Button>
            </Flex>
          </Stack>
        </GridItem>
        {/*BELOW GRID ITEM CHANGE VIEW BASED ON ABOVE CLICKED ELEMENT*/}
        <GridItem colSpan={3}>{<UpdateView value={currentView} user={user} />}</GridItem>
      </Grid>
    </Layout>
  )
}
