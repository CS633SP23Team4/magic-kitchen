import { BreadcrumbItem, Breadcrumb, BreadcrumbLink, Flex, Hide } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"
import Logo from "./Logo"

export default function Navbar() {
  return (
    <>
      <Flex
        bgColor="brand.900"
        color="white"
        fontSize="lg"
        p="1em"
        align="center"
        justify="space-between"
      >
        <Hide below="sm">
          <Logo size="120" radius="0" />
        </Hide>
        <Breadcrumb p="1em">
          <BreadcrumbItem>
            <BreadcrumbLink as={ReactRouterLink} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={ReactRouterLink} to="/">
              Search for Recipes
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={ReactRouterLink} to="/">
              Kitchen Tips
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </>
  )
}
