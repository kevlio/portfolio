import React, { useContext, useEffect, useState } from "react";
import { BackgroundContext } from "../../context/BackgroundContext";

// import useLongPress from "../hooks/UseLongPress";

import Planets from "/components/planets/Planets";
import OrbitButton from "../elements/OrbitButton";

import { Box } from "@chakra-ui/react";

import FPSLimiter from "../planets/FPSLimiter";

function Background({ enableBg, setEnableBg }) {
  const { darkMode } = useContext(BackgroundContext);

  return (
    <Box
      backgroundColor="black"
      m="0 auto"
      width="100%"
      height="100%"
      minH="100vh"
      position="absolute"
      top="0"
      left="0"
      pointerEvents={enableBg ? "auto" : "none"}
    >
      {darkMode && <Planets setEnableBg={setEnableBg} />}
      {darkMode && !enableBg && (
        <Box
          pointerEvents="auto"
          position="absolute"
          top={{ base: "44%", sm: "56%", md: "62%", lg: "68%" }}
          left="50%"
          transform={{
            base: "translate(-44%, -44%)",
            sm: "translate(-56%, -56%)",
            md: "translate(-62%, -62%)",
            lg: "translate(-68%, -68%)",
          }}
        >
          <OrbitButton setEnableBg={setEnableBg} />
        </Box>
      )}
    </Box>
  );
}

export default Background;
