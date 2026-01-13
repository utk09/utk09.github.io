import Link from "@docusaurus/Link";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineRss } from "react-icons/hi";

const CustomFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Tutorials", to: "/tutorials" },
    { label: "Blogs", to: "/blogs" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/utk09",
      icon: <FaGithub size={18} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/utkarsh09/",
      icon: <FaLinkedin size={18} />,
    },
    {
      label: "Twitter",
      href: "https://twitter.com/utk0909",
      icon: <FaXTwitter size={18} />,
    },
    {
      label: "RSS Feed",
      href: "/blogs/rss.xml",
      icon: <HiOutlineRss size={18} />,
    },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="p-2 text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            &copy; {currentYear} Utkarsh Tiwari. Made with &hearts; using Docusaurus.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600">
            This website uses{" "}
            <a
              href="https://marketingplatform.google.com/intl/en_uk/about/analytics/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-600 dark:hover:text-slate-400 underline underline-offset-2"
            >
              Google Analytics
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
