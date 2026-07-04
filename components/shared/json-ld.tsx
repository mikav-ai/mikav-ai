export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mikav",
    url: "https://mikav.in",
    logo: "https://mikav.in/icons/app/icon-dark.png",
    description:
      "Open-source Malayalam AI copilot — know Kerala deep, build Kerala forward.",
    email: "hello@mikav.in",
    sameAs: ["https://github.com/mikav-ai/mikav-ai"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mikav AI",
    url: "https://mikav.in",
    description:
      "Open-source AI built on native Malayalam brain — learn Kerala's art, culture, story deep. Turn knowledge into real venture, with open data and open path for all.",
    publisher: {
      "@type": "Organization",
      name: "Mikav",
    },
  };

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mikav AI",
    url: "https://mikav.in",
    applicationCategory: "AI Assistant",
    operatingSystem: "Web",
    description:
      "Native Malayalam AI copilot for exploring Kerala's art, culture, history, and festivals. Open source, free for all.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    author: {
      "@type": "Organization",
      name: "Mikav",
      url: "https://mikav.in",
    },
    license: "https://github.com/mikav-ai/mikav-ai/blob/main/LICENSE",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Mikav AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mikav AI is an open-source Malayalam AI platform built to help people learn, explore, and build on Kerala's rich art, culture, and history.",
        },
      },
      {
        "@type": "Question",
        name: "Is Mikav free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mikav is completely free and open source. All datasets, tools, and the platform itself are available at no cost.",
        },
      },
      {
        "@type": "Question",
        name: "How is Mikav different from using a translator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mikav is built natively for Malayalam — it understands idioms, context, and cultural meaning rather than translating from English.",
        },
      },
      {
        "@type": "Question",
        name: "Can I contribute to the Mikav project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. The codebase, datasets, and roadmap are all open. You can contribute code, data, documentation, or ideas through the community.",
        },
      },
      {
        "@type": "Question",
        name: "How can I use Mikav for my startup idea?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mikav connects culture enthusiasts to incubation programs, grants, and mentors. Explore the Ideas to Startup Bridge feature to get started.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
