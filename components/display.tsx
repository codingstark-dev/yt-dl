import Link from "next/link";


// import { useCallback, useEffect, useState } from "react";

const Display = ({ Data, Url }): JSX.Element => {
  if (!Data) {
    return <div />;
  }
  let listOFbit = [
    // 64, 128,
    96, 192, 256, 320,
  ];
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

  // const fetchContentLength = async (url) => {
  //   let res = await axios.head(url);
  //   console.log(res.headers["content-length"]);
  // };
  // const mergeBtn = async (bit) => {
  //   let head = await axios.head(
  //     `/api/dl?url=${Url}&type=mp3&title=${encodeURIComponent(
  //       Data?.videoDetails.title.replace(/[^\w\s]/gi, "")
  //     )}`
  //   );
  //   let responseMp3 = await axios.get(
  //     `/api/dl?url=${Url}&type=mp3&title=${encodeURIComponent(
  //       Data?.videoDetails.title.replace(/[^\w\s]/gi, "")
  //     )}`,
  //     {
  //       responseType: "arraybuffer",
  //       onDownloadProgress: function (progressEvent) {
  //         console.log("download", progressEvent);
  //       },
  //     }
  //   );
  //   console.log(head.headers["content-length"]);

  //   if (!ffmpeg.isLoaded()) {
  //     await ffmpeg.load();
  //   }
  //   if (responseMp3) {
  //     ffmpeg.FS("writeFile", "test.mp3", new Uint8Array(responseMp3.data));
  //     //  await ffmpeg.run("-i", "test.mp3", "-ab", "320k", "-f", "mp3", "out.mp3");
  //     await ffmpeg.run(
  //       "-i",
  //       "test.mp3",
  //       "-b:a",
  //       `${bit}k`,
  //       // "-map",
  //       // "a",'-codec',"copy",
  //       "out.mp3"
  //     );
  //     const data = ffmpeg.FS("readFile", "out.mp3");
  //     let finalUrl = URL.createObjectURL(
  //       new Blob([data], { type: "audio/mp3" })
  //     );
  //     console.log(URL.createObjectURL(new Blob([data], { type: "audio/mp3" })));
  //     closeModal();
  //     const a = document.createElement("a");
  //     a.setAttribute(
  //       "download",
  //       `${encodeURIComponent(
  //         Data?.videoDetails.title.replace(/[^\w\s]/gi, "")
  //       )}`
  //     );
  //     a.setAttribute("href", finalUrl);
  //     a.style.setProperty("display", "node");

  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //   }
  // };
  // const mergeBtn = async (bit) => {
  //   let responsevid = await axios.get(
  //     `/api/dl?url=${Url}&bit=${bit}&type=mp4&title=${encodeURIComponent(
  //       "sdasdsad"
  //     )}`,
  //     {
  //       responseType: "arraybuffer",
  //     }
  //   );
  //   let responseMp3 = await axios.get(
  //     `/api/dl?url=${Url}&type=mp3&title=${encodeURIComponent("sdasdsad")}`,
  //     {
  //       responseType: "arraybuffer",
  //     }
  //   );

  //   // `/api/dl?url=${encodeURIComponent(
  //   //   "https://rr3---sn-cvh7knle.googlevideo.com/videoplayback?expire=1645496895&ei=3vUTYpftOfefg8UPsryi-Ac&ip=103.124.109.75&id=o-AHBPBz0W113TcIB9L6aPNxKLFTEMCTO291ANMIc1ljcu&itag=136&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=9P&mm=31%2C29&mn=sn-cvh7knle%2Csn-cvh76nls&ms=au%2Crdu&mv=m&mvi=3&pl=24&gcr=in&initcwndbps=970000&spc=4ocVC87pBiLtoRYHuQFOQ8Ykj-79&vprv=1&mime=video%2Fmp4&ns=HRQpm2y_y6GVrqNYk6fDvfYG&gir=yes&clen=19099235&dur=173.916&lmt=1627682196763754&mt=1645474845&fvip=4&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=BAHOG37AH3NPng&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAIFXZ3Dd9CY2ey7_OfRoeKEBtNUyBWqrCOqWdYhtm692AiBnmlcNSf5ghW6kZ-1G485zxNObJfnkT6xnwxEkeYRiyw%3D%3D&sig=AOq0QJ8wRQIgXs5hO_TElQxgqjAXeZKAUnlHGgZq4jvhZw_5pFTNwFkCIQCAoPSU9b6kBueprkzYtTtDFnQHCImko8cGJJUKErp16w%3D%3D"
  //   // )}&type=mp3&title=${encodeURIComponent("title")}`;
  //   // const responsevid = await fetch(
  //   //   `/api/dl?url=${encodeURIComponent(
  //   //     "https://rr4---sn-cvh76nls.googlevideo.com/videoplayback?expire=1645583403&ei=y0cVYprMDuO13LUPntiOuA4&ip=103.124.109.72&id=o-AHv8MI1u0BZe-7VW8YDdoEI1RxnTrE2ZZsylWyqI1dfW&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=9P&mm=31%2C29&mn=sn-cvh76nls%2Csn-cvh7knle&ms=au%2Crdu&mv=m&mvi=4&pl=24&gcr=in&initcwndbps=812500&spc=4ocVC45HWJnPxieQ_DLC9RJuta9z&vprv=1&mime=video%2Fmp4&ns=I_mI5A2_E0r2XFAVnm07RwwG&gir=yes&clen=10638007&dur=173.916&lmt=1627682196876997&mt=1645561491&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=0ihB6DtV2xyxxA&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAKsWT0knZMQSAr_DZrFUmhpLq9eLk34TPwqELwbcBEJ3AiEAw3BaBvWFwF5I5rpjr9p7MpXLX6BlRSn1viwTO2K9xl4%3D&sig=AOq0QJ8wRAIgK963wTnE3b0Ct9AV6WxZtNSIERy1aZw2VB6ANUs49rkCIEstLfXnXifySU39S_966CbSua2FDl0GP0wP1e-ucwOW"
  //   //   )}&type=mp4&title=${encodeURIComponent("s")}`
  //   // );
  //   // const videoBuffer = await responsevid.arrayBuffer();
  //   // const response = await fetch(
  //   //   `/api/dl?url=${encodeURIComponent(
  //   //     "https://rr4---sn-cvh76nls.googlevideo.com/videoplayback?expire=1645583403&ei=y0cVYprMDuO13LUPntiOuA4&ip=103.124.109.72&id=o-AHv8MI1u0BZe-7VW8YDdoEI1RxnTrE2ZZsylWyqI1dfW&itag=140&source=youtube&requiressl=yes&mh=9P&mm=31%2C29&mn=sn-cvh76nls%2Csn-cvh7knle&ms=au%2Crdu&mv=m&mvi=4&pl=24&gcr=in&initcwndbps=812500&spc=4ocVC45HWJnPxieQ_DLC9RJuta9z&vprv=1&mime=audio%2Fmp4&ns=I_mI5A2_E0r2XFAVnm07RwwG&gir=yes&clen=2816517&dur=173.987&lmt=1627680993600045&mt=1645561491&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=0ihB6DtV2xyxxA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgEFiIuN7b-1R67-UTFzhRIawSMhUDT3UXXoPUFjMJgOsCIQCot4EExkrCu4Ke9styoVQV2rZzNNkw-mZbczAxfJYefw%3D%3D&sig=AOq0QJ8wRAIgbkjsH1s-7mIrT8IO5qffpUNgGUFAalwIR1zlQ4KfGLECIAjyVnOjUzQp3X_SvYIrGUhD3Oyg6kDrFG89xQRX8p3S"
  //   //   )}&type=mp3&title=${encodeURIComponent("s")}`
  //   // );
  //   // console.log(response.text);
  //   // const audioBuffer = await response.arrayBuffer();
  //   // console.log(videoBuffer, audioBuffer);
  //   if (!ffmpeg.isLoaded()) {
  //     await ffmpeg.load();
  //   }
  //   if (responsevid && responsevid) {
  //     ffmpeg.FS("writeFile", "test.mp4", new Uint8Array(responsevid.data));
  //     ffmpeg.FS("writeFile", "test.mp3", new Uint8Array(responseMp3.data));
  //     await ffmpeg.run(
  //       "-i",
  //       "test.mp4",
  //       "-i",
  //       "test.mp3",
  //       "-c",
  //       "copy",
  //       "out.mp4"
  //     );
  //     const data = ffmpeg.FS("readFile", "out.mp4");
  //     let finalUrl = URL.createObjectURL(new Blob([data], { type: "video/mp4" }));
  //     console.log(URL.createObjectURL(new Blob([data], { type: "video/mp4" })));
  //     const a = document.createElement("a");
  //     a.setAttribute(
  //       "download",
  //       `test.mp4`
  //     );
  //     a.setAttribute("href", finalUrl);
  //     a.style.setProperty("display", "node");

  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //   }
  // };
  let youtubedl = () => {
    return (
      <>
        <div
          className="dark:border-gray-700 dark:bg-gray-900 bg-gray-100 border-2 border-gray-200 rounded-lg 
            p-4 mt-4 "
        >
          <h2 className="text-xl font-semibold">{Data?.data.title}</h2>
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
          <img src={Data?.data.thumbnail} alt="" />
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
                        href={`/api/dl?url=${encodeURIComponent(Data.data.url)}&type=mp3&dltype=${Data.api}&bit=${e}&title=${encodeURIComponent(
                          Data?.data.title.replace(/[^\w\s]/gi, "")
                        )}`}
                        passHref
                        locale={false}
                      >
                        {/* <a className="text-blue-500 hover:text-blue-700"> */}
                        {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
                        <button
                          // onClick={() => {
                          //   openModal();
                          //   mergeBtn(e);
                          // }}
                          className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300"
                        >
                          Download
                        </button>
                        {/* </a> */}
                      </Link>
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
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
                  > */}
              {/* <a className="text-blue-500 hover:text-blue-700"> */}
              {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
              {/* <button className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300">
                      Download
                    </button> */}
              {/* </a> */}
              {/* </Link>
                </td>
              </tr> */}
            </tbody>
          </table>
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
              {Data?.data.formats.map((e, index) => {
                return e.asr != null && e.quality != 0 && e.height != null ? (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-sm">
                      {e.format.includes("audio") ? "MP3" : "MP4"}
                      <br />
                      {e.height}p
                    </td>
                    <td className="border px-4 py-2 text-sm">Video + Audio</td>
                    <td className="border px-4 py-2">
                      <Link
                        href={`/api/dl?url=${encodeURIComponent(e.url)}&type=${
                          e.format.includes("audio") ? "mp3" : "mp4"
                        }&title=${encodeURIComponent(
                          Data?.data.title.replace(/[^\w\s]/gi, "")
                        )}`}
                        passHref
                        // locale={false}
                      >
                        {/* <a className="text-blue-500 hover:text-blue-700"> */}
                        {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
                        <button className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300">
                          Download
                        </button>
                        {/* </a> */}
                      </Link>
                    </td>
                  </tr>
                ) : (
                  <tr key={index}></tr>
                );
              })}
              {/* <tr>
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
                    {/* <a className="text-blue-500 hover:text-blue-700"> */}
              {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
              {/* <button className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300">
                        Download
                      </button>
                    {/* </a> */}
              {/* </Link>
                </td>
              </tr> */}
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
  let ytdl = () => {
    return (
      <>
        <div
          className="dark:border-gray-700 dark:bg-gray-900 bg-gray-100 border-2 border-gray-200 rounded-lg 
            p-4 mt-4 "
        >
          <h2 className="text-xl font-semibold">{Data?.data.videoDetails.title}</h2>
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
              Data?.data.videoDetails.thumbnails.sort((a, b) => a.height > b.height)[
                Data?.data.videoDetails.thumbnails.length - 1
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
                        href={`/api/dl?url=${Url}&type=mp3&dltype=${
                          Data.api
                        }&bit=${e}&title=${encodeURIComponent(
                          Data?.data.videoDetails.title.replace(/[^\w\s]/gi, "")
                        )}`}
                        passHref
                        locale={false}
                      >
                        {/* <a className="text-blue-500 hover:text-blue-700"> */}
                        {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
                        <button
                          // onClick={() => {
                          //   openModal();
                          //   mergeBtn(e);
                          // }}
                          className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300"
                        >
                          Download
                        </button>
                        {/* </a> */}
                      </Link>
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
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
                      Data?.data.videoDetails.title.replace(/[^\w\s]/gi, "")
                    )}`}
                    passHref
                    locale={false}
                  > */}
              {/* <a className="text-blue-500 hover:text-blue-700"> */}
              {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
              {/* <button className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300">
                      Download
                    </button> */}
              {/* </a> */}
              {/* </Link>
                </td>
              </tr> */}
            </tbody>
          </table>
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
              {Data?.data.formats.map((e, index) => {
                return e.hasVideo == true && e.hasAudio == true ? (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-sm">
                      {e.mimeType.split(";")[0].split("/")[0] == "video" &&
                      "video"
                        ? "MP4"
                        : "audio" || "audio"
                        ? "MP3"
                        : ""}
                      <br />
                      {e.quality}
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
                          Data?.data.videoDetails.title.replace(/[^\w\s]/gi, "")
                        )}`}
                        passHref
                        // locale={false}
                      >
                        {/* <a className="text-blue-500 hover:text-blue-700"> */}
                        {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
                        <button className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300">
                          Download
                        </button>
                        {/* </a> */}
                      </Link>
                    </td>
                  </tr>
                ) : (
                  <tr key={index}></tr>
                );
              })}
              {/* <tr>
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
                    {/* <a className="text-blue-500 hover:text-blue-700"> */}
              {/* <DownloadIcon className="h-6 w-6 text-center m-auto" /> Download */}
              {/* <button className="p-1 pl-4 pr-4 bg-red-500 text-white text-lg rounded-md focus:border-4 border-blue-300">
                        Download
                      </button>
                    {/* </a> */}
              {/* </Link>
                </td>
              </tr> */}
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
  return (
    <div>{Data ? (Data.api == "youtubedl" ? youtubedl() : ytdl()) : ""}</div>
  );
};

export default Display;
