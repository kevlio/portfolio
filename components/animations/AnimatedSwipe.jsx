import React from "react";

import { ChakraBox } from "./ChakraBox";
import { MdSwipe } from "react-icons/md";

import { Flex } from "@chakra-ui/react";

import { isMobile } from "react-device-detect";

function AnimatedSwipe({ delay, duration, color }) {
  return (
    <Flex alignSelf="center">
      {isMobile && (
        <ChakraBox
          backdropFilter="auto"
          backdropBlur="2px"
          padding="1em"
          color={color}
          animate={{
            opacity: [0, 1, 1, 1, 0],
            scale: [1, 1, 1.1, 1, 1],
            rotate: [0, -25, 0, 25, 0],
            color: ["20%", "20%", "50%", "50%", "0%"],
          }}
          transition={{
            delay: delay,
            duration: duration,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        >
          <MdSwipe size={30} />
        </ChakraBox>
      )}
    </Flex>
  );
}

export default AnimatedSwipe;
