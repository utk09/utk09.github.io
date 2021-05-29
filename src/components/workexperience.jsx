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
            {/* <p className="mt-1 text-lg text-gray-500">Analytics COE</p> */}
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-rows-1 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">

              <div>
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">Analytics COE</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  As a part of the Jio Analytics COE Team, I'm working with Big Data tools like Hadoop, Kafka, NiFi, Spark, ZoomData and SQL.
                </dd>
                <dt>
                  <p className="mt-8 mb-0 text-lg leading-6 font-medium text-gray-900">User Acceptance Testing</p>
                </dt>
                <dd className="mt-2  mb-0 text-gray-500">
                  As the testing Team Lead for JioMeet, I managed a team of 30 people and directly communicated with the Design & Development team. Worked with two project management software - Rational by IBM and DevOps by Microsoft.
                  <br />
                  Started an informative technical seminar session called Brown Bag Fridays and conducted seminars on Machine Learning, Data Science, Web Development, etc.
                </dd>
              </div>

              {/* <div className="relative">

              </div> */}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
