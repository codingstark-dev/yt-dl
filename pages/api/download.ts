// import readline from 'readline';
// External modules
// import ytdl from "ytdl-core";
import { NextApiRequest, NextApiResponse } from 'next';
import ytmux from 'ytdl-core-muxer';
// Global constants
// const ref = 'https://www.youtube.com/watch?v=LPM1sY0ipNM';
// import ffmpegPath from 'ffmpeg-static';
// import cp from 'child_process';
// import stream from 'stream';
// import download from 'downloadjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = req.query.url;
    const title = req.query.title;
    const type = req.query.type;

    try {

        // return fetch(
        //     `http://localhost:3000/api/mp3/?url=https://m.youtube.com/watch?v=i9Idad9jMog&bit=128&type=mp3`
        // )
        //     .then((res) => res.blob())
        //     .then((blob) => {
        //         const sizeInBytes = blob.size;
        //         console.log("sizeInBytes: ", sizeInBytes);
        //         if (sizeInBytes <= 0) {
        //         } else {
        //            return res.send(download(blob, `${"title"}.mp4`, "video/mp4"));
        //         }
        //     });
        return ytmux(url).pipe(res);

    } catch (error) {
        return res.status(500).json(error);
    }
}


// default export: the ffmpeg muxer
// const ytmux = (link, options = {}) => {
//     const result = new stream.PassThrough({ highWaterMark: (options as any).highWaterMark || 1024 * 512 });
//     ytdl.getInfo(link, options).then(info => {
//         let audioStream = ytdl.downloadFromInfo(info, { ...options, quality: 'highestaudio' });
//         let videoStream = ytdl.downloadFromInfo(info, { ...options, quality: 'highestvideo' });
//         // create the ffmpeg process for muxing
//         let ffmpegProcess = cp.spawn(ffmpegPath, [
//             // supress non-crucial messages
//             '-loglevel', '8', '-hide_banner',
//             // input audio and video by pipe
//             '-i', 'pipe:3', '-i', 'pipe:4',
//             // map audio and video correspondingly
//             '-map', '0:a', '-map', '1:v',
//             // no need to change the codec
//             '-c', 'copy',
//             // output mp4 and pipe
//             '-f', 'matroska', 'pipe:5'
//         ], {
//             // no popup window for Windows users
//             windowsHide: true,
//             stdio: [
//                 // silence stdin/out, forward stderr,
//                 'inherit', 'inherit', 'inherit',
//                 // and pipe audio, video, output
//                 'pipe', 'pipe', 'pipe'
//             ]
//         });
//         audioStream.pipe(ffmpegProcess.stdio[3]);
//         videoStream.pipe(ffmpegProcess.stdio[4]);
//         ffmpegProcess.stdio[5].pipe(result);
//     });
//     return result;
// };