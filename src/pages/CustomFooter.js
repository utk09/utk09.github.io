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
              to="/blog"
              className="text-sm leading-6 text-gray-200 hover:text-gray-400"
            >
              Blogs
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
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-slate-500">
          &copy; {new Date().getFullYear()} Utkarsh Tiwari. Made with &hearts;
          using Docusaurus.
        </p>
      </div>
    </footer>
  );
};

export default CustomFooter;
