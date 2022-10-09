import React, { useContext } from "react";
import AnimatedPage from "../animations/AnimatedPage";

import { ComponentContext } from "../../context/ComponentContext";

import LocalNavLogo from "./LocalNavLogo";

import { CgProfile } from "react-icons/cg";
import { SiHey } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";

import { Flex } from "@chakra-ui/react";

function LocalNavLogos({ logoSize, flexDir, justifyContent, color }) {
  const { setComponent } = useContext(ComponentContext);
  // map array.lenght setComp[222..]
  return (
    <AnimatedPage>
      <Flex
        flexDir={flexDir}
        justifyContent={justifyContent}
        gap="2em"
        py="1em"
        opacity="0.8"
      >
        <LocalNavLogo
          logo={
            <CgProfile
              size={logoSize + 3}
              color={color}
              onClick={() => setComponent("about")}
            />
          }
        />
        <LocalNavLogo
          logo={
            <BsCodeSlash
              size={logoSize}
              color={color}
              onClick={() => setComponent("projects")}
            />
          }
        />
        <LocalNavLogo
          logo={
            <SiHey
              size={logoSize}
              color={color}
              onClick={() => setComponent("contact")}
            />
          }
        />
      </Flex>
    </AnimatedPage>
  );
}

export default LocalNavLogos;
