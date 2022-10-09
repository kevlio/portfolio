import React from "react";

import { extraCourses, work, academics } from "../content/about";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Swiper from "./Swiper";
import { Center, Box } from "@chakra-ui/react";

function About() {
  return (
    <Center
      color="white"
      alignItems="flex-start"
      z-index="1000"
      pointerEvents="auto"
      minW="300px"
    >
      <Box w={{ base: "340px", md: "700px" }}>
        <Swiper
          style={{ maxWidth: "700px" }}
          intro={<Introduction />}
          work={<Experience object={work} category="Work Experience" />}
          academics={
            <Experience object={academics} category="Academic Degrees" />
          }
          courses={
            <Experience
              object={extraCourses}
              category="Extra Curricular Courses"
            />
          }
        ></Swiper>
      </Box>
    </Center>
  );
}

export default About;
