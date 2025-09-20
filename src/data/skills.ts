export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Code",
    skills: ["C", "Java"]
  },
  {
    category: "Web Development",
    icon: "Globe",
    skills: ["HTML", "Tailwind CSS"]
  },
  {
    category: "Version Control",
    icon: "GitBranch",
    skills: ["Git", "GitHub"]
  },
  {
    category: "Languages",
    icon: "Languages",
    skills: ["Bengali", "English", "Hindi"]
  }
];