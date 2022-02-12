import Link from "next/link";
import { SiteDetails } from "../setup";
export default function Footer() {
  return (
    <div className="dark:bg-gray-900 dark:border-gray-700 bg-gray-100 border-t-2 border-gray-200 w-full mt-auto p-4">
      <p className="text-center">
        <Link href="/" locale={false}>
          <a className="font-bold my-auto text-center">
            {SiteDetails.website_name}.
            <span className="text-red-600">{SiteDetails.domain_extension}</span>
          </a>
        </Link>
      </p>
      <p className="max-w-4xl mx-auto text-center text-xs p-2 pb-0">
        <a
          href="/privacy"
          className="transition-all text-red-500 hover:text-red-400 decoration-dotted underline decoration-2 decoration-red-500"
        >
          Privacy policy
        </a>{" "}
        or{" "}
        <a
          href={`mailto:${SiteDetails.email}`}
          className="transition-all text-red-500 hover:text-red-400 decoration-dotted underline decoration-2 decoration-red-500"
        >
          Contact us
        </a>
      </p>
      <p className="max-w-4xl mx-auto text-center text-xs p-2">
        YutMp3 <b>does not host any videos on its servers</b>. All videos that
        you download are downloaded from Youtube's CDNs .
        YutMp3 is a Social Media Services website and is not associated by any
        means to Youtube, and it doesn't have
        anything to do with Google, Inc.
        <br />
        <a
          href="/disclaimer"
          className="transition-all text-red-500 hover:text-red-400 decoration-dotted underline decoration-2 decoration-red-500"
        >
          Read the full disclaimer
        </a>
      </p>
      {/* <div className="flex justify-center">
        <hr className="w-24 opacity-50 text-center" />
      </div> */}
      {/* <div className="max-w-5xl px-1 mx-auto text-center text-xs">
        Developed By
        <span className="text-red-500 font-bold">
          <a href="https://codingstark.com" rel="sponsored"> */}
            {" "}
            {/* */}CodingStark
          {/* </a>{" "} */}
        {/* // </span>{" "} */}
        {/* ade with */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500 inline"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
        in India
      </div> */}
      <div className="max-w-5xl px-3 mx-auto text-center opacity-70 text-xs">
        © 2020-2022 {SiteDetails.website_name}
        <span className="text-red-500 font-bold">
          .{SiteDetails.domain_extension}
        </span>
      </div>
    </div>
  );
}
