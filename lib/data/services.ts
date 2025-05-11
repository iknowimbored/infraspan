export interface ServiceI {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
  solutions: string[];
}

export const SERVICES: ServiceI[] = [
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Solutions",
    subtitle:
      "Build secure and flexible environments that support modern business needs.",
    imageUrl: "/vectors/cloud-hosting.svg",
    description:
      "We design and manage cloud environments tailored to your business needs. With a consultative approach and hands-on delivery, we plan, build, and optimise infrastructure that works the way you do.",
    solutions: [
      "Strategic Cloud Migration",
      "Cost-Optimised Cloud Solutions",
      "Scalable Cloud Architecture Design",
      "End-to-End Cloud Management and Support",
      "Cloud Strategy and Advisory Services",
    ],
  },
  {
    id: "enterprise-applications-and-infrastructure",
    title: "Enterprise Applications and Infrastracture Solutions",
    subtitle:
      "Connect systems and streamline workflows to improve performance and visibility.",
    imageUrl: "/vectors/operating-system.svg",
    description:
      "We work with your existing systems and teams to improve and design digital solutions that unlock better ways of working. Our approach focuses on aligning technology with business strategy to enable smarter decisions, stronger alignment, and sustained growth.",
    solutions: [
      "Enterprise Application Consulting",
      "IT Infrastructure Design and Optimisation",
      "System Integration and Modernisation",
      "Ongoing Support and Maintenance",
      "Business Process Automation",
    ],
  },
  {
    id: "ai-and-machine-learning",
    title: "AI and Machine Learning Solutions",
    subtitle: "Apply advanced models to analyse data and optimise operations.",
    imageUrl: "/vectors/artificial-intelligence.svg",
    description:
      "We integrate intelligence into your systems to solve complex business challenges. Our data-driven approach improves visibility, drives efficiencies, and supports confident decision-making across your organisation.",
    solutions: [
      "AI Strategy and Roadmap Development",
      "AI Integration and Deployment",
      "Model Monitoring and Performance Optimisation",
    ],
  },
  {
    id: "project-management-and-architecture",
    title: "IT Project Management and Architecture",
    subtitle:
      "Execute complex initiatives with clear structure and scalable design.",
    imageUrl: "/vectors/organising-projects.svg",
    description:
      "We deliver complex projects with precision, pace, and purpose. Every initiative is aligned to business goals and built for execution.",
    solutions: [
      "IT Project Planning and Execution",
      "Enterprise Architecture Design",
      "Project Health Audits and Recovery",
      "Change Management and Stakeholder Engagement",
    ],
  },
];
