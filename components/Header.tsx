import ThemeSwitch from "./ThemeSwitch";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";
import { SiteDetails } from "../setup";

export default function Header() {
  let router = useRouter();
  return (
    <div className="dark:bg-gray-900 dark:border-gray-700 bg-gray-100 border-b-2 border-gray-200 w-full h-[4rem]">
      <div className="max-w-4xl mx-auto w-full p-3 flex justify-between">
        <Link href="/en7">
          <a className="font-bold my-auto">
            {SiteDetails.website_name}.
            <span className="text-red-600">{SiteDetails.domain_extension}</span>
          </a>
        </Link>

        {/* <a href="https://ko-fi.com/macedonga" className="ml-auto font-semibold rounded-lg dark:bg-gray-700 dark:text-white text-black bg-gray-300 py-2 px-4">
                    Dark
                </a> */}
        <div className="flex space-x-3">
          <ThemeSwitch />
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {router.locale.toLocaleUpperCase()}
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {router.locales.map((locale) => {
                    return (
                      <Link href={router.basePath} locale={locale} key={locale}>
                        <a>
                          {" "}
                          <Menu.Item>
                            <button
                              className={`${
                                locale == router.locale
                                  ? "bg-gray-600  text-white"
                                  : "text-gray-900"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              {locale.toUpperCase()}
                            </button>
                          </Menu.Item>
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>{" "}
    </div>
  );
}
