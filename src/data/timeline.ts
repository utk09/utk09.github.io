import type { TimelineEvent } from "@site/src/types";
import { FaUniversity } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";
import { MdOutlineWorkHistory } from "react-icons/md";

export const TIMELINE: TimelineEvent[] = [
  {
    id: 7,
    content: "AVP FX UI Developer at",
    target: "Barclays UK",
    href: "https://home.barclays/",
    date: "Jun 2024 - Present",
    icon: HiOutlineBriefcase,
    iconBackground: "bg-teal-300",
  },
  {
    id: 6,
    content: "Software Developer at",
    target: "Citigroup UK",
    href: "https://www.citigroup.com/global",
    date: "Sep 2022 - May 2024",
    icon: HiOutlineBriefcase,
    iconBackground: "bg-yellow-300",
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
    iconBackground: "bg-yellow-300",
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
    iconBackground: "bg-yellow-300",
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
