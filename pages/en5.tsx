import axios from "axios";
import { useState } from "react";

import About from "../components/About";
import download from "downloadjs";

import Display from "../components/display";
import { Adsense1, Adsense2, Adsense3 } from "../components/adsense";
import Layout from "../components/layout";
import { MetaProps } from "../types/layout";
import { useRouter } from "next/router";
import blogPosts from "../post/home.json";
import { GetStaticPropsContext } from "next";
import { env } from "process";
import { SiteDetails } from "../setup";
import Link from "next/link";

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
