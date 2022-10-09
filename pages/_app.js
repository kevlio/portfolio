import React, { useState } from "react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

import { BackgroundContext } from "../context/BackgroundContext";
import { ComponentContext } from "../context/ComponentContext";
import { ColorContext, themeCSS } from "../context/ColorContext";

import Background from "../components/layout/Background";

function MyApp({ Component, pageProps }) {
  const [enableBg, setEnableBg] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [component, setComponent] = useState("home");

  return (
    <ChakraProvider theme={theme}>
      <ComponentContext.Provider value={{ component, setComponent }}>
        <BackgroundContext.Provider value={{ darkMode, setDarkMode }}>
          <ColorContext.Provider value={{ themeCSS }}>
            <Component {...pageProps} />
            <Background enableBg={enableBg} setEnableBg={setEnableBg} />
          </ColorContext.Provider>
        </BackgroundContext.Provider>
      </ComponentContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
