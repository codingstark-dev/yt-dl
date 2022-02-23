import axios, { AxiosRequestConfig } from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'
import ytdl from "ytdl-core";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = req.query.url;
    const title = req.query.title;
    const type = req.query.type;
    const bit = req.query.bit;
    // console.log(url)
    var options: AxiosRequestConfig = {
        url: url as string,
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
                console.log(bit)

                return ytdl(url as string, { quality: bit }).pipe(res)
                // return axios(options)
                //     .then(function (response) {
                //         new Promise<void>((resolve, reject) => {
                //             return response.data.pipe(res).on('finish', () => resolve())
                //                 .on('error', e => reject(e));
                //         })

                //         // ....
                //     })
                //     .catch((err) => {
                //         return res.status(500).json(err);
                //     });
            } else if (type == "mp3") {
                res.setHeader(
                    "Content-Disposition",
                    `attachment; filename=${title}.mp3`,


                );
                res.setHeader("Content-Type", "audio/mp3");
                return ytdl(url as string, { quality: "highestaudio" }).pipe(res)

                // return axios(options)
                //     .then(function (response) {
                //         return response.data.pipe(res);

                //         // ....
                //     })
                //     .catch((err) => {
                //         return res.status(500).json(err);
                //     });
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