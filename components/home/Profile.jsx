import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import ChangeTextLoop from "../animations/ChangeTextLoop";

function ElementRender({ objKey, objValue, color }) {
  return (
    <Flex flexDir="row" gap="0.5em" pl="0.5em">
      <Text color="gray.200">{objKey}</Text>
      <Text color={color}>{objValue}</Text>
    </Flex>
  );
}
// eget färgteme

function Profile() {
  const person = {
    pseudoName: `'kevlio',`,
    realName: `'Kevin',`,
    born: `${1993},`,
    studying: true,
    hobbies: `["Philosophy", \u0020 "Programming", \u0020 "Dance",  \u0020 "Martial Arts"],`,
    planet: `'Earth'`,
    //   joke: "2+2=4",
  };
  return (
    <Flex
      flexDir="column"
      p="0.5em 0em 0em 0em"
      backdropFilter="auto"
      backdropBlur="2px"
      fontSize={{ base: "md", sm: "2xl", md: "2xl" }}
    >
      <Flex flexDir="row" gap="0.5em" fontWeight={600}>
        <Text color="blue">const</Text>
        <Text color="purple">person</Text>
        <Text color="red">{"= {"}</Text>
      </Flex>
      <ElementRender
        objKey="pseudoName:"
        objValue={person.pseudoName}
        color="green"
      />
      <ElementRender
        objKey="realName:"
        objValue={person.realName}
        color="green"
      />
      <ElementRender objKey="born:" objValue={person.born} color="purple" />
      <ElementRender objKey="planet:" objValue={person.planet} color="green" />
      <ChangeTextLoop />
      <Text color="red">{"}"}</Text>
    </Flex>
  );
}

export default Profile;
