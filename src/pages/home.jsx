import React from 'react';

import Hero from '../components/hero';
import Skills from "../components/skills";
import WorkExperience from '../components/workexperience';
import FreelanceExperience from '../components/freelanceexperience';
import VolunteerExperience from '../components/volunteerexperience';



const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <WorkExperience />
      <FreelanceExperience />
      <VolunteerExperience />
    </>
  );
};

export default Home;
