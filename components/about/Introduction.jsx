import React from "react";

import AnimatedSwipe from "../animations/AnimatedSwipe";
import DynamicText from "../animations/DynamicText";
import DownloadButton from "../animations/DownloadButton";

import { Text, Flex } from "@chakra-ui/react";

function Introduction() {
  return (
    <Flex
      flexDir="column"
      gap="0.5em"
      p={{ base: "0.2em" }}
      px={{ md: "3em" }}
      backdropFilter="auto"
      backdropBlur="2px"
      alignItems="center"
    >
      <Flex flexDir="row" gap="1em" alignItems="center">
        <Text fontSize={{ base: "3xl", md: "4xl" }} color="gray.200">
          About Kevin
        </Text>
        <DownloadButton />
      </Flex>
      <Flex flexDir="column" gap={1} justifyContent="space-between">
        <DynamicText
          color="pink"
          base="1.2rem"
          sm="1.25rem"
          md="1.6rem"
          lg="2rem"
          sentence="Curious of new ways to create"
          interval={1000}
        />
        <DynamicText
          color="pink"
          base="1.2rem"
          sm="1.25rem"
          md="1.6rem"
          lg="2rem"
          sentence="value through Technology."
          interval={1000}
        />
        <DynamicText
          color="pink"
          base="1.2rem"
          sm="1.25rem"
          md="1.6rem"
          lg="2rem"
          sentence="Background in Civil Engineering,"
          interval={2000}
        />
        <DynamicText
          color="pink"
          base="1.2rem"
          sm="1.25rem"
          md="1.6rem"
          lg="2rem"
          sentence="by and large as a Project"
          interval={2500}
        />
        <DynamicText
          color="pink"
          base="1.2rem"
          sm="1.25rem"
          md="1rem"
          lg="2rem"
          sentence="Management Consultant."
          interval={3000}
        />
      </Flex>
      <AnimatedSwipe delay={5} duration={3} color="purple" />
    </Flex>
  );
}

export default Introduction;
