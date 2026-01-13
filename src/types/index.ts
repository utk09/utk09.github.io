import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type TimelineEvent = {
  id: number;
  content: string;
  target: string;
  href: string;
  date: string;
  icon: IconType;
  iconBackground: string;
};

export type SkillsMap = {
  [category: string]: string[];
};

export type SocialLink = {
  name: string;
  link: string;
  icon: ReactNode;
};

export type FeaturedPost = {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
};
