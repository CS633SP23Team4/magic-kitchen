import PropTypes from "prop-types"
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
import { NavLink as ReactRouterLink } from "react-router-dom"
import React, { useState } from "react"
import { MkIcon } from "./Logo"
import { SignupModal } from "./SignupModal"
import { SignOutButton } from "./SignOutButton"

const routes_isLoggedIn = [
  {
    key: 0,
    name: "Home",
    path: "/",
  },
  {
    key: 1,
    name: "Search Recipes",
    path: "/search",
  },
  {
    key: 2,
    name: "Submit Recipe",
    path: "/new-recipe",
  },
  {
    key: 3,
    name: "Kitchen Tips",
    path: "/tips",
  },
  {
    key: 5,
    name: "Account",
    path: "/account",
  },
]

const routes_notLoggedIn = [
  {
    key: 0,
    name: "Home",
    path: "/",
  },
  {
    key: 1,
    name: "Search Recipes",
    path: "/search",
  },
  {
    key: 2,
    name: "Kitchen Tips",
    path: "/tips",
  },
]

HamburgerMenu.propTypes = {
  user: PropTypes.string,
  userData: PropTypes.any,
}

export function HamburgerMenu(props) {
  if (props.user) {
    return (
      <Menu>
        <MenuButton as={Button}>
          <HamburgerIcon></HamburgerIcon>
        </MenuButton>
        <Portal>
          <MenuList>
            {routes_isLoggedIn.map((route) => (
              <MenuItem
                key={route.key}
                as={ReactRouterLink}
                to={route.path}
                state={{
                  user: props.user,
                  userData: props.userData,
                }}
                _activeLink={{ fontWeight: "bold", borderBottom: "2px" }}
              >
                {route.name}
              </MenuItem>
            ))}
          </MenuList>
        </Portal>
      </Menu>
    )
  }
  return (
    <Menu>
      <MenuButton as={Button}>
        <HamburgerIcon></HamburgerIcon>
      </MenuButton>
      <Portal>
        <MenuList>
          {routes_notLoggedIn.map((route) => (
            <MenuItem
              key={route.key}
              as={ReactRouterLink}
              to={route.path}
              _activeLink={{ fontWeight: "bold", borderBottom: "2px" }}
            >
              {route.name}
            </MenuItem>
          ))}
        </MenuList>
      </Portal>
    </Menu>
  )
}

export default function Navbar() {
  const [user, setUser] = useState(localStorage.getItem("userId"))
  const [userData, setUserData] = useState(localStorage.getItem("userData"))

  const setUserFunc = (user, data) => {
    setUser(user)
    setUserData(data)
  }
  if (user) {
    return (
      <>
        <Flex
          bgColor="brand.prussianBlue"
          color="white"
          fontSize="lg"
          p="1em"
          align="center"
          justify="space-between"
        >
          <Box display="flex" alignItems="center">
            <Hide below="sm">
              <MkIcon size="12" radius="0" />
            </Hide>
            <Hide below="md">
              <Text p="1em">Magic Kitchen</Text>
            </Hide>
          </Box>

          <Hide below="md">
            <Breadcrumb p="1em">
              {routes_isLoggedIn.map((route) => (
                <BreadcrumbItem key={route.key}>
                  <BreadcrumbLink
                    as={ReactRouterLink}
                    to={route.path}
                    state={{
                      user: user,
                      userData: userData,
                    }}
                    _activeLink={{ fontWeight: "bold", borderBottom: "2px" }}
                  >
                    <Text>{route.name}</Text>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          </Hide>

          <Box>
            <SignOutButton />
          </Box>

          <Show below="md">
            <HamburgerMenu user={user} userData={userData} />
          </Show>
        </Flex>
      </>
    )
  }

  return (
    <>
      <Flex
        bgColor="brand.prussianBlue"
        color="white"
        fontSize="lg"
        p="1em"
        align="center"
        justify="space-between"
      >
        <Box display="flex" alignItems="center">
          <Hide below="sm">
            <MkIcon size="12" radius="0" />
          </Hide>
          <Hide below="md">
            <Text p="1em">Magic Kitchen</Text>
          </Hide>
        </Box>

        <Hide below="md">
          <Breadcrumb p="1em">
            {routes_notLoggedIn.map((route) => (
              <BreadcrumbItem key={route.key}>
                <BreadcrumbLink
                  as={ReactRouterLink}
                  to={route.path}
                  _activeLink={{ fontWeight: "bold", borderBottom: "2px" }}
                >
                  <Text>{route.name}</Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </Hide>

        <Box>
          <SignupModal setUserFunc={setUserFunc} />
        </Box>

        <Show below="md">
          <HamburgerMenu />
        </Show>
      </Flex>
    </>
  )
}
