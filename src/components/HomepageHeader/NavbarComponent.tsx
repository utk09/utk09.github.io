import Link from "@docusaurus/Link";
import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

type Theme = "light" | "dark";

const NavbarComponent: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") || "dark") as Theme;
    }
    return "dark";
  });
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setIsRotating(true);
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setTimeout(() => setIsRotating(false), 300);
  };

  return (
    <nav className="py-3 px-6 lg:px-8 max-w-md bg-slate-300/80 dark:bg-slate-800/80 backdrop-blur-nav shadow-lg rounded-full mt-6 mb-10 mx-auto flex justify-between items-center animate-fade-in">
      <Link
        className="text-xl md:text-2xl font-bold text-slate-50 hover:text-slate-300 transition-colors duration-200"
        to="/"
      >
        UT
      </Link>
      <div className="flex items-center gap-6">
        <div className="flex gap-4">
          <Link
            className="text-sm md:text-base text-slate-200 hover:text-white custom-mono link-underline transition-colors duration-200"
            to="/tutorials"
          >
            Tutorials
          </Link>
          <Link
            className="text-sm md:text-base text-slate-200 hover:text-white custom-mono link-underline transition-colors duration-200"
            to="/blogs"
          >
            Blogs
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          className="p-2 cursor-pointer rounded-full border-0 outline-none focus-ring bg-slate-700/50 hover:bg-slate-600/70 transition-all duration-200"
        >
          <div className={`transition-transform duration-300 ${isRotating ? "rotate-180" : ""}`}>
            {theme === "light" ? (
              <MdOutlineLightMode className="text-amber-300" size={20} />
            ) : (
              <MdOutlineDarkMode className="text-slate-300" size={20} />
            )}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
