import React from 'react';
import ButtonCustom from './buttoncustom';


const Skills = () => {
  return (
    <>
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-gray-500 text-xl font-medium uppercase tracking-wide">Skills</h2>
            {/* Row 1 */}
            <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Html Css */}
              <li className="col-span-1 flex shadow-sm rounded-md">
                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-teal-800 text-sm font-medium">
                  <img src="/images/html-css-logo.png" alt="html-css-logo" width="100%" height="100%" />
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <span className="text-gray-900 font-medium hover:text-gray-600">HTML &amp; CSS</span>
                    <p className="text-gray-500">Proficient</p>
                  </div>
                </div>
              </li>

              {/* Javascript */}
              <li className="col-span-1 flex shadow-sm rounded-md">
                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-amber-300 text-sm font-medium">
                  <img src="/images/javascript-logo.png" alt="javascript-logo" width="100%" height="100%" />
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <span className="text-gray-900 font-medium hover:text-gray-600">JavaScript</span>
                    <p className="text-gray-500">Proficient</p>
                  </div>
                </div>
              </li>

              {/* React */}
              <li className="col-span-1 flex shadow-sm rounded-md">
                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-indigo-700 text-sm font-medium">
                  <img src="/images/react-logo.png" alt="reactjs-logo" width="100%" height="100%" />
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <span className="text-gray-900 font-medium hover:text-gray-600">React</span>
                    <p className="text-gray-500">Proficient</p>
                  </div>
                </div>
              </li>

              {/* Nodejs */}
              <li className="col-span-1 flex shadow-sm rounded-md">
                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-emerald-800 text-sm font-medium">
                  <img src="/images/nodejs-logo.png" alt="nodejs-logo" width="100%" height="100%" />
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <span className="text-gray-900 font-medium hover:text-gray-600">Node.js</span>
                    <p className="text-gray-500">Beginner</p>
                  </div>
                </div>
              </li>
            </ul>

            {/* Row 2 */}
            <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Bootstrap */}
              <li className="col-span-1 flex shadow-sm rounded-md">
                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-violet-300 text-sm font-medium">
                  <img src="/images/bootstrap-logo.png" alt="bootstrap-logo" width="100%" height="100%" />
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <span className="text-gray-900 font-medium hover:text-gray-600">Bootstrap</span>
                    <p className="text-gray-500">Proficient</p>
                  </div>
                </div>
              </li>

              {/* Tailwind CSS */}
              <li className="col-span-1 flex shadow-sm rounded-md">
                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-teal-100 text-sm font-medium">
                  <img src="/images/tailwindcss-logo.png" alt="tailwindcss-logo" width="100%" height="100%" />
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <span className="text-gray-900 font-medium hover:text-gray-600">Tailwind CSS</span>
                    <p className="text-gray-500">Beginner</p>
                  </div>
                </div>
              </li>

              {/* Google Analytics */}
              <li className="col-span-1 flex shadow-sm rounded-md">
                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-yellow-800 text-sm font-medium">
                  <img src="/images/google-analytics-logo.png" alt="googleAnalytics-logo" width="100%" height="100%" />
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <span className="text-gray-900 font-medium hover:text-gray-600">Google Analytics</span>
                    <p className="text-gray-500">Proficient</p>
                  </div>
                </div>
              </li>

              {/* Nodejs */}
              <li className="col-span-1 flex shadow-sm rounded-md">
                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-blue-200 text-sm font-medium">
                  <img src="/images/wordpress-logo.png" alt="wordpress-logo" width="100%" height="100%" />
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <span className="text-gray-900 font-medium hover:text-gray-600">WordPress</span>
                    <p className="text-gray-500">Beginner</p>
                  </div>
                </div>
              </li>
            </ul>

            <ButtonCustom />

          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
