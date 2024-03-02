import React from "react";
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageContent from "@site/src/components/HomepageContent";
import CustomFooter from "@site/src/components/CustomFooter";

export default function Home() {
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
