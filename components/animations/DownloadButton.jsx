import React, { useContext } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { ChakraBox } from "./ChakraBox";
import { downloadCV } from "../../utils/downloadCV";

function DownloadButton() {
  return (
    <ChakraBox
      onClick={downloadCV}
      cursor="pointer"
      animate={{
        rotate: [0, 0, 0, 24, 0],
        color: ["#8a3ab9", "#ff006b", "#8a3ab9", "#4D00A3", "#ff006b"],
        borderRadius: ["50%", "50%", "50%", "50%", "50%"],
        opacity: ["1", "0.5", "1", "0.8", "1"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeatType: "loop",
      }}
    >
      <AiOutlineCloudDownload size={40} />
    </ChakraBox>
  );
}

export default DownloadButton;
