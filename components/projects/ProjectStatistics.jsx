import React, { useState, useEffect } from "react";
import RepoButton from "../elements/RepoButton";
import { AiFillGithub } from "react-icons/ai";
import { Flex } from "@chakra-ui/react";

function ProjectStatistics({ repos, topic }) {
  const [counter, setCounter] = useState({
    repo: 0,
  });

  function repoCounter() {
    setCounter((prevValue) => ({ ...prevValue, repo: repos.length }));
  }
  
  useEffect(() => {
    repoCounter();
  }, [repos]);

  return (
    <Flex flexDir="column">
      <RepoButton
        icon={<AiFillGithub size={30} />}
        linkTo="https://github.com/kevlio?tab=repositories"
        title={topic}
        count={counter.repo}
        buttonSize="sm"
        type="link"
      />
    </Flex>
  );
}

export default ProjectStatistics;
