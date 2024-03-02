// @ts-check

import React from "react";
import { skills, timeline } from "./constants";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

export default function HomepageContent() {
  return (
    <div>
      <section className="about-me">
        <p className="leading-6">
          I am a Software Developer at Citigroup, UK, and celebrated as one of
          the MLH Top 50 in 2023. Beyond my primary role, I dedicate myself as
          an MLH Coach and Technical Program Associate, fostering growth and
          innovation within the tech community. A proud alumnus of Newcastle
          University, I graduated with distinction, holding an MSc in Computer
          Science. My technical foundations lie in JavaScript, TypeScript,
          React, and Python. With a rich background from a previous tenure as an
          SDE at Reliance Jio in India, my diverse skills and passion for
          technology equip me to face intricate challenges and deliver creative
          solutions effectively.
        </p>
      </section>
      <hr className="my-8" />
      <div className="md:grid md:grid-cols-12 gap-2">
        <section className="work-experience md:col-span-6">
          <WorkExperience />
        </section>
        <div className="hidden md:block md:col-span-1 mx-0 px-0">
          <div className="h-full w-px bg-gray-200 mx-auto" />
        </div>
        <hr className="my-8 block md:hidden" />
        <section className="skills md:col-span-5">
          <Skills />
        </section>
      </div>
    </div>
  );
}
