import { HiOutlineBriefcase } from "react-icons/hi";
import { FaUniversity } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";
import clsx from "clsx";

const timeline = [
  {
    id: 6,
    content: "Software Developer at",
    target: "Citigroup UK",
    href: "https://www.citigroup.com/global",
    date: "Sep 2022 - Present",
    icon: HiOutlineBriefcase,
    iconBackground: "bg-blue-300",
  },
  {
    id: 5,
    content: "Coach at",
    target: "Major League Hacking (MLH)",
    href: "https://mlh.io/",
    date: "Dec 2022 - Present",
    icon: MdOutlineWorkHistory,
    iconBackground: "bg-teal-300",
  },
  {
    id: 4,
    content: "Technical Program Associate at",
    target: "Major League Hacking (MLH)",
    href: "https://mlh.io/",
    date: "May 2022 - Mar 2023",
    icon: MdOutlineWorkHistory,
    iconBackground: "bg-teal-300",
  },
  {
    id: 3,
    content: "MSc. in Computer Science from",
    target: "Newcastle University, UK",
    href: "https://www.ncl.ac.uk/",
    date: "Sep 2021 - Aug 2022",
    icon: FaUniversity,
    iconBackground: "bg-violet-300",
  },
  {
    id: 2,
    content: "Software Engineer at",
    target: "Jio Platforms",
    href: "https://www.jio.com/",
    date: "Aug 2019 - Aug 2021",
    icon: HiOutlineBriefcase,
    iconBackground: "bg-blue-300",
  },
  {
    id: 1,
    content: "B.E. in Electronics and Telecommunication from",
    target: "University of Mumbai, India",
    href: "https://kjsit.somaiya.edu.in/en",
    date: "Jul 2015 - Jun 2019",
    icon: FaUniversity,
    iconBackground: "bg-violet-300",
  },
];

const skills = {
  FRONTEND: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux"],
  "CSS FRAMEWORKS": ["Tailwind CSS", "Bootstrap", "Material-UI"],
  BACKEND: ["Node.js", "Express", "Java Spring Boot", "Flask", "FastAPI"],
  DATABASES: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
  DEVOPS: ["Docker", "Jenkins", "CircleCI", "GitHub Actions"],
  TESTING: ["Jest", "React Testing Library", "Vitest", "Cypress"],
  "PROJECT MANAGEMENT": ["Jira", "Trello"],
  "VERSION CONTROL & PLATFORMS": ["Git", "GitHub", "GitLab", "Bitbucket"],
  STREAMING: ["@MajorLeagueHacking on YT", "@TuplesEdu on YT"],
};

export default function HomepageContent() {
  return (
    <div>
      <section className="about-me">
        <p className="leading-6">
          I am a Software Developer at Citigroup UK, and celebrated as one of
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
          <ul className="list-none">
            {timeline.map((event, eventIdx) => (
              <li key={event.id} className="relative pb-8">
                {eventIdx !== timeline.length - 1 && (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 -z-20"
                    aria-hidden="true"
                  />
                )}
                <div className="flex space-x-3">
                  <span
                    className={clsx(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-2 ring-white"
                    )}
                  >
                    <event.icon className="text-slate-900" size={20} />
                  </span>
                  <div className="min-w-0 flex-1 pt-1.5">
                    <p className="text-sm">
                      {event.content}{" "}
                      <a href={event.href} className="font-medium">
                        {event.target}
                      </a>
                      <span className="block text-right text-sm">
                        {event.date}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <div className="hidden md:block md:col-span-1 mx-0 px-0">
          <div className="h-full w-px bg-gray-200 mx-auto" />
        </div>
        <hr className="my-8 block md:hidden" />
        <section className="skills md:col-span-5">
          <h3 className="text-lg font-semibold">Skills</h3>
          <ul className="list-none mt-4 ml-0 pl-0">
            {Object.entries(skills).map(([category, skills]) => (
              <li key={category} className="mb-4">
                <h4 className="text-sm font-medium mb-2 custom-mono">
                  {category}
                </h4>
                <ul className="list-none flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-2 py-1 bg-amber-100 text-amber-950 rounded-md text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
