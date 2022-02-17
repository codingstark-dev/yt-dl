import cp from 'child_process';
import readline from 'readline';
// External modules
import ffmpeg from 'fluent-ffmpeg';
// import ffmpegs from 'ffmpeg-static';
import ytdl from "ytdl-core";
import { NextApiRequest, NextApiResponse } from 'next';
// import ytmux from 'ytdl-core-muxer';
import ffmpegPath from '@ffmpeg-installer/ffmpeg';
ffmpeg.setFfmpegPath(ffmpegPath.path);
// Global constants
const ref = 'https://www.youtube.com/watch?v=LPM1sY0ipNM';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = req.query.url;
    const bit = req.query.bit;
    const type = req.query.type;
    let id = 'https://www.youtube.com/watch?v=vzvkeOIDFuw';


    try {
        res.setHeader('Content-Type', `audio/${type}`);
        let data = await ytdl.getInfo(url as string)
        let stream = ytdl.downloadFromInfo(data, { quality: 'highestaudio' });
        return ffmpeg(stream)
            // .inputFormat('mp3')

            .audioBitrate(bit as string)
            // .withAudioCodec("libmp3lame")
            .toFormat(type as string).pipe(res)
            // .saveToFile(`mp3/${'id'}.mp3`).on('progress', p => {
            //     readline.cursorTo(process.stdout, 0);
            //     process.stdout.write(`${p.targetSize}kb downloaded`);
            // })
            .on("error", function (err) {
                console.log('error', err)
                return res.json(err)
            })
            .on("end", function () {
            })
        // ffmpeg(stream)
        // .audioBitrate(128)
        // .save(`${__dirname}/${'id'}.mp3`)
        // .on('progress', p => {
        //     readline.cursorTo(process.stdout, 0);
        //     process.stdout.write(`${p.targetSize}kb downloaded`);
        // })
        // .on('end', () => {
        //     console.log(`\ndone, thanks - ${(Date.now() - start) / 1000}s`);
        // });

        // return ytmux(url).pipe(res);

    } catch (error) {
        return res.status(500).json(error);
    }
}