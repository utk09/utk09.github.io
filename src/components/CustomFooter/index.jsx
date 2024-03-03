// @ts-check

import React from "react";
import Link from "@docusaurus/Link";

const CustomFooter = () => {
  return (
    <footer className="bg-slate-900">
      <div className="px-6 lg:px-8 pt-12 pb-4">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div className="pb-6">
            <Link
              to="/"
              className="text-sm leading-6 text-gray-200 hover:text-gray-400"
            >
              Home
            </Link>
          </div>
          <div className="pb-6">
            <Link
              to="/tutorials"
              className="text-sm leading-6 text-gray-200 hover:text-gray-400"
            >
              Tutorials
            </Link>
          </div>
          <div className="pb-6">
            <Link
              to="/blogs"
              className="text-sm leading-6 text-gray-200 hover:text-gray-400"
            >
              Blogs
            </Link>
          </div>
          <div className="pb-6">
            <Link
              to="https://dev.to/utk09"
              className="text-sm leading-6 text-gray-200 hover:text-gray-400"
            >
              Dev.to
            </Link>
          </div>
          <div className="pb-6">
            <Link
              to="https://medium.com/@utk09"
              className="text-sm leading-6 text-gray-200 hover:text-gray-400"
            >
              Medium
            </Link>
          </div>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-slate-500">
          &copy; {new Date().getFullYear()} Utkarsh Tiwari. Made with &hearts;
          using Docusaurus.
        </p>
        <p className="mt-10 text-center text-xs leading-5 text-slate-500">
          This website uses{" "}
          <a href="https://marketingplatform.google.com/intl/en_uk/about/analytics/">
            Google Analytics
          </a>{" "}
          to track user engagement.
        </p>
      </div>
    </footer>
  );
};

export default CustomFooter;
