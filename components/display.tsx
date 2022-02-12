import { DownloadIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { SiteDetails } from "../setup";
import Image from "next/image";
import axios from "axios";
// import { useCallback, useEffect, useState } from "react";

const Display = ({ Data, Url }): JSX.Element => {
  if (!Data) {
    return <div />;
  }
  let listOFbit = [64, 128, 192, 256, 320];
  // const [data, dataSet] = useState<Array<any>>([]);

  // const fetchMyAPI = useCallback(async () => {
  //   Data.formats.forEach(async (e) => {
  //     let response = await axios.head(e.url);
  //     dataSet({ ...e, SizeUrl: response.headers["content-length"] });
  //     console.log(response.headers["content-length"]);
  //   });
  //   console.log(data);
  //   // dataSet(response);
  // }, []);

  // useEffect(() => {
  //   fetchMyAPI();
  // }, [fetchMyAPI]);

  const fetchContentLength = async (url) => {
    let res = await axios.head(url);
    console.log(res.headers["content-length"]);
  };
  let instagramVideoDisplay = () => {
    return (
      <>
        <div
          className="dark:border-gray-700 dark:bg-gray-900 bg-gray-100 border-2 border-gray-200 rounded-lg 
            p-4 mt-4 "
        >
          <h2 className="text-xl font-semibold">{Data?.videoDetails.title}</h2>
          <br />
          {/* <img
                className="h-32 rounded-lg bg-gray-500 border-2 dark:border-gray-700 border-gray-200 my-auto"
                // src={`api/dl?url=${encodeURIComponent(
                //   Data.media.display_url
                // )}&type=${"png"}&title=${Math.floor(
                //   Math.random() * 100000000000
                // )}`}

                src={Data.media.display_data}
              /> */}
          {/* <video
            className="h-full w-72 rounded-lg m-auto bg-gray-500 border-2  dark:border-gray-700 border-gray-200 "
            src={`/api/dl?url=${encodeURIComponent()}&type=${"mp4"}&title=${Math.floor(
              Math.random() * 100000000000
            )}`}
            controls
          ></video> */}
          <img
            src={
              Data?.videoDetails.thumbnails.sort((a, b) => a.height > b.height)[
                Data?.videoDetails.thumbnails.length - 1
              ].url
            }
            alt=""
          />
          <br /> <h4 className="font-bold">Audio -</h4>
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th className="px-4 py-2">File Type</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Download</th>
              </tr>
            </thead>
            <tbody>
              {listOFbit.map((e, index) => {
                return (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-sm">
                      MP3 <br />
                      {e}Kbps
                    </td>
                    <td className="border px-4 py-2 text-sm">Audio</td>
                    <td className="border px-4 py-2">
                      <Link
                        href={`/api/dl?url=${encodeURIComponent(
                          SiteDetails.website +
                            "/api/mp3?url=" +
                            Url +
                            `&bit=${e}&type=mp3`
                        )}&type=mp3&title=${encodeURIComponent(
                          Data?.videoDetails.title.replace(/[^\w\s]/gi, "")
                        )}`}
                        passHref
                        locale={false}
                      >
                        <a className="text-blue-500 hover:text-blue-700">
                          {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
                          <button className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300">
                            Download
                          </button>
                        </a>
                      </Link>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="border px-4 py-2 text-sm">
                  M4a <br /> High Quality
                </td>
                <td className="border px-4 py-2 text-sm"> Audio</td>
                <td className="border px-4 py-2 text-sm">
                  <Link
                    href={`/api/dl?url=${encodeURIComponent(
                      SiteDetails.website +
                        "/api/mp3?url=" +
                        Url +
                        `&bit=${320}&type=mp3`
                    )}&type=m4a&title=${encodeURIComponent(
                      Data?.videoDetails.title.replace(/[^\w\s]/gi, "")
                    )}`}
                    passHref
                    locale={false}
                  >
                    <a className="text-blue-500 hover:text-blue-700">
                      {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
                      <button className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300">
                        Download
                      </button>
                    </a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>{" "}
          <br />
          {/* create table */}
          <h4 className="font-bold">Video -</h4>
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th className="px-4 py-2">File Type</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Download</th>
              </tr>
            </thead>
            <tbody>
              {Data?.formats.map((e, index) => {
                return e.hasAudio == true && e.hasVideo == true ? (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-sm">
                      {e.mimeType.split(";")[0].split("/")[0] == "video" &&
                      "video"
                        ? "MP4"
                        : "audio" || "audio"
                        ? "MP3"
                        : ""}
                      <br /> {e.quality}
                    </td>
                    <td className="border px-4 py-2 text-sm">
                      {e.hasAudio == true && e.hasVideo == true
                        ? "Video + Audio"
                        : e.hasAudio == true && e.hasVideo == false
                        ? "Audio Only"
                        : e.hasAudio == false && e.hasVideo == true
                        ? "Video Only"
                        : "Not Specified"}
                    </td>
                    <td className="border px-4 py-2">
                      <Link
                        href={`/api/dl?url=${encodeURIComponent(e.url)}&type=${
                          e.mimeType.split(";")[0].split("/")[0] == "video" &&
                          "video"
                            ? "mp4"
                            : "audio" || "audio"
                            ? "mp3"
                            : ""
                        }&title=${encodeURIComponent(
                          Data?.videoDetails.title.replace(/[^\w\s]/gi, "")
                        )}`}
                        passHref
                        // locale={false}
                      >
                        <a className="text-blue-500 hover:text-blue-700">
                          {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
                          <button className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300">
                            Download
                          </button>
                        </a>
                      </Link>
                    </td>
                  </tr>
                ) : (
                  ""
                );
              })}
              <tr>
                <td className="border px-4 py-2 text-sm">
                  Mp4 <br /> High Quality
                </td>
                <td className="border px-4 py-2 text-sm">Video + Audio</td>
                <td className="border px-4 py-2 text-sm">
                  <Link
                    href={
                      `/api/dl?url=` +
                      SiteDetails.website +
                      `/api/download?url=` +
                      encodeURIComponent(Url) +
                      `&title=${encodeURIComponent(
                        Data?.videoDetails.title.replace(/[^\w\s]/gi, "")
                      )}&type=mp4`
                    }
                    passHref
                    // locale={false}
                  >
                    <a className="text-blue-500 hover:text-blue-700">
                      {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
                      <button className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300">
                        Download
                      </button>
                    </a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          {/* 
          {Data.formats.map((e) => {
            return (
              <div>{`${e.mimeType.split(";")[0]} ${
                e.hasAudio == true && e.hasVideo == true
                  ? "Video + Audio"
                  : e.hasAudio == true && e.hasVideo == false
                  ? "Audio Only"
                  : e.hasAudio == false && e.hasVideo == true
                  ? "Video Only"
                  : "Not Specified"
              } ${e.quality}`}</div>
            );
          })} */}
          {/* <Image src={}></Image> */}
          {/* <h3 className="font-semibold">{Data.description}</h3> */}
          {/* <div className=" h-auto justify-center items-center flex m-auto">
            <Link
              href={
                SiteDetails.website +
                `/api/dl?url=${encodeURIComponent(
                  Data?.url
                )}&type=${"mp4"}&title=${Math.floor(
                  Math.random() * 100000000000
                )}`
              }
              locale={false}
            >
              <button className="flex rounded-lg bg-red-500 mt-2 text-white   py-2 px-4 m-auto ml-auto">
                <DownloadIcon className="w-6 h-6 mr-1" /> Download now
              </button>
            </Link>
          </div> */}
        </div>
      </>
    );
  };

  return <div>{Data ? instagramVideoDisplay() : ""}</div>;
};

export default Display;
