import React from "react";

import { MdOutlineLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { Flex, IconButton } from "@chakra-ui/react";

function ColorModeButton({ icon, onClick }) {
  return (
    <Flex>
      <IconButton
        _active={{
          transform: "scale(0.98)",
          borderColor: "white",
        }}
        _hover={{
          bg: "black",
          borderColor: "black",
          boxShadow: "0 0 1em 0.5em purple",
        }}
        onClick={onClick}
        bg="black"
        border="1px solid white"
        icon={icon}
      ></IconButton>
    </Flex>
  );
}

export default ColorModeButton;
