import React, { useState, useContext } from "react";

import { BackgroundContext } from "../../context/BackgroundContext";
import { ComponentContext } from "../../context/ComponentContext";

import ColorModeButton from "../elements/ColorModeButton";

import {
  AiOutlineMenu as MenuIcon,
  AiOutlineClose as CloseIcon,
} from "react-icons/ai";

import { MdOutlineLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiMoonOrbit } from "react-icons/gi";

import { Stack, Box, Link, Flex } from "@chakra-ui/react";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(BackgroundContext);
  const { component, setComponent } = useContext(ComponentContext);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Flex
      // flexDir="column"
      // position="sticky"
      onMouseLeave={() => {
        if (menuIsOpen) {
          toggleMenu();
        }
      }}
      zIndex="10000"
      pointerEvents="auto"
      as="nav"
      align="center"
      justify={{ base: "space-between", md: "center" }}
      wrap="wrap"
      w="100%"
      pt={8}
      pb={6}
      px={8}
      bg="transparent"
      color="gray.200"
      flexDir={{ base: "column", md: "row-reverse" }}
    >
      {/* MenuToggle */}
      <Flex
        flexDir="row"
        justifyContent="space-between"
        width={{ base: "100%", md: "auto" }}
      >
        <Box
          display={{ base: "block", md: "none" }}
          color="white"
          onClick={() => toggleMenu()}
        >
          {menuIsOpen ? <CloseIcon size={40} /> : <MenuIcon size={40} />}
        </Box>
        {/* {menuIsOpen && ( */}
        <Flex px={{ md: "1em" }}>
          {darkMode ? (
            <ColorModeButton
              onClick={() => setDarkMode(false)}
              icon={<BsFillMoonStarsFill size={25} />}
            />
          ) : (
            <ColorModeButton
              onClick={() => setDarkMode(true)}
              icon={<GiMoonOrbit size={30} />}
            />
          )}
        </Flex>
        {/* )} */}
      </Flex>
      {/* Menu-items */}
      <Box
        height={menuIsOpen && "100vh"}
        position={menuIsOpen && "absolute"}
        left={menuIsOpen && "0"}
        width={menuIsOpen && "50%"}
        bgColor={menuIsOpen && "black"}
        paddingLeft={menuIsOpen && "2em"}
        top="100px"
        display={{ base: menuIsOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "50%", md: "auto" }}
        color="white"
        alignSelf="flex-start"
        alignItems="flex-start"
      >
        <Stack
          spacing={8}
          align="flex-start"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          fontSize={{ base: "1.3rem", lg: "1.4rem" }}
        >
          <Link
            fontWeight={component === "home" && "bold"}
            color={component === "home" && "pink"}
            onClick={() => {
              setComponent("home");
              // if (menuIsOpen) {
              //   toggleMenu();
              // }
            }}
          >
            home
          </Link>
          <Link
            fontWeight={component === "about" && "bold"}
            color={component === "about" && "purple"}
            onClick={() => {
              setComponent("about");
              // if (menuIsOpen) {
              //   toggleMenu();
              // }
            }}
          >
            about
          </Link>
          <Link
            fontWeight={component === "projects" && "bold"}
            color={component === "projects" && "blue"}
            onClick={() => {
              setComponent("projects");
              // if (menuIsOpen) {
              //   toggleMenu();
              // }
            }}
          >
            projects
          </Link>
          <Link
            fontWeight={component === "contact" && "bold"}
            color={component === "contact" && "green"}
            onClick={() => {
              setComponent("contact");
              // if (menuIsOpen) {
              //   toggleMenu();
              // }
            }}
          >
            contact
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
