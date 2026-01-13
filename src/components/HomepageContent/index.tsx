import { SectionWrapper } from "@site/src/components/common";
import React from "react";

import CustomForm from "./CustomForm";
import FeaturedPosts from "./FeaturedPosts";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

const HomepageContent: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* About Section */}
      <SectionWrapper>
        <section className="about-me">
          <h2 className="section-title text-xl font-semibold text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
            I am an FX UI Developer (AVP) at Barclays, previously a SDE at Citigroup, UK, and
            celebrated as one of the MLH Top 50 in 2023. Beyond my primary role, I serve as an MLH
            Coach and Technical Program Associate, fostering growth and innovation within the tech
            community. I graduated with distinction, holding an MSc in Computer Science from
            Newcastle University. My technical foundations lie in JavaScript, TypeScript, React, and
            Python. With a rich background from my tenure as an SDE at Reliance Jio in India, I am
            equipped to face intricate challenges and deliver creative solutions effectively.
          </p>
        </section>
      </SectionWrapper>

      {/* Experience & Skills Grid */}
      <SectionWrapper delay={100}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <section className="work-experience">
            <WorkExperience />
          </section>
          <section className="skills">
            <Skills />
          </section>
        </div>
      </SectionWrapper>

      {/* Featured Posts */}
      <SectionWrapper delay={200}>
        <section className="featured-posts">
          <FeaturedPosts />
        </section>
      </SectionWrapper>

      {/* Newsletter Form */}
      <SectionWrapper delay={300}>
        <section className="newsletter">
          <CustomForm />
        </section>
      </SectionWrapper>
    </div>
  );
};

export default HomepageContent;
