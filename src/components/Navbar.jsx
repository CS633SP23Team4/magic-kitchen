import {
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  Flex,
  Hide,
  MenuItem,
  Portal,
  Menu,
  MenuList,
  MenuButton,
  Show,
  Button,
  Text,
  Box,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Link as ReactRouterLink } from "react-router-dom"
import Logo from "./Logo"

export function HamburgerMenu() {
  return (
    <Menu>
      <MenuButton as={Button}>
        <HamburgerIcon></HamburgerIcon>
      </MenuButton>
      <Portal>
        <MenuList>
          <MenuItem as={ReactRouterLink} to="/">
            Home
          </MenuItem>
          <MenuItem as={ReactRouterLink} to="/">
            Search for Recipes
          </MenuItem>
          <MenuItem as={ReactRouterLink} to="/">
            Kitchen Tips
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  )
}

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
        <Box display="flex" alignItems="center">
          <Hide below="sm">
            <Logo size="12" radius="0" />
          </Hide>
          <Text p="1em">Magic Kitchen</Text>
        </Box>

        <Show below="sm">
          <HamburgerMenu></HamburgerMenu>
        </Show>
        <Hide below="sm">
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
        </Hide>
      </Flex>
    </>
  )
}
