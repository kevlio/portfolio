import React from "react";

import { Link, Flex } from "@chakra-ui/react";

function hoverLinks({ logo, linkTo }) {
  return (
    <Flex
      alignItems="center"
      _hover={{ transform: "scale(1.2)", transition: "transform 0.2s" }}
      _focus={{ boxShadow: "outline" }}
    >
      <Link href={linkTo} target="_blank">
        {logo}
      </Link>
    </Flex>
  );
}

export default hoverLinks;
