import { LucideIcon } from 'lucide-react';

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon?: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
