// @ts-check

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import QuoteComponent from "./QuoteComponent";
import NavbarComponent from "./NavbarComponent";
import ProfileSection from "./ProfileSection";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="mx-auto min-w-full bg-slate-900 text-slate-50 flex justify-center">
      <div className="max-w-6xl mt-2 mb-4 px-5">
        <QuoteComponent />
        <NavbarComponent />
        <ProfileSection siteConfig={siteConfig} />
      </div>
    </div>
  );
}
