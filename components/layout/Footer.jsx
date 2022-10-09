import React, { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";

import SmallDownloadButton from "../elements/SmallDownloadButton";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Center,
  Avatar,
} from "@chakra-ui/react";

const Logo = () => {
  return (
    <Center>
      <Link to="/">
        <Avatar src="/kevliofire.png" alt="kevlio" size="2xl" />
      </Link>
    </Center>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

function Footer() {
  const { setComponent } = useContext(ComponentContext);
  return (
    <Box bgColor="rgba(0, 0, 0, 0.3)" color="white" pointerEvents="auto">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          spacing={{ base: 6, md: 8 }}
        >
          <Stack justifyContent="flex-end" alignItems="flex-start">
            <Box>
              <Logo color={"gray.700"} />
              <Text fontSize={"sm"} textAlign="center">
                © 2022 kevl.io
              </Text>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>About</ListHeader>
            <Link onClick={() => setComponent("about")}>General</Link>
            <SmallDownloadButton />
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Projects</ListHeader>
            <Link onClick={() => setComponent("projects")}>
              Web Development
            </Link>
            <Link onClick={() => setComponent("projects")}>
              Civil Engineering
            </Link>
            <Link href="https://github.com/kevlio" target="_blank">
              GitHub
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact</ListHeader>
            <Link onClick={() => setComponent("contact")}>Contact Form</Link>
            <Link href="mailto:kevin.lundberg.se@gmail.com" target="_blank">
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/kevin-lundberg-991862137"
              target="_blank"
            >
              LinkedIn
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Footer;
