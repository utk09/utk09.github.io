import { TIMELINE } from "@site/src/data";
import clsx from "clsx";
import React from "react";

const WorkExperience: React.FC = () => {
  return (
    <div>
      <h3 className="section-title text-xl font-semibold text-slate-900 dark:text-white">
        Experience & Education
      </h3>
      <ul className="list-none ml-0 pl-0 mt-6 space-y-1">
        {TIMELINE.map((event, eventIdx) => (
          <li
            key={event.id}
            className="relative group"
            style={{ animationDelay: `${eventIdx * 100}ms` }}
          >
            {/* Connecting line */}
            {eventIdx !== TIMELINE.length - 1 && (
              <span
                className="absolute left-4 top-10 -ml-px h-full w-0.5 bg-slate-200 dark:bg-slate-700"
                aria-hidden="true"
              />
            )}

            {/* Timeline item */}
            <div className="relative flex gap-4 p-3 rounded-xl transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50">
              {/* Icon */}
              <span
                className={clsx(
                  event.iconBackground,
                  "shrink-0 h-8 w-8 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-slate-900 shadow-sm group-hover:scale-110 transition-transform duration-200",
                )}
              >
                <event.icon className="text-slate-800" size={16} />
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {event.content}{" "}
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-green-400 link-underline transition-colors duration-200"
                  >
                    {event.target}
                  </a>
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 custom-mono">
                  {event.date}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
