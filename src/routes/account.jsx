import { useState } from "react"
import PropTypes from "prop-types"
import { Box, Button, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react"
import Layout from "../components/Layout"
import ProfileForm from "../components/form/ProfileForm"
import { FormWrapper } from "../components/form/FormWrapper"

UpdateView.propTypes = {
  value: PropTypes.string,
}

function UpdateView(props) {
  switch (props.value) {
    case "password":
      return (
        <>
          <Text>FIREAUTH STUFF</Text>
        </>
      )
    case "preferences":
      return (
        <FormWrapper>
          <Text>IDK WHAT GOES HERE</Text>
        </FormWrapper>
      )
    default:
      return (
        <FormWrapper header="Personal Information">
          <ProfileForm />
        </FormWrapper>
      )
  }
}

export default function Account() {
  const [currentView, setCurrentView] = useState("personal")
  return (
    <Layout>
      <Grid pt="12" m={0} templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Stack p={8} borderWidth="1px" borderRadius="lg" shadow="md">
            <Flex alignItems="center" my={2}>
              <Box w="12px" h="12px" bg="coral" m={2} />
              <Button variant="link" onClick={() => setCurrentView("personal")}>
                Personal Info
              </Button>
            </Flex>
            <Flex alignItems="center" my={2}>
              <Box w="12px" h="12px" bg="darkcyan" m={2} />
              <Button variant="link" onClick={() => setCurrentView("password")}>
                Change Password
              </Button>
            </Flex>
            <Flex alignItems="center" my={2}>
              <Box w="12px" h="12px" bg="deeppink" m={2} />
              <Button variant="link" onClick={() => setCurrentView("preferences")}>
                Preferences
              </Button>
            </Flex>
          </Stack>
        </GridItem>
        {/*BELOW GRID ITEM CHANGE VIEW BASED ON ABOVE CLICKED ELEMENT*/}
        <GridItem colSpan={3}>{<UpdateView value={currentView} />}</GridItem>
      </Grid>
    </Layout>
  )
}
