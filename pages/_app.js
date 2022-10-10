import React, { useState } from "react";
import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

import { BackgroundProvider } from "../context/BackgroundContext";
import { ComponentProvider } from "../context/ComponentContext";
import { ColorProvider } from "../context/ColorContext";

import Background from "../components/layout/Background";

function MyApp({ Component, pageProps }) {
  const [enableBg, setEnableBg] = useState(false);
  return (
    <ChakraProvider theme={theme}>
      <ComponentProvider>
        <BackgroundProvider>
          <ColorProvider>
            <Component {...pageProps} />
            <Background enableBg={enableBg} setEnableBg={setEnableBg} />
          </ColorProvider>
        </BackgroundProvider>
      </ComponentProvider>
    </ChakraProvider>
  );
}

export default MyApp;
