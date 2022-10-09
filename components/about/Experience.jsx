import React from "react";
import {
  Text,
  Flex,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  Link,
  Button,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

function Experience({ object, category }) {
  const { isOpen, onToggle, getDisclosureProps, getButtonProps } =
    useDisclosure();

  const disclosureProps = getDisclosureProps();

  return (
    <Flex color="white" flexDir="column" py="0.8em" px={{ md: "3em" }}>
      <Text fontSize={{ base: "2xl", md: "3xl" }} color="gray.200" pb="0.2em">
        {category}
      </Text>
      <List spacing={1} color="green" minHeight="300px" borderRadius="6px">
        {object.map((item) => (
          <ListItem
            key={item.title}
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex
              justifyContent="space-between"
              flexDir="row"
              minW="100%"
              pb="0.2em"
              alignItems="flex-start"
            >
              <Flex alignItems="center" onClick={() => onToggle()}>
                {item.courses && (
                  <ListIcon
                    width={{ base: "25px", sm: "30px" }}
                    height={{ base: "25px", sm: "30px" }}
                    as={isOpen ? ChevronUpIcon : ChevronDownIcon}
                    color="gray.200"
                  />
                )}
                <Text fontSize={{ base: "1rem", md: "1.2rem" }}>
                  {item.title}
                </Text>
              </Flex>
              <Flex flexDir="column" alignItems="flex-end">
                <Link href={item.link} target="_blank">
                  <Button
                    fontWeight={300}
                    size="sm"
                    color="gray.200"
                    bgColor="none"
                    variant="link"
                    fontSize={{ base: "0.9rem", md: "1.2rem" }}
                  >
                    {item.organization}
                  </Button>
                </Link>
                <Text
                  color="blue.400"
                  fontSize={{ base: "0.9rem", md: "1.1rem" }}
                >
                  {item.year}
                </Text>
              </Flex>
            </Flex>
            <Flex />
            <Flex>
              <Flex
                flexDir="column"
                alignSelf="flex-start"
                {...disclosureProps}
                maxH="200px"
                overflowY="scroll"
                css={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  "&::-webkit-scrollbar-track": {
                    display: "none",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    display: "none",
                  },
                }}
              >
                {item.courses &&
                  item.courses.map((item) => (
                    <Flex
                      flexDir="column"
                      borderBottom="0.2px solid white"
                      key={item.course}
                    >
                      <Flex flexDir="row" justifyContent="space-between">
                        <Text color="blue.400">{item.course}</Text>
                        <Text
                          color="green.200"
                          fontWeight="200"
                          fontSize={{ base: "sm", md: "md" }}
                        >
                          {item.grade}
                        </Text>
                      </Flex>
                      <Text
                        color="gray.300"
                        fontSize={{ base: "sm", md: "md", lg: "lg" }}
                      >
                        {item.description}
                      </Text>
                    </Flex>
                  ))}
              </Flex>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}
export default Experience;
