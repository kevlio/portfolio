import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Text, Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";

import { personalInterests } from "../content/about";

function ChangeTextLoop() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    function changeText() {
      if (personalInterests.length >= current ? true : false) {
        setCurrent((prevValue) =>
          prevValue === personalInterests.length - 1 ? 0 : prevValue + 1
        );
      }
    }
    const intervalId = setInterval(changeText, 2000);
    return () => clearInterval(intervalId);
  }, [current]);

  const child = {
    initial: {
      opacity: 0,
      transition: { duration: 0.02 },
    },
    animate: {
      opacity: 1,
      transition: { duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.02 },
    },
  };

  return (
    <Flex
      flexDir="row"
      gap={2}
      fontSize={{ base: "1xl", sm: "2xl", md: "2xl" }}
      pl="0.5em"
      // py="0.5em"
      backdropFilter="auto"
      backdropBlur="2px"
    >
      <Text color="gray.200">{"interests: "}</Text>
      <AnimatePresence mode="wait">
        <Box
          as={motion.span}
          key={current}
          variants={child}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Text color="green" fontWeight={500}>
            {personalInterests[current]}
          </Text>
        </Box>
      </AnimatePresence>
    </Flex>
  );
}

export default ChangeTextLoop;
