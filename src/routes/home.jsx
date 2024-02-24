import { Box, Flex, Heading, Stack } from "@chakra-ui/react"
import { IngredientSearch } from "../components/IngredientSearch"
import Layout from "../components/Layout"
import { Logo } from "../components/Logo"

export default function Home() {
  return (
    <Layout>
      <Flex flexDir="column" align="center" py={6}>
        <Stack py={8} direction="row" alignItems="center" justifyContent="center">
          <Logo />
          <Heading size="4xl" fontFamily="Aladin">
            Magic Kitchen
          </Heading>
        </Stack>

        <Heading size="sm">Just enter your ingredients and let the magic happen.</Heading>
      </Flex>

      <Box py={12}>
        <IngredientSearch />
      </Box>
    </Layout>
  )
}
