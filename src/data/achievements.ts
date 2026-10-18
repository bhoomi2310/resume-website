export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  projectOrNote?: string;
  type: string;
  year?: string;
  badge: string;
  link?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "adobe-express",
    title: "Grand Finalist",
    organization: "Adobe Express Add-ons Hackathon",
    projectOrNote: "Built Epsilon, an AI add-on for real-time brand compliance scoring and automated design correction in Adobe Express.",
    type: "Hackathon",
    badge: "Grand Finalist",
    link: "https://github.com/bhoomi2310/Epsilon"
  },
  {
    id: "dtu-brainwave",
    title: "Semi-Finalist",
    organization: "DTU brAInwave'24",
    projectOrNote: "Developed Medeliver, an AI-enabled pharmacy and teleconsultation app with chatbot-driven prescription workflows.",
    type: "AI Hackathon",
    badge: "Semi-Finalist"
  },
  {
    id: "amazon-hackon",
    title: "Top 75 Coders Nationally",
    organization: "Amazon Hack On 2026",
    projectOrNote: "Ranked among the Top 75 coders across thousands of competitive participants nationwide.",
    type: "Coding Competition",
    badge: "Top 75"
  },
  {
    id: "flipkart-grid",
    title: "Semi-Finalist",
    organization: "Flipkart GRID 8.0",
    projectOrNote: "Advanced through national competitive problem-solving and algorithmic rounds.",
    type: "Engineering Challenge",
    badge: "Semi-Finalist"
  }
];
