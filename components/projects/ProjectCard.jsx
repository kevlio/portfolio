import React from "react";
import AnimatedSwipe from "../animations/AnimatedSwipe";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify, SiHeroku } from "react-icons/si";
import { Heading, Text, Link, Flex, SimpleGrid, Img } from "@chakra-ui/react";

function ProjectCard({
  key,
  name,
  description,
  topics,
  homepage,
  date,
  gh_url,
  img,
  topic,
}) {
  return (
    <Flex
      key={key}
      flexDir="column"
      w={"full"}
      rounded={"md"}
      p={2}
      justifyContent="space-between"
    >
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        minH={{ base: "320px" }}
      >
        <Text
          color="green"
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={{ base: "sm", md: "md" }}
          letterSpacing={1.1}
          textAlign="right"
        >
          {topic}
        </Text>
        <Heading
          color="white"
          fontSize={{ base: "1.1rem", md: "3xl" }}
          fontFamily={"body"}
          textAlign="center"
          pb="0.2em"
        >
          {name.toLowerCase()}
        </Heading>
        <Img
          src={img}
          onError={(e) => {
            e.target.src = "/repo.png";
          }}
        />
        <SimpleGrid
          gridTemplateColumns="max-content max-content max-content max-content"
          justifyContent="center"
          gap={2}
        >
          {topics.map((topic) => (
            <Text
              key={topic}
              color={"blue"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={{ base: "0.8rem", md: "1.2rem" }}
              letterSpacing={{ base: 0.8, sm: 1 }}
              px={{ md: "1em" }}
            >
              {topic}
            </Text>
          ))}
        </SimpleGrid>
        <Text
          color={"gray.500"}
          textAlign="center"
          wordBreak="break-word"
          fontSize={{ base: "1rem", md: "1.2rem" }}
        >
          {description}
        </Text>
      </Flex>
      <Flex
        flexDir="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        gap={2}
      >
        <AnimatedSwipe delay={2} duration={2.5} color="blue" />
        <Flex flexDir="column">
          <Flex
            flexDir="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={1}
          >
            {homepage && (
              <Link href={homepage} target="_blank">
                {homepage.includes("netlify") ? (
                  <SiNetlify size={40} color="white" />
                ) : (
                  <SiHeroku size={35} color="white" />
                )}
              </Link>
            )}
            <Link href={gh_url} alignSelf="flex-end">
              <AiFillGithub size={40} color="white" />
            </Link>
          </Flex>
          <Text
            fontWeight="400"
            fontSize={{ base: "sm", md: "md" }}
            color="blue"
            alignSelf="flex-end"
            pt="0.5em"
          >
            {date.slice(0, 10)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProjectCard;
