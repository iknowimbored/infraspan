export interface CaseStudyClientI {
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

export interface CaseStudyI {
  client: string;
  about: string;
  problem: string;
  solution: string[];
  logos: CaseStudyClientI[];
}

export const CASE_STUDIES: CaseStudyI[] = [
  {
    client: "The Gordon TAFE",
    about:
      "The Gordon is Victoria's largest regional stand-alone TAFE and has been helping people gain real skills for real jobs for over 125 years.",
    problem:
      "The client needed to validate their existing AI/ML solution to confirm whether the delivered platform met agreed requirements and quality standards.",
    solution: [
      "Infraspan delivered an independent consultancy engagement to audit the AI/ML SaaS platform developed by a third-party. Our findings provided the client with the clarity and technical insight needed to request critical rectifications and halt further investment — avoiding additional costs on a solution that had already exceeded AUD $1M.",
    ],
    logos: [
      {
        name: "The Gordon TAFE",
        logoUrl: "/logos/gordon.svg",
        websiteUrl: "https://www.thegordon.edu.au",
      },
    ],
  },
  {
    client: "Waratah-Wynyard Council & Circular Head Council",
    about:
      "Waratah-Wynyard Council is a local government body in Tasmania that provides services for the community, including visitor information, business support, and waste management.",
    problem:
      "Identify and address capability gaps in infrastructure and project management due to issues in system performance and reliability.",
    solution: [
      "Infraspan created <strong>Digital Transformation Report</strong> and a <strong>System Administrator as a Service</strong>.",
      "A comprehensive discovery process was conducted, including interviews with key personnel to understand business goals, as well as a review of technology and network configurations, server setups, and backups to ensure alignment with industry standards.",
    ],
    logos: [
      {
        name: "Waratah-Wynyard Council",
        logoUrl: "/logos/waratah-wynyard.svg",
        websiteUrl: "https://www.warwyn.tas.gov.au",
      },
      {
        name: "Circular Head Council",
        logoUrl: "/logos/circular-head-council.png",
        websiteUrl: "https://www.circularhead.tas.gov.au",
      },
    ],
  },
  {
    client: "Avec Global Pty Ltd",
    about:
      "Avec Global Pty Ltd an Australian IT project delivery firm that specialises in technology-agnostic implementation services. Founded in 2013 and headquartered in Sydney, the company supports clients across Australia, New Zealand, and the United Kingdom.",
    problem:
      "As part of its work delivering outcomes for a major Sydney Airport project, Avec Global needed Microsoft expertise to design an Azure-based data platform. They required support to guide their data engineers and analysts in building pipelines and infrastructure flow across development, staging, and production environments. The solution needed to meet enterprise-level expectations for performance, security, and compliance.",
    solution: [
      "Infraspan Pty Ltd provided a Microsoft Solutions Architect to lead the design and implementation of a scalable Data Platform as a Service (DPaaS) solution in Azure. The architecture enabled Avec Global's delivery team to accelerate development, ensure governance, and confidently manage infrastructure across all environments. The solution successfully met the complex requirements of the Sydney Airport client.",
    ],
    logos: [
      {
        name: "Avec Global Pty Ltd",
        logoUrl: "/logos/avec.png",
        websiteUrl: "https://www.avecglobal.com",
      },
    ],
  },
];
