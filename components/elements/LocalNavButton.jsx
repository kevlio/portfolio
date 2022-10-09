import React from "react";

import { Button } from "@chakra-ui/react";

function LocalNavButton({ text, onClick }) {
  return (
    <Button
      _active={{
        bg: "black",
      }}
      _hover={{
        bg: "black",
        color: "white",
        borderColor: "black",
        boxShadow: "0 0 1em 0.5em #6b46c1",
      }}
      bg="rgba(0, 0, 0, 0.8)"
      variant="solid"
      boxShadow="0em 0em 6em 0.1em #4D00A3"
      padding="1em"
      fontSize={{ base: "100%", md: "140%" }}
      width="30%"
      color="purple"
      borderRadius="12px"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default LocalNavButton;
