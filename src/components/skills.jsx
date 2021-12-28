import React from 'react';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <>
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-gray-500 text-xl font-medium uppercase tracking-wide">Skills</h2>
            <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => (
                <li className="col-span-1 flex shadow-sm rounded-md" key={skill.id}>
                  <div className={`flex-shrink-0 flex items-center justify-center w-16 bg-${skill.bgColor} text-sm font-medium`}>
                    <img className={`bg-${skill.bgColor}`} loading="lazy" src={skill.img} alt={skill.alt} width="100%" height="100%" />
                  </div>
                  <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                    <div className="flex-1 px-4 py-2 text-sm truncate">
                      <span className="text-gray-900 font-medium hover:text-gray-600">{`${skill.name}`}</span>
                      <p className="text-gray-500">{`${skill.level}`}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
