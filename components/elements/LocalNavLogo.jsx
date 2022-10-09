import React from "react";
import { Flex} from "@chakra-ui/react";

function LocalNavLogo({ onClick, logo, color }) {
  return (
    <Flex
      alignItems="center"
      borderRadius="50%"
      padding="0.5em"
      boxShadow={`0em 0em 6em 0.1em ${color}`}
      _hover={{
        color: "white",
        borderColor: "black",
        boxShadow: `0 0 1em 0.5em #6b46c1`,
        transform: "scale(1.05)",
        transition: "transform 0.2s",
      }}
      _foc
      onClick={onClick}
    >
      {logo}
    </Flex>
  );
}

export default LocalNavLogo;
