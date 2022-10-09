import React from "react";
import AnimatedPage from "../animations/AnimatedPage";
import HoverLinks from "./HoverLinks";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { Flex } from "@chakra-ui/react";

function ContactLogos({ logoSize, flexDir, justifyContent, color }) {
  return (
    <AnimatedPage>
      <Flex
        flexDir={flexDir}
        justifyContent={justifyContent}
        gap="2em"
        py="1em"
        opacity="0.8"
      >
        <HoverLinks
          logo={<AiFillLinkedin size={logoSize + 3} color={color} />}
          linkTo="https://www.linkedin.com/in/kevin-lundberg-991862137"
        />
        <HoverLinks
          logo={<AiFillGithub size={logoSize} color={color} />}
          linkTo="https://github.com/kevlio"
        />

        <HoverLinks
          logo={<MdOutlineAlternateEmail size={logoSize} color={color} />}
          linkTo="mailto:kevin.lundberg.se@gmail.com"
        />
      </Flex>
    </AnimatedPage>
  );
}

export default ContactLogos;
