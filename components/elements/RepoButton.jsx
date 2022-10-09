import React from "react";

import { Link, Button } from "@chakra-ui/react";

function RepoButton({ icon, linkTo, count, title, type }) {
  return (
    <Link
      padding="0"
      margin="0"
      href={linkTo && linkTo}
      target="_blank"
      _hover={
        linkTo && {
          transform: "scale(1.005)",
          transition: "transform 0.2s",
          textDecoration: "underline",
        }
      }
    >
      <Button
        pointer="none"
        padding="0"
        margin="0"
        variant={type}
        textDecor="none"
        textTransform="capitalize "
        color="gray.200"
        size="sm"
        py="0.5em"
        fontSize={{ base: "1.2rem", md: "1.4rem" }}
        leftIcon={icon ? icon : ""}
        _hover={
          linkTo && {
            transform: "scale(1.05)",
            transition: "transform 0.2s",
            textDecoration: "none",
          }
        }
      >
        {count} {title}
      </Button>
    </Link>
  );
}

export default RepoButton;
