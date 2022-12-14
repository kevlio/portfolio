import React, { useState, useEffect, useRef } from "react";
import {
  fetchRepos,
  filterRepos,
  availableTopics,
} from "../../utils/fetchRepos";

import { isBrowser } from "react-device-detect";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/bundle";

import ProjectCard from "./ProjectCard";
import ProjectStatistics from "./ProjectStatistics";

import AnimatedPage from "../animations/AnimatedPage";
import { Box, Center, Input, Flex, Select } from "@chakra-ui/react";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [featuredRepos, setFeaturedRepos] = useState([]);
  const [topic, setTopic] = useState("featured");
  const [topics, setTopics] = useState([]);
  // const selectRef = useRef(0);

  useEffect(() => {
    getRepos();
  }, []);

  useEffect(() => {
    const topicSelection = availableTopics(repos);
    setTopics(topicSelection);
    const filteredFeaturedRepos = filterRepos(repos, topic);
    setFeaturedRepos(filteredFeaturedRepos);
  }, [repos]);

  const getRepos = async () => {
    const result = await fetchRepos();
    setRepos(result);
  };

  const filterByTopic = (topic) => {
    setTopic(topic);
    const filteredFeaturedRepos = filterRepos(repos, topic);
    setFeaturedRepos(filteredFeaturedRepos);
  };

  return (
    <AnimatedPage>
      <Center
        color="white"
        alignItems="flex-start"
        z-index="1000"
        pointerEvents="auto"
        backdropFilter="auto"
        backdropBlur="2px"
      >
        <Box w={{ base: "340px", md: "600px" }}>
          <Flex flexDir="column" alignItems="center">
            <Flex gap={2}>
              <ProjectStatistics repos={repos} topic="public" />
              <ProjectStatistics repos={featuredRepos} topic={topic} />
            </Flex>
            <Select
              width="60%"
              onChange={(e) => filterByTopic(e.target.value)}
              value={topic}
              textTransform="uppercase"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </Select>
          </Flex>

          <Swiper
            style={{ maxWidth: "600px" }}
            pagination={{
              type: "fraction",
              clickable: true,
            }}
            spaceBetween={40}
            modules={[Pagination, Navigation, EffectFade]}
            scrollbar={{ draggable: true }}
            navigation={isBrowser && true}
            className="mySwiper"
          >
            {featuredRepos.map((repo) => (
              <SwiperSlide key={repo.id}>
                <ProjectCard
                  topic={topic}
                  name={repo.name}
                  description={repo.description}
                  topics={repo.topics}
                  date={repo.created}
                  gh_url={repo.url}
                  homepage={repo.homepage}
                  img={repo.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Center>
    </AnimatedPage>
  );
}

export default Projects;
