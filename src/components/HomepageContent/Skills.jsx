// @ts-check
import React from "react";
import { SKILLS } from "./constants";

const Skills = () => {
  return (
    <>
      <h3 className="text-lg font-semibold">Skills</h3>
      <ul className="list-none mt-4 ml-0 pl-0">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <li key={category} className="mb-4">
            <h4 className="text-sm font-medium mb-2 custom-mono">{category}</h4>
            <ul className="list-none flex flex-wrap gap-2 ml-0 pl-0">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="px-2 py-1 font-semibold bg-amber-100 text-amber-950 rounded-md text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
