import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageContent from "@site/src/components/HomepageContent";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import CustomFooter from "./CustomFooter";

const QuoteComponent = () => (
  <p className="custom-mono text-xs my-6 text-center">
    "If you get to a certain achievement/platform, it's your unsaid duty to help
    others reach the same level in lesser time." ~Anonymous
  </p>
);

const NavbarComponent = () => (
  <div className="py-2 px-6 lg:px-8 max-w-md bg-slate-700 shadow-2xl rounded-full mt-4 mb-8 mx-auto flex justify-between items-center">
    <Link
      className="text-xl md:text-2xl font-bold text-slate-50 hover:text-slate-200 dark:hover:text-slate-200"
      to="/"
    >
      UT
    </Link>
    <div className="flex underline">
      <Link
        className="text-slate-50 hover:text-slate-400 dark:hover:text-slate-400 custom-mono ml-4"
        to="/blog"
      >
        Blogs
      </Link>
      <Link
        className="text-slate-50 hover:text-slate-400 dark:hover:text-slate-400 custom-mono ml-4"
        to="/tutorials"
      >
        Tutorials
      </Link>
    </div>
  </div>
);

const ProfileSection = ({ siteConfig }) => {
  const socialLinksArr = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/utkarsh09/",
      icon: <FaLinkedin size={24} />,
    },
    {
      name: "GitHub",
      link: "https://github.com/utk09",
      icon: <FaGithub size={24} />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/utk0909",
      icon: <FaXTwitter size={24} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 text-center gap-y-4">
      <div className="md:col-span-4 col-span-12">
        <img
          className="w-72 h-72 mx-auto"
          src="img/ut_portrait_image.png"
          alt="Utkarsh Tiwari (UT)"
        />
      </div>
      <div className="md:col-span-8 col-span-12 my-auto md:px-4 pt-4 md:pt-0">
        <h1>Utkarsh Tiwari (UT | utk09)</h1>
        <p>{siteConfig.tagline}</p>
        <div className="flex justify-center space-x-4 mt-4">
          {socialLinksArr.map((socialLink) => (
            <a
              title={socialLink.name}
              aria-label={socialLink.name}
              key={socialLink.name}
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-slate-400"
            >
              {socialLink.icon}
            </a>
          ))}
          <Link
            to="/resume"
            className="text-slate-200 hover:text-slate-200 text-xl custom-mono"
          >
            Resume
          </Link>
        </div>
        <p className="text-sm mt-4">
          Email me: utkarsh[dot]t0298[at]gmail[dot]com
        </p>
      </div>
    </div>
  );
};

function HomepageHeader() {
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
