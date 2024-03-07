// @ts-check

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import QuoteComponent from "./QuoteComponent";
import NavbarComponent from "./NavbarComponent";
import ProfileSection from "./ProfileSection";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="mx-auto min-w-full bg-slate-200 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex justify-center transition duration-300">
      <div className="max-w-6xl mt-2 mb-4 px-5">
        <QuoteComponent />
        <NavbarComponent />
        <ProfileSection siteConfig={siteConfig} />
      </div>
    </div>
  );
}
