export interface Profile {
  name: string;
  greeting: string;
  subtitle: string;
  hint: string;
  bio: string;
  roleTarget: string;
  college: string;
  degree: string;
  cgpa?: string;
  gradYear: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  photoUrl: string;
  resumePdfUrl: string;
}

export const profileData: Profile = {
  name: "Bhoomi Gupta",
  greeting: "Hey, this is Bhoomi",
  subtitle: "B.Tech @ NSUT | Full-stack + Agentic AI builder",
  hint: "Tip: click the icons and dock apps to explore my info.",
  bio: "Hey, I'm Bhoomi. I write code that ships, not code that just compiles. React on the front, Node and Python on the back, SQL underneath, and agents on top when the problem needs a brain. I build things 1000+ students actually use, and I debug like it's personal. Looking for developer roles where the bar is high and the bugs are scared.",
  roleTarget: "Software Development Engineer (SDE), Data Analyst, and Cloud / AI roles",
  college: "Netaji Subhas University of Technology (NSUT), Delhi",
  degree: "B.Tech in Instrumentation and Control Engineering",
  gradYear: "2024 - 2028",
  location: "Delhi / Gurugram, India",
  email: "imbhoomigupta@gmail.com",
  github: "https://github.com/bhoomi2310",
  linkedin: "https://www.linkedin.com/in/bhoomi23/",
  photoUrl: "/profile.jpg",
  resumePdfUrl: "/Bhoomi_Gupta_Resume_Latest.pdf",
};
