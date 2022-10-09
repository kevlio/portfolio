import Head from "next/head";

import Header from "../components/layout/Header";
import CompRenderer from "../components/CompRenderer";
import Footer from "../components/layout/Footer";

import { Center, Flex } from "@chakra-ui/react";

export default function Main() {
  return (
    <Center
      color="white"
      minH="100vh"
      alignItems="flex-start"
      style={{ fontFamily: "Poppins" }}
    >
      <Head>
        <title>kevl.io</title>
        <meta name="description" content="Kevlio portfolio" />
        <link rel="icon" href="/kevliofire.png" />
      </Head>
      <Flex
        minHeight="100vh"
        width="100vw"
        flexDir="column"
        zIndex="1000"
        pointerEvents="none"
      >
        <Header />
        <CompRenderer />
        <Footer />
      </Flex>
    </Center>
  );
}
