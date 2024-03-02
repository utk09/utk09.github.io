// @ts-check
import React from "react";
import { TIMELINE } from "./constants";
import clsx from "clsx";

const WorkExperience = () => {
  return (
    <>
      <h3 className="text-lg font-semibold">Experience & Education</h3>
      <ul className="list-none ml-0 pl-0">
        {TIMELINE.map((event, eventIdx) => (
          <li key={event.id} className="relative pb-8">
            {eventIdx !== TIMELINE.length - 1 && (
              <span
                className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 -z-20"
                aria-hidden="true"
              />
            )}
            <div className="flex space-x-3">
              <span
                className={clsx(
                  event.iconBackground,
                  "h-8 w-8 rounded-full flex items-center justify-center ring-2 ring-white"
                )}
              >
                <event.icon className="text-slate-900" size={20} />
              </span>
              <div className="min-w-0 flex-1 pt-1.5">
                <p className="text-sm">
                  {event.content}{" "}
                  <a href={event.href} className="font-medium">
                    {event.target}
                  </a>
                  <span className="block text-right text-sm">{event.date}</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkExperience;
