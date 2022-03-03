import axios, { AxiosRequestConfig } from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'
import ytdl from "ytdl-core";
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from '@ffmpeg-installer/ffmpeg';
ffmpeg.setFfmpegPath(ffmpegPath.path);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = req.query.url;
    const title = req.query.title;
    const type = req.query.type;
    const bit = req.query.bit;
    const dltype = req.query.dltype;
    res.setHeader('Cache-Control', 's-maxage=86400');

    // console.log(url)
    let options: AxiosRequestConfig = {
        url: decodeURIComponent(url as string),
        method: "GET",
        responseType: "stream",
    };
    try {
        if (url != undefined) {
            if (type == "png") {
                res.setHeader(
                    "Content-Disposition",
                    `attachment; filename=${title}.png`
                );
                return axios(options)
                    .then(function (response) {
                        return response.data.pipe(res);
                        // ....
                    })
                    .catch((err) => {
                        return res.status(500).json(err);
                    });
            } else if (type == "mp4") {
                res.setHeader(
                    "Content-Disposition",
                    `attachment; filename=${title}.mp4`
                );
                res.setHeader("Content-Type", "video/mp4");
                // res.setHeader("Content-Type", "audio/mp3");
                // console.log(bit)


                // return ytdl(url as string, { quality: bit }).pipe(res)
                return axios(options)
                    .then(function (response) {
                        new Promise<void>((resolve, reject) => {
                            return response.data.pipe(res).on('finish', () => resolve())
                                .on('error', e => reject(e));
                        })

                        // ....
                    })
                    .catch((err) => {
                        return res.status(500).json(err);
                    });
            } else if (type == "mp3") {
                res.setHeader(
                    "Content-Disposition",
                    `attachment; filename=${title}.mp3`,


                );
                res.setHeader("Content-Type", "audio/mp3");

                // res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
                // res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
                // const stream = ytdl(url as string, { quality: "highestaudio" })

                // console.log(stream)
                // if (!ffmpeg.isLoaded()) {
                //     await ffmpeg.load();
                // }
                // if (stream) {
                //     ffmpeg.FS("writeFile", "test.mp3", new Uint8Array());
                //     //  await ffmpeg.run("-i", "test.mp3", "-ab", "320k", "-f", "mp3", "out.mp3");
                //     await ffmpeg.run(
                //         "-i",
                //         "test.mp3",
                //         "-b:a",
                //         "320k",
                //         "-map",
                //         "a",
                //         "out.mp3"
                //     );
                //     const data = ffmpeg.FS("readFile", "out.mp3");
                //     let finalUrl = URL.createObjectURL(
                //         new Blob([data], { type: "audio/mp3" })
                //     );
                //     console.log(URL.createObjectURL(new Blob([data], { type: "audio/mp3" })));


                //     // return axios(options)
                //     //     .then(function (response) {
                //     //         return response.data.pipe(res);

                //     //         // ....
                //     //     })
                //     //     .catch((err) => {
                //     //         return res.status(500).json(err);
                //     //     });
                // }
                if (dltype == "youtubedl") {

                    let fdata: AxiosRequestConfig = await axios.request(options)

                    return ffmpeg(fdata.data)

                        .audioBitrate(bit as string)
                        // .withAudioCodec("libmp3lame")
                        .toFormat(type as string).pipe(res, { end: true })
                        // .saveToFile(`mp3/${'id'}.mp3`).on('progress', p => {
                        //     readline.cursorTo(process.stdout, 0);
                        //     process.stdout.write(`${p.targetSize}kb downloaded`);
                        // })
                        .on("error", function (err) {
                            console.log('error', err)
                            return res.json(err)
                        })
                        .on("end", function () {
                            console.log("done")
                        })
                } else {
                    let stream = ytdl(url as string, { quality: 'highestaudio' })
                    return ffmpeg(stream)
                        // .inputFormat('mp3')

                        .audioBitrate(bit as string).addInputOptions(['-threads 6'])
                        // .withAudioCodec("libmp3lame")
                        .toFormat(type as string).pipe(res, { end: true })
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
                }
                // let stream = ytdl(url as string, { quality: 'highestaudio' })
                // return ffmpeg(stream)
                //     // .inputFormat('mp3')

                //     .audioBitrate(bit as string).addInputOptions(['-threads 6'])
                //     // .withAudioCodec("libmp3lame")
                //     .toFormat(type as string).pipe(res, { end: true })
                //     // .saveToFile(`mp3/${'id'}.mp3`).on('progress', p => {
                //     //     readline.cursorTo(process.stdout, 0);
                //     //     process.stdout.write(`${p.targetSize}kb downloaded`);
                //     // })
                //     .on("error", function (err) {
                //         console.log('error', err)
                //         return res.json(err)
                //     })
                //     .on("end", function () {
                //     })
            } else if (type == "m4a") {
                res.setHeader(
                    "Content-Disposition",
                    `attachment; filename=${title}.m4a`
                );
                res.setHeader("Content-Type", "audio/mp4");

                return axios(options)
                    .then(function (response) {
                        return response.data.pipe(res);

                        // ....
                    })
                    .catch((err) => {
                        return res.status(500).json(err);
                    });
            } else if (type == "pdf") {
                res.setHeader(
                    "Content-Disposition",
                    `attachment; filename=${title}.pdf`
                );
                return axios(options)
                    .then(function (response) {
                        return response.data.pipe(res);
                        // ....
                    })
                    .catch((err) => {
                        return res.status(500).json(err);
                    });
            }
        } else {
            return res.status(500).json("enter valid url");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}