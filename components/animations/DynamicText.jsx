import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AnimatedParagraph from "./AnimatedParagraphs";

function DynamicText({ sentence, color, base, sm, md, lg, interval }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const intervalText = () => setText(sentence);
    const intervalId = setInterval(intervalText, interval);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatedParagraph
      text={text}
      base={base}
      color={color}
      sm={sm}
      md={md}
      lg={lg}
    />
  );
}

export default DynamicText;
