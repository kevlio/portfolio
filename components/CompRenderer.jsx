import React, { useEffect, useState, useCallback, useContext } from "react";

import { ComponentContext } from "../context/ComponentContext";
import { BackgroundContext } from "../context/BackgroundContext";

import Landing from "./home/Landing";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

import { Flex } from "@chakra-ui/react";

function CompRenderer() {
  const { darkMode } = useContext(BackgroundContext);
  const { component, setComponent } = useContext(ComponentContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [component]);

  const [nextComponent, setNextComponent] = useState("home");

  const renderContent = useCallback(() => {
    switch (component) {
      case "home":
        return <Landing />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Landing />;
    }
  }, [component]);

  return (
    <Flex
      flexDir="column"
      minH="100vh"
      alignSelf="center"
      pointerEvents="none"
      py="1em"
    >
      {renderContent()}
    </Flex>
  );
}

export default CompRenderer;
