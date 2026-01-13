import Link from "@docusaurus/Link";
import { FEATURED_POSTS } from "@site/src/data";
import React from "react";
import { HiOutlineArrowRight, HiOutlineCalendar } from "react-icons/hi";

const FeaturedPosts: React.FC = () => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="section-title text-xl font-semibold text-slate-900 dark:text-white">
          Recent Posts
        </h3>
        <Link
          to="/blogs"
          className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors duration-200"
        >
          View all
          <HiOutlineArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FEATURED_POSTS.map((post, index) => (
          <Link
            key={post.slug}
            to={`/blogs/${post.slug}`}
            className="group card p-5 hover-lift no-underline"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors duration-200 mb-2">
              {post.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
              {post.description}
            </p>

            {/* Date and Read More */}
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-1 custom-mono">
                <HiOutlineCalendar className="h-3.5 w-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-green-400 flex items-center gap-1 transition-colors duration-200">
                Read more
                <HiOutlineArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
