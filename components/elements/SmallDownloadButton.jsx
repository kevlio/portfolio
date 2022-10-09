import React, { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";

import { downloadCV } from "../../utils/downloadCV";
import { AiOutlineCloudDownload } from "react-icons/ai";

import { Link, Flex } from "@chakra-ui/react";

function SmallDownloadButton() {
  const { setComponent } = useContext(ComponentContext);
  return (
    <Flex
      alignItems="center"
      gap={2}
      onClick={() => {
        setComponent("about");
        downloadCV();
      }}
      _hover={{
        borderColor: "black",
        boxShadow: "0 0 0.8em 0.4em white",
        bg: "white",
        color: "black",
        fontWeight: "bold",
      }}
      _active={{
        transform: "scale(0.98)",
        borderColor: "white",
      }}
      borderRadius="6px"
    >
      <Link bg="none">CV</Link>
      <AiOutlineCloudDownload
        border="1px solid white"
        size={25}
        color="#ff006b"
      />
    </Flex>
  );
}

export default SmallDownloadButton;
