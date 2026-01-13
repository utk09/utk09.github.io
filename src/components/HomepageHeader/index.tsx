import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";

import NavbarComponent from "./NavbarComponent";
import ProfileSection from "./ProfileSection";
import QuoteComponent from "./QuoteComponent";

const HomepageHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="relative min-w-full bg-linear-to-b from-slate-100 to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)]" />

      <div className="relative max-w-5xl mx-auto px-6 py-8">
        <QuoteComponent />
        <NavbarComponent />
        <ProfileSection siteConfig={siteConfig} />
      </div>
    </header>
  );
};

export default HomepageHeader;
