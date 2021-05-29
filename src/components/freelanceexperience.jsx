import React from 'react';

const FreelanceExperience = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">FREELANCE EXPERIENCE</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">Web Development</p>
            {/* <p className="mt-4 text-lg text-gray-500">Software Development Engineer</p> */}
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-rows-1 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">

              <div>
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">Maharashtra Tour Organisers' Association (MTOA)</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Built a 12+ pages website for Maharashtra Tour Organisers' Association. You can find the code on
                  <span>
                    <a className="font-semibold hover:text-indigo-600" href="https://github.com/mtoaofficial/mtoa-website-2020" rel="noreferrer" target="_blank">{" "}Github</a>
                  </span>
                </dd>

                <dt>
                  <p className="mt-8 mb-0 text-lg leading-6 font-medium text-gray-900">get Mentored</p>
                </dt>
                <dd className="mt-2  text-base text-gray-500">
                  getMentored is an opinionated, personally curated list of learning paths for individuals who want to get started but are overwhelmed by the huge amount of resources that are available. Check out the website
                   <span>
                    <a className="font-semibold hover:text-indigo-600" href="https://getmentored.courses/" rel="noreferrer" target="_blank">{" "}@getMentored.courses
                    </a>
                  </span>
                </dd>
              </div>

              {/* <div>

              </div> */}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelanceExperience;
