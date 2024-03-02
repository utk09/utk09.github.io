import React from "react";
import Link from "@docusaurus/Link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

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

export default ProfileSection;
