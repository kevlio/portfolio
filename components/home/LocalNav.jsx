import React, { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";
import LocalNavButton from "../elements/LocalNavButton";

import { Flex } from "@chakra-ui/react";

function LocalNav() {
  const { setComponent } = useContext(ComponentContext);

  return (
    <Flex
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      py="1em"
    >
      <LocalNavButton text="About" onClick={() => setComponent("about")} />
      <LocalNavButton
        text="Projects"
        onClick={() => setComponent("projects")}
      />
      <LocalNavButton text="Contact" onClick={() => setComponent("contact")} />
    </Flex>
  );
}

export default LocalNav;
