import type { IconType } from "react-icons";
import type { ReactNode } from "react";

export interface TimelineEvent {
  id: number;
  content: string;
  target: string;
  href: string;
  date: string;
  icon: IconType;
  iconBackground: string;
}

export interface SkillsMap {
  [category: string]: string[];
}

export interface SocialLink {
  name: string;
  link: string;
  icon: ReactNode;
}
