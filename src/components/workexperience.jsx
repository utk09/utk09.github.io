import React from 'react';

const WorkExperience = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">WORK EXPERIENCE</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">Jio Platforms Limited</p>
            <p className="mt-4 text-lg text-gray-500">Software Development Engineer</p>
            <p className="mt-1 text-lg text-gray-500">Analytics COE</p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">

              <div className="relative">
                <dt>
                  <p className=" text-lg leading-6 font-medium text-gray-900">Invite team members</p>
                </dt>
                <dd className="mt-2  text-base text-gray-500">
                  You can manage phone, email and chat conversations all from a single mailbox.
              </dd>
              </div>

              <div className="relative">
                <dt>
                  <p className=" text-lg leading-6 font-medium text-gray-900">List view</p>
                </dt>
                <dd className="mt-2  text-base text-gray-500">
                  You can manage phone, email and chat conversations all from a single mailbox.
              </dd>
              </div>

              <div className="relative">
                <dt>
                  <p className=" text-lg leading-6 font-medium text-gray-900">Keyboard shortcuts</p>
                </dt>
                <dd className="mt-2  text-base text-gray-500">
                  You can manage phone, email and chat conversations all from a single mailbox.
              </dd>
              </div>

              <div className="relative">
                <dt>
                  <p className=" text-lg leading-6 font-medium text-gray-900">Calendars</p>
                </dt>
                <dd className="mt-2  text-base text-gray-500">
                  You can manage phone, email and chat conversations all from a single mailbox.
              </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
