import React from "react";
import { motion } from "framer-motion";

import { Box, Flex } from "@chakra-ui/react";

const AnimatedParagraph = ({ text, color, base }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.4 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Try
  // justify-content: space-evenly;
  // flex-wrap: wrap;

  return (
    <Flex
      maxW="max-content"
      as={motion.div}
      style={{ overflow: "hidden", display: "flex" }}
      fontSize={{ base: base, sm: "1rem", md: "2rem", lg: "2.2rem" }}
      fontWeight={400}
      lineHeight={"110%"}
      color={color}
      variants={container}
      initial="hidden"
      animate="visible"
      justifyContent="flex-start"
    >
      {words.map((word, index) => (
        <Box
          as={motion.span}
          variants={child}
          style={{ marginRight: "10px" }}
          key={index}
        >
          {word}
        </Box>
      ))}
    </Flex>
  );
};

export default AnimatedParagraph;
