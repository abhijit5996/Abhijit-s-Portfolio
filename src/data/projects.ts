export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NutriOrder | Food Ordering & Recommendation Platform",
    description: "Food ordering platform with personalized recommendations.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    liveLink: "https://nutriorder.vercel.app/",
  },
  {
    id: 2,
    title: "OptimalWay | Traveling Salesman Problem Solver",
    description: "Interactive website to visualize and solve TSP.",
    techStack: ["HTML", "JavaScript"],
    liveLink: "https://optimal-way.vercel.app/",
  },
];