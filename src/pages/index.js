import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageContent from "@site/src/components/HomepageContent";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="mx-auto min-w-full bg-slate-900 text-slate-50 flex justify-center">
      <div className="max-w-6xl my-2 px-5">
        <p className="custom-mono text-xs my-6">
          "If you get to a certain achievement/platform, it's your unsaid duty
          to help others reach the same level in lesser time." ~Anonymous
        </p>
        <div className="py-2 px-6 lg:px-8 max-w-md bg-slate-700 shadow-2xl rounded-full mt-4 mb-8 mx-auto flex justify-between items-center">
          <Link
            className="text-xl md:text-2xl font-bold text-slate-50 hover:text-emerald-200"
            to="/"
          >
            UT
          </Link>

          <Link
            className="text-slate-50 hover:text-blue-100 dark:hover:text-blue-100 text-base custom-mono"
            to="/blog"
          >
            Blogs
          </Link>

          <Link
            className="text-slate-50 hover:text-blue-100 dark:hover:text-blue-100 text-base custom-mono"
            to="https://github.com/utk09"
          >
            GitHub
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 text-center">
          <div className="col-span-4">
            <img
              className="w-72 h-72"
              src="img/ut_portrait_image.png"
              alt="Utkarsh Tiwari (UT)"
            />
          </div>
          <div className="col-span-8 my-auto md:px-4 pt-4 md:pt-0">
            <h1>{siteConfig.title}</h1>
            <p>{siteConfig.tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HomepageHeader />
      <main className="max-w-7xl mx-auto justify-center my-10 px-10">
        <HomepageContent />
      </main>
    </>
  );
}
