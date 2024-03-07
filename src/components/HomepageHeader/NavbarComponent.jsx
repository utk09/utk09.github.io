import React from "react";
import Link from "@docusaurus/Link";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const NavbarComponent = () => {
  // State to manage the current theme
  const [theme, setTheme] = React.useState("dark");

  // Effect hook to apply the theme on component mount
  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  // Function to toggle theme and update local storage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="py-2 px-6 lg:px-8 max-w-lg bg-slate-700 shadow-2xl rounded-full mt-4 mb-8 mx-auto flex justify-between items-center">
      <Link
        className="text-xl md:text-2xl font-bold text-slate-50 hover:text-slate-200 dark:hover:text-slate-200"
        to="/"
      >
        UT
      </Link>
      <div className="flex items-center">
        <div className="flex underline">
          <Link
            className="text-xs md:text-base text-slate-50 hover:text-slate-400 dark:hover:text-slate-400 custom-mono"
            to="/tutorials"
          >
            Tutorials
          </Link>
          <Link
            className="text-xs md:text-base text-slate-50 hover:text-slate-400 dark:hover:text-slate-400 custom-mono ml-4"
            to="/blogs"
          >
            Blogs
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          className="ml-4 cursor-pointer rounded-full border-0 outline-none focus:outline-none bg-slate-700 hover:bg-slate-600 dark:bg-slate-700 dark:hover:bg-slate-600"
        >
          {theme === "light" ? (
            <MdOutlineLightMode
              className="outline-none text-slate-50"
              size={24}
            />
          ) : (
            <MdOutlineDarkMode
              className="outline-none text-slate-50"
              size={24}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavbarComponent;
