import Layout from "../components/Layout"
import { Box, Flex, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react"
import ProfileForm from "../components/form/ProfileForm"
import { FormWrapper } from "../components/form/FormWrapper"

export default function Account() {
  return (
    <Layout>
      <Grid pt="12" m={0} templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Stack p={8} borderWidth="1px" borderRadius="lg" shadow="md">
            <Flex alignItems="center" my={2}>
              <Box w="12px" h="12px" bg="coral" m={2} />
              <Text>Personal Info</Text>
            </Flex>
            <Flex alignItems="center" my={2}>
              <Box w="12px" h="12px" bg="darkcyan" m={2} />
              <Text>Change Password</Text>
            </Flex>
            <Flex alignItems="center" my={2}>
              <Box w="12px" h="12px" bg="deeppink" m={2} />
              <Text>Preferences</Text>
            </Flex>
          </Stack>
        </GridItem>

        <GridItem colSpan={3}>
          <FormWrapper header="Personal Information">
            <ProfileForm />
          </FormWrapper>
        </GridItem>
      </Grid>
    </Layout>
  )
}
