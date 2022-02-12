import cp from 'child_process';
import readline from 'readline';
// External modules
import ytdl from "ytdl-core";
import ffmpeg from 'ffmpeg-static';
import { NextApiRequest, NextApiResponse } from 'next';
import ytmux from 'ytdl-core-muxer';
// Global constants
const ref = 'https://www.youtube.com/watch?v=LPM1sY0ipNM';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = req.query.url;
    const title = req.query.title;
    const type = req.query.type;

    try {

        return ytmux(url).pipe(res);

    } catch (error) {
        return res.status(500).json(error);
    }
}