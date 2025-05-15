interface PageMetadataI {
  title: string;
  description: string;
  openGraph: {
    url: string;
    title: string;
    description: string;
  };
  twitter: {
    title: string;
    description: string;
  };
}

export const PAGE_METADATA: { route: string; metadata: PageMetadataI }[] = [
  {
    route: "about-us",
    metadata: {
      title: "About Us | Infraspan Pty Ltd",
      description:
        "Practical Thinkers. Purposeful Builders. We bring collaboration, clarity, and capability to every stage of your journey.",
      openGraph: {
        url: "https://www.infraspan.com.au/about-us",
        title: "About Us | Infraspan Pty Ltd",
        description:
          "Practical Thinkers. Purposeful Builders. We bring collaboration, clarity, and capability to every stage of your journey.",
      },
      twitter: {
        title: "About Us | Infraspan Pty Ltd",
        description:
          "Practical Thinkers. Purposeful Builders. We bring collaboration, clarity, and capability to every stage of your journey.",
      },
    },
  },
  {
    route: "case-studies",
    metadata: {
      title: "Case Studies | Infraspan Pty Ltd",
      description:
        "Solutions That Work. Outcomes That Matter. See how we solve real challenges across industries.",
      openGraph: {
        url: "https://www.infraspan.com.au/case-studies",
        title: "Case Studies | Infraspan Pty Ltd",
        description:
          "Solutions That Work. Outcomes That Matter. See how we solve real challenges across industries.",
      },
      twitter: {
        title: "Case Studies | Infraspan Pty Ltd",
        description:
          "Solutions That Work. Outcomes That Matter. See how we solve real challenges across industries.",
      },
    },
  },
  {
    route: "contact-us",
    metadata: {
      title: "Contact Us | Infraspan Pty Ltd",
      description:
        "Strategy starts with a conversation. Let's talk about what's next for your business.",
      openGraph: {
        url: "https://www.infraspan.com.au/contact-us",
        title: "Contact Us | Infraspan Pty Ltd",
        description:
          "Strategy starts with a conversation. Let's talk about what's next for your business.",
      },
      twitter: {
        title: "Contact Us | Infraspan Pty Ltd",
        description:
          "Strategy starts with a conversation. Let's talk about what's next for your business.",
      },
    },
  },
  {
    route: "privacy-policy",
    metadata: {
      title: "Privacy Policy | Infraspan Pty Ltd",
      description:
        "This Privacy Policy applies to Infraspan Pty Ltd. It outlines how we collect, use, disclose, and safeguard your personal information.",
      openGraph: {
        url: "https://www.infraspan.com.au/privacy-policy",
        title: "Privacy Policy | Infraspan Pty Ltd",
        description:
          "This Privacy Policy applies to Infraspan Pty Ltd. It outlines how we collect, use, disclose, and safeguard your personal information.",
      },
      twitter: {
        title: "Privacy Policy | Infraspan Pty Ltd",
        description:
          "This Privacy Policy applies to Infraspan Pty Ltd. It outlines how we collect, use, disclose, and safeguard your personal information.",
      },
    },
  },
  {
    route: "services",
    metadata: {
      title: "Services | Infraspan Pty Ltd",
      description:
        "Modern Infrastructure. Strategically Engineered. Built around your goals — tailored architecture that drives tangible outcomes.",
      openGraph: {
        url: "https://www.infraspan.com.au/services",
        title: "Services | Infraspan Pty Ltd",
        description:
          "Modern Infrastructure. Strategically Engineered. Built around your goals — tailored architecture that drives tangible outcomes.",
      },
      twitter: {
        title: "Services | Infraspan Pty Ltd",
        description:
          "Modern Infrastructure. Strategically Engineered. Built around your goals — tailored architecture that drives tangible outcomes.",
      },
    },
  },
  {
    route: "terms-and-conditions",
    metadata: {
      title: "Terms and Conditions | Infraspan Pty Ltd",
      description:
        "The specific scope of services will be defined in a Statement of Work (SOW), proposal, or agreement. Read our Terms and Conditions for more.",
      openGraph: {
        url: "https://www.infraspan.com.au/terms-and-conditions",
        title: "Terms and Conditions | Infraspan Pty Ltd",
        description:
          "The specific scope of services will be defined in a Statement of Work (SOW), proposal, or agreement. Read our Terms and Conditions for more.",
      },
      twitter: {
        title: "Terms and Conditions | Infraspan Pty Ltd",
        description:
          "The specific scope of services will be defined in a Statement of Work (SOW), proposal, or agreement. Read our Terms and Conditions for more.",
      },
    },
  },
];
