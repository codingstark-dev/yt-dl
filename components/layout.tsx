import React from "react";
import { MetaProps } from "../types/layout";
import Head from "./head";
import RouteNavBar from "./RouteNavBar";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import { Adsense1, Adsense2, Adsense3 } from "./../components/adsense";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
  navbar?: boolean;
};

const Layout = ({ children, customMeta, navbar }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <Header />
      {/* <RouteNavBar /> */}
      <hr />
      {/* {navbar ? "" : <RouteNavBar />} */}
      <hr />
      <main className="m-auto">{children}</main>
      {/* <Adsense3 /> */}
      <div className="mx-4">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
