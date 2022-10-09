import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Input,
  Button,
  Box,
  Stack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Fade,
  useDisclosure,
  Textarea,
  Flex,
} from "@chakra-ui/react";

const initialState = {
  email: "",
  name: "",
  number: "",
  message: "",
};

function Form() {
  const formRef = useRef();
  const { isOpen, onToggle } = useDisclosure();
  const [formInput, setFormInput] = useState(initialState);

  const [emailStatus, setEmailStatus] = useState("");

  useEffect(() => {
    if (isOpen) {
      setInterval(() => {
        onToggle();
      }, 5000);
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    setFormInput(initialState);

    emailjs
      .sendForm(
        "service_fflvt9b",
        "template_ozka5eb",
        formRef.current,
        "GbKrKVOESmXfIWUkg"
      )
      .then(
        (result) => {
          console.log(result.text);
          onToggle();
          setEmailStatus(
            "Thank you for message! I will get back to you shortly."
          );
        },
        (error) => {
          console.log(error.text);
          onToggle();
          setEmailStatus(
            "Email service error. Please contact me at kevin.lundberg.se@gmail.com. Thank you."
          );
        }
      );
  }

  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormInput((prevState) => ({ ...prevState, [inputName]: inputValue }));
  }

  return (
    <Flex flexDir="column">
      <Box>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "3rem" }}
          lineHeight={"130%"}
          color={"var(--chakra-colors-gray-300)"}
          padding="3"
        >
          {"Let's get in contact."} <br />
          <Text as={"span"} color={"green"}>
            {"I'll get back to you soon."}
          </Text>
        </Heading>
      </Box>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSubmit(e);
        }}
      >
        <FormControl isRequired color="blue">
          <Stack>
            <FormLabel as="legend" pl="0.5em" width="max-content">
              Name
            </FormLabel>
            <Input
              isRequired
              type="text"
              value={formInput.name}
              name="name"
              onChange={handleChange}
              color="gray.200"
              backdropFilter="auto"
              backdropBlur="2px"
            ></Input>
            <FormLabel as="legend" pl="0.5em">
              Email
            </FormLabel>
            <Input
              isRequired
              type="text"
              value={formInput.email}
              name="email"
              onChange={handleChange}
              color="gray.200"
              backdropFilter="auto"
              backdropBlur="2px"
            ></Input>
            <FormLabel as="label" pl="0.5em">
              Message
            </FormLabel>
            <Textarea
              isRequired
              type="text"
              value={formInput.message}
              name="message"
              onChange={handleChange}
              color="gray.200"
              backdropFilter="auto"
              backdropBlur="2px"
            ></Textarea>
            <Button type="submit" bgColor="green" color="black" size="md">
              Send Message
            </Button>
            <Fade in={isOpen}>
              <Text
                maxW="350px"
                overflowWrap="break-word"
                textAlign="center"
                rounded="md"
                shadow="md"
              >
                {emailStatus}
              </Text>
            </Fade>
          </Stack>
        </FormControl>
      </form>
    </Flex>
  );
}

export default Form;
