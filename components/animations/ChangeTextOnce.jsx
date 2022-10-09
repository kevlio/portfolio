import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Text, Box, Flex } from "@chakra-ui/react";
import AnimatedTextWord from "./AnimatedHeader";

function ChangeTextOnce({ front, one, two }) {
  const [current, setCurrent] = useState(one);

  useEffect(() => {
    setInterval(() => {
      setCurrent(two);
    }, 2000);
  }, []);

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 4,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
      },
    },
  };

  return (
    <Flex
      // minW="max-content"
      // Better

      flexDir="row"
      fontSize={{ base: "2.5rem", sm: "4rem", md: "4.7rem", lg: "5.5rem" }}
      fontWeight={600}
      lineHeight={"110%"}
      color="var(--chakra-colors-gray-300)"
    >
      <AnimatedTextWord text={front} base="2.5rem" />
      <Box
        minW="max-content"
        as={motion.span}
        key={current}
        variants={child}
        initial="hidden"
        animate="visible"
        color={current === "civ. eng." ? "gray.300" : "pink"}
      >
        {current}
      </Box>
    </Flex>
  );
}

export default ChangeTextOnce;
