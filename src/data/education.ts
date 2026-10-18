export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score?: string;
  scoreType?: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Instrumentation and Control Engineering",
    institution: "Netaji Subhas University of Technology (NSUT)",
    location: "Dwarka, New Delhi",
    duration: "2024 - 2028",
    highlights: [
      "Third-year undergraduate student",
      "Core focus on Systems Engineering, Embedded Automation, and Computer Science",
      "Active in student technical societies (The Debugging Society, IEEE NSUT, TEDxNSUT)"
    ]
  },
  {
    degree: "CBSE Class XII (Senior Secondary)",
    institution: "Amity International School",
    location: "Pushp Vihar, New Delhi",
    duration: "2024",
    score: "94.4%",
    scoreType: "Percentage",
    highlights: [
      "Specialization in Science (Physics, Chemistry, Mathematics)",
      "High academic standing and participation in STEM Olympiads"
    ]
  },
  {
    degree: "CBSE Class X (Secondary School)",
    institution: "Amity International School",
    location: "Sector 46, Gurugram",
    duration: "2022",
    score: "99.4%",
    scoreType: "Percentage",
    highlights: [
      "Exceptional academic record with 99.4% aggregate",
      "Awarded Certificate of Academic Merit"
    ]
  }
];
