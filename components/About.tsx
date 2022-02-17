import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import blogPosts from "../post/about.json";
import { SiteDetails } from "../setup";

export default function About() {
  const { locale, locales, asPath } = useRouter();
  // let translateContent = async (content) => {
  //   try {
  //     let res = await axios.post(SiteDetails.website + "/api/translate", {
  //       lang: locale,
  //       content: content,
  //       page: "about",
  //     });

  //     // console.log(res.data);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // let newFaq = [];
  // const faq = [
  //   {
  //     title: "Where are videos saved after being downloaded?",
  //     description:
  //       'It depends on the OS and Browser you are using, but usually all videos are saved under the "Downloads" folder on Windows and Mac. You can also press CTRL+J in your Browser to view your download history.',
  //   },
  //   {
  //     title: "Why is the video playing instead of downloading?",
  //     description:
  //       "That's a normal thing that might happen, especially on browsers that are not Chrome. To solve this issue, right click the video on the new tab, then click \"Save as...\" and choose the location you'd like to save the video to.",
  //   },
  //   {
  //     title: "Can I download Live Facebook videos?",
  //     description:
  //       "Yes, you can download Facebook Live videos but only after they finish streaming.",
  //   },
  //   {
  //     title: "Does YutMp3 keep a copy of downloaded videos?",
  //     description:
  //       "YutMp3 doesn't store videos neither we keep copies of downloaded videos. All videos are hosted on Youtube'sservers.",
  //   },
  //   {
  //     title: "Does YutMp3 work on Android/iOS?",
  //     description: "YutMp3 works perfectly on all mobile devices!",
  //   },
  // ];
  // useEffect(() => {
  //   faq.forEach(async (faqItem, i) => {
  //     let des = await translateContent(faqItem.description);
  //     let title = await translateContent(faqItem.title);
  //     newFaq.push({ title: title, description: des });
  //     console.log(newFaq);
  //   });
  //   return () => {
  //     newFaq;
  //   };
  // }, [newFaq]);
  let faq = null;
  blogPosts.posts
    .filter((p) => p.locale === locale)
    .map((blogPost, i) => {
      faq = blogPost.content;
    });

  // let postData = Object.assign({}, ...(await translateContent()));

  // console.log(newFaq);

  return (
    <div className="my-16">
      <div className="w-full max-w-lg mx-auto dark:bg-gray-900 dark:border-gray-700 bg-gray-100 border-2 border-gray-200 rounded-lg">
        <div className="rounded-t-md font-semibold p-2 dark:bg-gray-700 bg-gray-100 flex">
          <QuestionMarkCircleIcon className="h-6 w-6 mr-1" /> Frequently Asked
          Questions
        </div>
        <div className="p-4 dark:border-gray-700 border-t-2 border-gray-200 grid gap-y-4">
          {faq?.map((item, index) => (
            <div key={index}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={
                        "flex justify-between w-full px-4 py-2 text-sm font-medium text-left dark:bg-gray-700 dark:text-white text-black bg-gray-300 " +
                        (open ? "rounded-t-lg" : "rounded-lg")
                      }
                    >
                      <span>{item.title}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="p-4 text-sm dark:bg-gray-800 dark:text-white text-black bg-gray-200 rounded-b-lg">
                      {item.description}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// export async function getStaticProps(context: GetStaticPropsContext) {
//   let translateContent = async () => {
//     try {
//       let res = await axios.post(SiteDetails.website + "/api/translate", {
//         lang: context.locale,
//         content: [blogPosts.posts[0].content],
//       });

//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   // console.log(Object.assign({}, ...(await translateContent())));

//   let postData = Object.assign({}, ...(await translateContent()));
//   // let postData = undefined;
//   // blogPosts.posts
//   //   .filter((p) => p.locale === context.locale)
//   //   .map((blogPost, i) => {
//   //     return (postData = blogPost);
//   // });
//   if (!postData) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       postData,
//     },
//   };
// }
