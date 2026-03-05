export interface Experience {
  job: string;
  company: string;
  badge: string;
  url: string;
  date: string;
  color: string;
  pts: string[];
}

export interface Project {
  id: number;
  featured: boolean;
  emoji: string;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  demo: string;
  gh: string;
}

export interface Skill {
  name: string;
  cat: string;
  logo: string;
}

export interface Education {
  degree: string;
  school: string;
  loc: string;
  date: string;
  gpa: string;
  note: string;
  color: string;
  flag: string;
  asterisk?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  by: string;
  color: string;
  emoji: string;
  url: string;
}

export interface JourneyItem {
  flag: string;
  city: string;
  label: string;
  date: string;
  color: string;
  arrow?: boolean;
}

export type CategoryColors = Record<string, string>;
