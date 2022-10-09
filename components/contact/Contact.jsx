import React from "react";
import Form from "./Form";
import ContactLogos from "../elements/ContactLogos";
import { Flex, Center } from "@chakra-ui/react";

function Contact() {
  return (
    <Center
      color="white"
      alignItems="flex-start"
      justifyContent="center"
      zIndex="1000"
      pointerEvents="auto"
    >
      <Flex flexDir="column" alignItems="center">
        <Form />
        <ContactLogos
          logoSize={45}
          justifyContent="space-between"
          color="blue"
        />
      </Flex>
    </Center>
  );
}

export default Contact;
