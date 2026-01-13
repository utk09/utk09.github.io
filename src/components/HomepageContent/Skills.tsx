import { SKILLS } from "@site/src/data";
import React from "react";

const Skills: React.FC = () => {
  return (
    <div>
      <h3 className="section-title text-xl font-semibold text-slate-900 dark:text-white">Skills</h3>
      <div className="mt-6 space-y-6">
        {Object.entries(SKILLS).map(([category, skills], categoryIdx) => (
          <div key={category} style={{ animationDelay: `${categoryIdx * 50}ms` }}>
            <h4 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 custom-mono">
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, skillIdx) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all duration-200 cursor-default hover-scale-sm"
                  style={{
                    animationDelay: `${categoryIdx * 50 + skillIdx * 20}ms`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
