import React, { useEffect, useContext, useState } from "react";
import { ComponentContext } from "../../context/ComponentContext";
import { ColorContext } from "../../context/ColorContext";

import { MdOutlineControlCamera } from "react-icons/md";

import { Flex } from "@chakra-ui/react";

function OrbitButton({ setEnableBg }) {
  const { component } = useContext(ComponentContext);
  const { themeCSS } = useContext(ColorContext);

  const [color, setColor] = useState("");

  function allowOrbit() {
    setEnableBg(true);
  }

  useEffect(() => {
    if (component === "home") setColor(themeCSS.colors.pink);
    if (component === "about") setColor(themeCSS.colors.purple);
    if (component === "projects") setColor(themeCSS.colors.blue);
    if (component === "contact") setColor(themeCSS.colors.green);
  }, [component]);

  return (
    <Flex
      onClick={allowOrbit}
      width="90px"
      height="90px"
      alignItems="center"
      justifyContent="center"
      bg="rgba(0, 0, 0, 0.1)"
      backdropFilter="auto"
      backdropBlur="6px"
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      border={`1px solid  ${color}`}
      px="8px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      _hover={{
        bg: "black",
        borderColor: { color },
        boxShadow: `0 0 1em 0.5em ${color}`,
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
      padding="0.4em"
      borderRadius="50%"
      boxShadow={`inset 0 0 0.5em 0 ${color}, 0em 0em 6em 0.1em ${color}`}
    >
      <MdOutlineControlCamera size={70} color={color} rotate="90" />
    </Flex>
  );
}

export default OrbitButton;
