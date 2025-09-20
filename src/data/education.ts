export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  score: string;
  status?: string;
}

export const educationData: Education[] = [
  {
    id: 1,
    degree: "B.Tech",
    institution: "Adamas University",
    year: "2023 - 2027",
    score: "CGPA: 7.98",
    status: "Expected"
  },
  {
    id: 2,
    degree: "Higher Secondary",
    institution: "Saharda Kalipada Vidyapith",
    year: "2021 - 2023",
    score: "79.4%"
  },
  {
    id: 3,
    degree: "Secondary",
    institution: "Saharda Kalipada Vidyapith",
    year: "2021",
    score: "89%"
  }
];