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
import React, { useState, useEffect } from 'react';
import { MkIcon } from "./Logo"
import { SignupModal } from "./SignupModal"
import { SignOutButton } from "./SignOutButton"



const routes = [
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

export function HamburgerMenu() {
  return (
    <Menu>
      <MenuButton as={Button}>
        <HamburgerIcon></HamburgerIcon>
      </MenuButton>
      <Portal>
        <MenuList>
          {routes.map((route) => (
            <MenuItem
              key={route.id}
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
  const [user, setUser] = useState();

  useEffect( () => {
    setUser(null);
    console.log("IN useEffect");
    var loggedInUser = localStorage.getItem('user');
    console.log('loggedInUser = ', loggedInUser);
    if (loggedInUser) {
      setUser(loggedInUser);
    }else {
      setUser(null);
    }
  })
      
  if (user) {
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
            <MkIcon size="12" radius="0" />
          </Hide>
          <Hide below="md">
            <Text p="1em">Magic Kitchen</Text>
          </Hide>
        </Box>

        <Hide below="md">
          <Breadcrumb p="1em">
            {routes.map((route) => (
              <BreadcrumbItem key={route.id}>
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
          <SignOutButton />
        </Box>

        <Show below="md">
          <HamburgerMenu />
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
            {routes.map((route) => (
              <BreadcrumbItem key={route.id}>
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
          <SignupModal />
        </Box>

        <Show below="md">
          <HamburgerMenu />
        </Show>
      </Flex>
    </>
  )
}


