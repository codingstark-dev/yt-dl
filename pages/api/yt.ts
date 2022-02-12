import axios, { AxiosError, AxiosRequestConfig } from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'
import ytdl from "ytdl-core";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== "POST") {
        res.statusCode = 405;
        res.setHeader("Allow", "POST");
        return res.json({
            "error": "Method not allowed.",
            "code": "method_not_allowed"
        });
    }

    if (!req.body.url) {
        res.statusCode = 422;
        return res.json({
            "error": "Missing url.",
            "code": "missing_url"
        });
    }

    let urlObj;

    try {
        urlObj = new URL(req.body.url);
    } catch (err) {
        res.statusCode = 422;
        return res.json({
            "error": "Invalid url.",
            "code": "invalid_url"
        });
    }
    //create regex (?-s)^https?\W+(?:www\.|m\.|music\.)*youtu\.?be(?:\.com|\/watch|\/o?embed|\/shorts|\/attribution_link\?[&\w\-=]*[au]=|\/ytsc\w+|[\?&\/]+[ve]i?\b|\?feature=\w+|-nocookie)*[\/=]([a-z\d\-_]{11})[\?&#% \t ] *.*$
    let ytRegex = /(?:http?s?:\/\/)?(?:www.)?(?:m.)?(?:music.)?youtu(?:\.?be)(?:\.com)?(?:(?:\w*.?:\/\/)?\w*.?\w*-?.?\w*\/(?:embed|e|v|watch|shorts.*\/)?\??(?:feature=\w*\.?\w*)?&?(?:v=)?\/?)([\w\d_-]{11})(?:\S+)?/gm;



    if (!ytRegex.test(urlObj)) {

        res.statusCode = 422;
        return res.json({
            "error": "Invalid url.",
            "code": "invalid_url"
        });
    }
    const newUrl = urlObj.toString();

    // const getVideoID = (url) => {
    //     if (url.match(/watch/)) {
    //         const videoID = url.split("/")[3].split("?")[1].split("=")[1];
    //         return videoID;
    //     } else if (url.match(/youtu.be/)) {
    //         const videoID = url != "" && url.split("/")[3];
    //         return videoID
    //     }
    // }

    // var options: AxiosRequestConfig = {
    //     method: 'POST',
    //     url: 'https://saveinsta.online/api/analyze',
    //     headers: { 'Content-Type': 'application/json' },
    //     data: { q: newUrl }
    // };
    let resp;
    try {
        let info = await ytdl.getInfo(newUrl,);
        let videoData = ytdl(newUrl, { quality: 'highestaudio' })
        videoData.on('info', (info) => {
            console.log(info);
        }

        );
        let listOfData = []
        let i = 0;

        // let audio = ytdl.filterFormats(info.formats, 'audioonly');
        // let format = ytdl.chooseFormat(info.formats, { quality: '137 ' });

        // let video = ytdl.filterFormats(info.formats, 'videoandaudio');
        // audio.forEach(element => {
        //     if (element.mimeType == `audio/mp4; codecs="mp4a.40.2"`) {
        //         console.log(element)
        //     }
        // });
        // console.log(audio, video);
        // info.formats.forEach((element) => {
        //     axios.head(element.url).then(ress => {
        //         listOfData.push({ ...element, VideoSize: ress.headers['content-length'] },)
        //         // console.log(listOfData)
        //         if (info.formats.length == listOfData.length) {
        //             console.log(info.formats.length == listOfData.length, listOfData)
        //             // return res.json(listOfData);
        //             // 
        //         }
        //     })
        //     // Promise.all(listOfData).then((result) => {
        //     //     console.log(result)
        //     //     return res.json(listOfData)
        //     // })
        //     //     .catch((err) => res.send(err));
        // });


        // Promise.resolve(listOfData).then(ress => {
        // setTimeout(() => {
        //     console.log(listOfData)


        //     if (info.formats.length == listOfData.length) {
        //         console.log(info.formats.length == listOfData.length, listOfData)
        return res.json(info);
        // 
        // }
        // }, 5000);
        // })
    } catch (err) {
        res.statusCode = 500;
        console.error("[ERROR] - " + err.stack);
        return res.json({
            "errorData": err.stack,
            "error": "An error occured while creating the request.",
            "code": "request_error"
        });
    }


    return res.json(resp);
}

