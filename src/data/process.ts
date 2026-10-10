export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Book a Discovery Call",
    description:
      "Connect in 15 minutes to share your business goals, target audience, and website requirements.",
  },
  {
    number: "02",
    title: "Review Scope & Blueprint",
    description:
      "Receive a clear proposal with interactive wireframes, performance milestones, and fixed delivery timeline.",
  },
  {
    number: "03",
    title: "Agile Build & Live Staging",
    description:
      "Watch your web platform come alive with private staging previews and iterative milestone feedback.",
  },
  {
    number: "04",
    title: "Launch & Go Live",
    description:
      "Go live with sub-second page speed, search engine optimization, analytics, and full source code ownership.",
  },
];

