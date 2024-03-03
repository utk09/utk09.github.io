import React from "react";
import * as Cronitor from "@cronitorio/cronitor-rum";
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageContent from "@site/src/components/HomepageContent";
import CustomFooter from "@site/src/components/CustomFooter";

export default function Home() {
  React.useEffect(() => {
    // Load the Cronitor tracker once in your app
    Cronitor.load("145f029f6766bab393d89fc3b444d4c4");
    Cronitor.track("PageView");
  }, []);

  return (
    <>
      <HomepageHeader />
      <main className="max-w-7xl mx-auto justify-center mt-10 mb-20 px-10 overflow-hidden">
        <HomepageContent />
      </main>
      <CustomFooter />
    </>
  );
}
