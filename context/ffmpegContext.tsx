import { createContext } from "react";
import { createFFmpeg } from "@ffmpeg/ffmpeg";
// import core from "@ffmpeg/core/dist"
export default createContext(
  createFFmpeg({
    log: true,
    logger: console.log,
    // corePath: "../node_modules/@ffmpeg/core/dist/ffmpeg-core.js",
  })
);
