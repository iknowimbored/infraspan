export interface CaseStudyClientI {
  name: string;
  logoHeight: number;
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
      "Infraspan delivered an <strong>independent consultancy engagement</strong> to audit the <strong>AI/ML SaaS platform</strong> developed by a third-party. Our findings provided the client with the clarity and technical insight needed to request critical rectifications and halt further investment — avoiding additional costs on a solution that had already exceeded AUD $1M.",
    ],
    logos: [
      {
        name: "The Gordon TAFE",
        logoHeight: 64,
        logoUrl:
          "https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/company_gordon-l9ol9HeTFurLqngzunlFshUYtkIUd5.svg",
        websiteUrl: "https://www.thegordon.edu.au",
      },
    ],
  },
  {
    client: "Waratah-Wynyard Council & Circular Head Council",
    about:
      "Waratah-Wynyard Council is a local government body in Tasmania that provides services for the community, including visitor information, business support, and waste management.",
    problem:
      "Identify and address capability gaps in infrastructure and project management arising from ongoing challenges with system stability and operational effectiveness, and provide support where required.",
    solution: [
      "Infraspan delivered <strong>Digital Transformation discovery</strong> and introduced <strong>System Administrator as a Service</strong>.",
      "This involved a comprehensive assessment, including interviews with key personnel to understand business objectives, and a detailed review of the technology environment, covering network configurations, server setups, and backup systems to ensure alignment with industry standards. Where gaps were identified, Infraspan provided necessary capability and support to strengthen operations and address critical needs.",
    ],
    logos: [
      {
        name: "Waratah-Wynyard Council",
        logoHeight: 64,
        logoUrl:
          "https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/company_waratah-wynyard-tF39Shwqle9jNdr9yTk3PixJhTdKvH.svg",
        websiteUrl: "https://www.warwyn.tas.gov.au",
      },
      {
        name: "Circular Head Council",
        logoHeight: 190,
        logoUrl:
          "https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/company_circular-head-council-Jb1ZqzJmkKZylZvZCYncRRWBEIMZGv.png",
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
      "Infraspan Pty Ltd provided a <strong>Microsoft Solutions Architect</strong> to lead the design and implementation of a scalable <strong>Data Platform as a Service (DPaaS) solution</strong> in Azure. The architecture enabled Avec Global's delivery team to accelerate development, ensure governance, and confidently manage infrastructure across all environments. The solution successfully met the complex requirements of the Sydney Airport client.",
    ],
    logos: [
      {
        name: "Avec Global Pty Ltd",
        logoHeight: 64,
        logoUrl:
          "https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/company_avec-r1Azd3DvMJf2aOPNTtV7gP7o7sAmYq.png",
        websiteUrl: "https://www.avecglobal.com",
      },
    ],
  },
];
