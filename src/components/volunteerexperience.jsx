import React from 'react';

const VolunteerExperience = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">VOLUNTEER EXPERIENCE</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">Leo Clubs</p>
            <p className="mt-2 text-md text-gray-500">Leo Club of Walkeshwar | Leo District 3231 A1 | Leo Multiple 3231</p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-rows-1 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">

              <div>
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">President, Leo Club of Walkeshwar</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, vel?
                </dd>
                <dt>
                  <p className="mt-8 mb-0 text-lg leading-6 font-medium text-gray-900">Director of Events, Leo District 3231 A1</p>
                </dt>
                <dd className="mt-2  mb-0 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, commodi!
                </dd>
                <dt>
                  <p className="mt-8 mb-0 text-lg leading-6 font-medium text-gray-900">Website Director, Leo Multiple 3231</p>
                </dt>
                <dd className="mt-2  mb-0 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, alias?
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerExperience;
