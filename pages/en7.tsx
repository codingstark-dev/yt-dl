import axios from "axios";
import { useState } from "react";

import Display from "../components/display";
import { Adsense1, Adsense2, Adsense3 } from "../components/adsense";
import Layout from "../components/layout";
import { MetaProps } from "../types/layout";
import { useRouter } from "next/router";
import blogPosts from "../post/home.json";
import { GetStaticPropsContext } from "next";


export default function Home({ postData }) {
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [ShowError, setShowError] = useState(false);
  const [Url, setUrl] = useState("");
  const [TimeoutError, setTimeoutError] = useState(null);
  const { locale, locales, asPath } = useRouter();

  let tempUrl = "";
  // const downloader = (e) => {
  //   fetch(
  //     `http://localhost:3000/api/download/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvzvkeOIDFuw&title=Powfu%20sleeping%20%20popular%20girl%20typical%20boy%20Official%20Audio`
  //   )
  //     .then((res) => res.blob())
  //     .then((blob) => {
  //       const sizeInBytes = blob.size;
  //       console.log("sizeInBytes: ", sizeInBytes);
  //       if (sizeInBytes <= 0) {
  //       } else {
  //         download(blob, `${"title"}.mp4`, "video/mp4");
  //       }
  //     });
  // };
  const setErrorData = (err) => {
    if (TimeoutError) {
      TimeoutError.map((e) => clearTimeout(e));
    }

    setLoading(false);
    let response = err.response?.data;
    if (response && response.error) {
      document.getElementById("url-input").classList.add("shake");
      let timeout = setTimeout(() => {
        document.getElementById("url-input").classList.remove("shake");
      }, 1000);

      let timeout1 = setTimeout(() => {
        setShowError(false);
      }, 5000);

      setTimeoutError([timeout, timeout1]);
      setShowError(true);
      return setError(response.error);
    }
  };

  const setErrorD = (error) => {
    if (TimeoutError) {
      TimeoutError.map((e) => clearTimeout(e));
    }

    setLoading(false);
    if (error) {
      document.getElementById("url-input").classList.add("shake");
      let timeout = setTimeout(() => {
        document.getElementById("url-input").classList.remove("shake");
      }, 1000);

      let timeout1 = setTimeout(() => {
        setShowError(false);
      }, 5000);

      setTimeoutError([timeout, timeout1]);
      setShowError(true);
      return setError(error);
    }
  };
  // const mergeBtn = async () => {
  //   axios.get(
  //     `/api/dl?url=${Url}7bit=${}&type=mp4&title=${encodeURIComponent(
  //       "sdasdsad"
  //     )}`
  //   );
  //   // `/api/dl?url=${encodeURIComponent(
  //   //   "https://rr3---sn-cvh7knle.googlevideo.com/videoplayback?expire=1645496895&ei=3vUTYpftOfefg8UPsryi-Ac&ip=103.124.109.75&id=o-AHBPBz0W113TcIB9L6aPNxKLFTEMCTO291ANMIc1ljcu&itag=136&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=9P&mm=31%2C29&mn=sn-cvh7knle%2Csn-cvh76nls&ms=au%2Crdu&mv=m&mvi=3&pl=24&gcr=in&initcwndbps=970000&spc=4ocVC87pBiLtoRYHuQFOQ8Ykj-79&vprv=1&mime=video%2Fmp4&ns=HRQpm2y_y6GVrqNYk6fDvfYG&gir=yes&clen=19099235&dur=173.916&lmt=1627682196763754&mt=1645474845&fvip=4&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=BAHOG37AH3NPng&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAIFXZ3Dd9CY2ey7_OfRoeKEBtNUyBWqrCOqWdYhtm692AiBnmlcNSf5ghW6kZ-1G485zxNObJfnkT6xnwxEkeYRiyw%3D%3D&sig=AOq0QJ8wRQIgXs5hO_TElQxgqjAXeZKAUnlHGgZq4jvhZw_5pFTNwFkCIQCAoPSU9b6kBueprkzYtTtDFnQHCImko8cGJJUKErp16w%3D%3D"
  //   // )}&type=mp3&title=${encodeURIComponent("title")}`;
  //   const responsevid = await fetch(
  //     `/api/dl?url=${encodeURIComponent(
  //       "https://rr4---sn-cvh76nls.googlevideo.com/videoplayback?expire=1645583403&ei=y0cVYprMDuO13LUPntiOuA4&ip=103.124.109.72&id=o-AHv8MI1u0BZe-7VW8YDdoEI1RxnTrE2ZZsylWyqI1dfW&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=9P&mm=31%2C29&mn=sn-cvh76nls%2Csn-cvh7knle&ms=au%2Crdu&mv=m&mvi=4&pl=24&gcr=in&initcwndbps=812500&spc=4ocVC45HWJnPxieQ_DLC9RJuta9z&vprv=1&mime=video%2Fmp4&ns=I_mI5A2_E0r2XFAVnm07RwwG&gir=yes&clen=10638007&dur=173.916&lmt=1627682196876997&mt=1645561491&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=0ihB6DtV2xyxxA&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAKsWT0knZMQSAr_DZrFUmhpLq9eLk34TPwqELwbcBEJ3AiEAw3BaBvWFwF5I5rpjr9p7MpXLX6BlRSn1viwTO2K9xl4%3D&sig=AOq0QJ8wRAIgK963wTnE3b0Ct9AV6WxZtNSIERy1aZw2VB6ANUs49rkCIEstLfXnXifySU39S_966CbSua2FDl0GP0wP1e-ucwOW"
  //     )}&type=mp4&title=${encodeURIComponent("s")}`
  //   );
  //   const videoBuffer = await responsevid.arrayBuffer();
  //   const response = await fetch(
  //     `/api/dl?url=${encodeURIComponent(
  //       "https://rr4---sn-cvh76nls.googlevideo.com/videoplayback?expire=1645583403&ei=y0cVYprMDuO13LUPntiOuA4&ip=103.124.109.72&id=o-AHv8MI1u0BZe-7VW8YDdoEI1RxnTrE2ZZsylWyqI1dfW&itag=140&source=youtube&requiressl=yes&mh=9P&mm=31%2C29&mn=sn-cvh76nls%2Csn-cvh7knle&ms=au%2Crdu&mv=m&mvi=4&pl=24&gcr=in&initcwndbps=812500&spc=4ocVC45HWJnPxieQ_DLC9RJuta9z&vprv=1&mime=audio%2Fmp4&ns=I_mI5A2_E0r2XFAVnm07RwwG&gir=yes&clen=2816517&dur=173.987&lmt=1627680993600045&mt=1645561491&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=0ihB6DtV2xyxxA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgEFiIuN7b-1R67-UTFzhRIawSMhUDT3UXXoPUFjMJgOsCIQCot4EExkrCu4Ke9styoVQV2rZzNNkw-mZbczAxfJYefw%3D%3D&sig=AOq0QJ8wRAIgbkjsH1s-7mIrT8IO5qffpUNgGUFAalwIR1zlQ4KfGLECIAjyVnOjUzQp3X_SvYIrGUhD3Oyg6kDrFG89xQRX8p3S"
  //     )}&type=mp3&title=${encodeURIComponent("s")}`
  //   );
  //   console.log(response.text);
  //   const audioBuffer = await response.arrayBuffer();
  //   console.log(videoBuffer, audioBuffer);
  //   if (!ffmpeg.isLoaded()) {
  //     await ffmpeg.load();
  //   }
  //   if (videoBuffer && audioBuffer) {
  //     ffmpeg.FS("writeFile", "test.mp4", new Uint8Array(videoBuffer));
  //     ffmpeg.FS("writeFile", "test.mp3", new Uint8Array(audioBuffer));
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
  //     console.log(URL.createObjectURL(new Blob([data], { type: "video/mp4" })));
  //   }
  // };
  const fetchData = async () => {
    setLoading(true);
    // let urlObj;
    // try {
    //   urlObj = new URL(Url);
    // } catch (err) {
    //   setErrorData("Invalid URL");
    // }
    // const isInstagramUrl = instagramUrlChecker(Url);
    let res;
    // if (isInstagramUrl) {
    tempUrl = Url;
    try {
      res = await axios.post("/api/yt", {
        url: Url,
      });
      // await fetch('url')
      //   .then((r) => r.arrayBuffer())
      //   .then((buf) => `data:image/${type};base64,` + buf.toString("base64"));
      // console.log(
      //   res.data
      // );
      if (res.data == null && res.data?.formats == undefined) {
        setErrorD("Invalid URL");
      } else {
        setData(res.data);
        // setUrl("");
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      return setErrorData(err);
    }
    // }else{
    //    setLoading(false);
    //    return setErrorData("err");
    // }
    setLoading(false);
  };
  const customMeta: MetaProps = {
    title: postData.title,
    description: postData.description,
  };
  return (
    <Layout customMeta={customMeta}>
      <div className="container">
        {/* <Head>
          <title>YutMp3 - YutMp3</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <RouteNavBar /> */}
        <div className="max-w-4xl mx-auto w-full p-4">
          {/* <div
          onClick={() => {
       
          }}
          className="my-8 rounded-lg p-2 bg-gray-100 border-2 border-gray-200 text-sm dark:bg-gray-900 dark:border-gray-700 max-w-max mx-auto alert cursor-pointer"
        >
          <span className="lg:inline-flex hidden uppercase p-1 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-md font-bold text-xs mr-2">
            Info
          </span>
          hello <b className="alert_link transition-all">Check it out on codingstark</b>
        </div> */}
          <h1 className="text-3xl font-bold text-center">{postData.heading}</h1>
          {/* <button onClick={mergeBtn}>🚀🚀🚀🚀🚀</button> */}
          {/* <Adsense1 /> */}
          {/* {!Data && ( */}
          <div
            id="url-input"
            className="inline-flex w-full mx-auto p-2 dark:bg-gray-900  bg-gray-100 border-2 border-red-500 rounded-lg cursor-text mt-4"
            onClick={() => {
              document.getElementById("fb-input").focus();
            }}
          >
            <input
              id="fb-input"
              onChange={(e) => {
                setUrl(e.target.value);
                // tempUrl = e.target.value;
              }}
              value={Url}
              autoComplete="off"
              className="w-full bg-transparent focus:outline-none px-2 mr-2"
              placeholder="Insert Youtube video URL"
            />
            <button
              onClick={fetchData}
              className=" rounded-lg  text-white bg-red-500 py-2 px-4"
            >
              {Loading && (
                <svg
                  className="animate-spin h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {!Loading && "CONVERT"}
            </button>
          </div>
          {/* )} */}
          {Data && Data?.formats?.length != 0 ? (
            <Display Data={Data} Url={Url}></Display>
          ) : (
            <div />
          )}
          <p
            className={
              "mt-4 text-red-400 font-semibold text-center transition-all " +
              (ShowError ? "opacity-1" : "opacity-0")
            }
          >
            {Error || "\u00A0"}
          </p>{" "}
          {/* <Adsense2 /> */}
          {blogPosts.posts
            .filter((p) => p.locale === locale)
            .map((blogPost, i) => {
              return (
                <div
                  key={i}
                  className="prose dark:prose-invert lg:prose-xl"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              );
            })}
          {/* {blogPosts.posts
            .filter((p) => p.locale === locale)
            .map((blogPost, i) => {
              return ( */}
          {/* <div
            className="prose dark:prose-invert lg:prose-xl"
            dangerouslySetInnerHTML={{
              __html: postData.content
                // .replaceAll(" / span>", "<span>")
                .replaceAll("</ ", "</")
                .replaceAll("< / ", "</")
                .replaceAll(" >", ">")
                .replaceAll("</ STRY>", "</strong>")
                .replaceAll("</STRY>", "</strong>")
                .replaceAll("</STRAND>", "</strong>")
                .replaceAll("</P>", "</p>")
                .replaceAll("<P>", "<p>")
                .replaceAll(" 4 / span> ", "4 </span>")
                .replaceAll("<Span>", "<span>")
                .replaceAll("</Span>", "<span>")
                .replaceAll("& nbsp;", "&nbsp;")
                .replaceAll("salin", "salin </strong>"),
            }}
          /> */}
          {/* //   ); */}
          {/* // })} */}
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps(context: GetStaticPropsContext) {
  // let translateContent = async () => {
  //   try {
  //     let res = await axios.post(SiteDetails.website +"/api/translate", {
  //       lang: context.locale,
  //       content: [
  //         { content: blogPosts.posts[0].content },
  //         { title: blogPosts.posts[0].title },
  //         { description: blogPosts.posts[0].description },
  //         { heading: blogPosts.posts[0].heading },
  //       ],
  //     });

  //     // console.log(
  //     //   res.data

  //     // );
  //     return res.data;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // console.log(Object.assign({}, ...(await translateContent())));

  // let postData = Object.assign({}, ...(await translateContent()));
  let postData = undefined;
  blogPosts.posts
    .filter((p) => p.locale === context.locale)
    .map((blogPost, i) => {
      return (postData = blogPost);
    });
  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
    },
  };
}
// e
