import Link from "@docusaurus/Link";
import type { SocialLink } from "@site/src/types";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi";

type ProfileSectionProps = {
  siteConfig: {
    tagline: string;
  };
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ siteConfig }) => {
  const socialLinksArr: SocialLink[] = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/utkarsh09/",
      icon: <FaLinkedin size={22} />,
    },
    {
      name: "GitHub",
      link: "https://github.com/utk09",
      icon: <FaGithub size={22} />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/utk0909",
      icon: <FaXTwitter size={22} />,
    },
  ];

  return (
    <div className="flex flex-col items-center text-center py-8 animate-fade-in-up">
      {/* Portrait Image */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-green-500/20 dark:from-green-500/20 dark:to-blue-500/20 rounded-full blur-2xl scale-110" />
        <img
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-white/50 dark:ring-slate-700/50 shadow-xl hover-scale transition-transform duration-300"
          src="img/ut_portrait_image.png"
          loading="lazy"
          alt="Utkarsh Tiwari (UT)"
        />
      </div>

      {/* Name */}
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
        Utkarsh Tiwari
        <span className="block text-lg md:text-xl font-normal text-slate-500 dark:text-slate-400 mt-1 custom-mono">
          UT | utk09
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-md mb-8 tracking-wide">
        {siteConfig.tagline}
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-4 mb-6">
        {socialLinksArr.map((socialLink, index) => (
          <a
            key={socialLink.name}
            title={socialLink.name}
            aria-label={socialLink.name}
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover-scale transition-all duration-200 animate-fade-in delay-${(index + 1) * 100}`}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            {socialLink.icon}
          </a>
        ))}
        <Link
          to="/resume"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-white dark:text-slate-900 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 text-sm font-medium animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <HiOutlineDocumentText size={18} />
          Resume
        </Link>
      </div>

      {/* Email */}
      <p
        className="text-xs text-slate-500 dark:text-slate-500 custom-mono animate-fade-in"
        style={{ animationDelay: "500ms" }}
      >
        utkarsh[dot]t0298[at]gmail[dot]com
      </p>
    </div>
  );
};

export default ProfileSection;
