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

const routes = [
  {
    key: 0,
    name: "Home",
    path: "/",
  },
  {
    key: 1,
    name: "Search Recipes",
    path: "/",
  },
  {
    key: 2,
    name: "Submit Recipe",
    path: "/",
  },
  {
    key: 3,
    name: "Kitchen Tips",
    path: "/",
  },
  {
    key: 5,
    name: "Account",
    path: "/",
  },
]

export function HamburgerMenu() {
  return (
    <Menu>
      <MenuButton as={Button}>
        <HamburgerIcon></HamburgerIcon>
      </MenuButton>
      <Portal>
        <MenuList>
          {routes.map((route) => (
            <MenuItem key={route.id} as={ReactRouterLink} to={route.path}>
              {route.name}
            </MenuItem>
          ))}
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

        <Show below="md">
          <HamburgerMenu></HamburgerMenu>
        </Show>
        <Hide below="md">
          <Breadcrumb p="1em">
            {routes.map((route) => (
              <BreadcrumbItem key={route.id}>
                <BreadcrumbLink as={ReactRouterLink} to={route.path}>
                  {route.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </Hide>
      </Flex>
    </>
  )
}
