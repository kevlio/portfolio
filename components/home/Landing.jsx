import React from "react";

import Profile from "./Profile";

import AnimatedPage from "../animations/AnimatedPage";
import AnimatedHeader from "../animations/AnimatedHeader";
import ChangeTextOnce from "../animations/ChangeTextOnce";
import LocalNavLogos from "../elements/LocalNavLogos";

import { isMobile } from "react-device-detect";
import { Box, Stack, Flex } from "@chakra-ui/react";

function Landing() {
  return (
    <AnimatedPage>
      <Stack
        alignItems="center"
        as={Box}
        textAlign={"left"}
        spacing={{ base: 1, md: 2 }}
        pointerEvents="auto"
        justifyContent="space-between"
        borderRadius="6px"
        minW={{ base: "340px", sm: "400px", md: "580px", lg: "700px" }}
      >
        <Flex flexDir="column">
          <AnimatedHeader text="Hi, I'm Kevin." color="pink" base="3rem" />
          <ChangeTextOnce front="kevlio." one="civ. eng." two="web dev." />
          <Profile />
          {isMobile && (
            <LocalNavLogos
              logoSize={40}
              flexDir="row"
              justifyContent="space-around"
              color="#ff006b"
            />
          )}
        </Flex>
      </Stack>
    </AnimatedPage>
  );
}

export default Landing;
