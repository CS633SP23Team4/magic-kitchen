import App from "../components/App"
import { Logo } from "../components/Logo"
import Layout from "../components/Layout"
import { Flex, Heading, Stack, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout>
      <Flex flexDir="column" align="center">
        <Stack py={6} direction="row" alignItems="center" justifyContent="center">
          <Logo />
          <Heading size="4xl" fontFamily="Aladin">
            Magic Kitchen
          </Heading>
        </Stack>

        <Heading size="sm">Just enter your ingredients and let the magic happen.</Heading>
      </Flex>
    </Layout>
  )
}
