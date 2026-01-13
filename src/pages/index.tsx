import * as Cronitor from "@cronitorio/cronitor-rum";
import CustomFooter from "@site/src/components/CustomFooter";
import HomepageContent from "@site/src/components/HomepageContent";
import HomepageHeader from "@site/src/components/HomepageHeader";
import React, { useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    Cronitor.load("145f029f6766bab393d89fc3b444d4c4");
    Cronitor.track("PageView");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
      <HomepageHeader />
      <main className="flex-1 max-w-5xl w-full mx-auto py-16 px-6">
        <HomepageContent />
      </main>
      <CustomFooter />
    </div>
  );
};

export default Home;
