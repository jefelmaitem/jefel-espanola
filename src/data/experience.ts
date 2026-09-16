export type ExperienceProject = {
  slug: string;
  name: string;
  link: string;
  image: string;
  imageAlt?: string;
  summary?: string;
  label?: string;
};

export type ExperienceEntry = {
  slug: string;
  company: string;
  roles: readonly string[];
  summary: string;
  responsibilities: readonly string[];
  timeframe: string;
  tools: readonly string[];
  logo?: string;
  logoIsWhite?: boolean;
  projects: readonly ExperienceProject[];
};

const experiences: ExperienceEntry[] = [
  {
    slug: "ark-design",
    company: "Ark Design B.V.",
    roles: [
      "Graphic Designer",
      "UI/Web Designer",
      "WordPress Developer",
      "SMM",
    ],
    summary:
      "Designing responsive websites, digital campaigns, and brand systems with a focus on clarity, usability, and polished visual presentation.",
    responsibilities: [
      "Design responsive WordPress websites",
      "Create UI/UX for websites and software",
      "Produce social media content and digital ads",
      "Develop branding and visual identities",
      "Build and maintain websites using WordPress",
      "Manage social media content and creatives",
    ],
    timeframe: "2024 – Present",
    tools: ["WordPress", "Elementor", "UI Design", "Branding"],
    logo: "ark-design.png",
    projects: [
      {
        slug: "product-configurator-website-redesign",
        name: "Product Configurator Website Redesign",
        link: "https://productconfigurator.nl/",
        image: "webproject1.png",
        imageAlt: "Ark Design corporate website redesign",
        label: "UI Redesign",
        summary: "Responsive website refresh focused on structure, clarity, and conversion.",
      },
      {
        slug: "ark-social-media-graphics",
        name: "Social Media Graphics",
        link: "https://www.linkedin.com/company/arkdesign/posts/?feedView=all",
        image: "arkad1.jpeg",
        imageAlt: "Ark Design brand identity package",
        label: "Brand Identity",
        summary: "Brand collateral and visual identity work for digital and client-facing touchpoints.",
      },
      {
        slug: "ark-design-redesign",
        name: "ArkDesign Redesign",
        link: "https://www.arkdesign.nl/",
        image: "ark2.png",
        imageAlt: "Ark Design website redesign",
        label: "Website Redesign",
        summary: "Website redesign work balancing modern presentation with a premium studio feel.",
      },
    ],
  },
  {
    slug: "tnc-kaiserin",
    company: "TNC Kaiserin",
    roles: ["Graphic Designer"],
    summary:
      "Led visual design for esports campaigns, promotional assets, and branded content built to energize the audience and strengthen team identity.",
    responsibilities: [
      "Lead graphic design projects",
      "Create promotional materials",
      "Support branding initiatives",
    ],
    timeframe: "March 2024 - June 2024",
    tools: ["Campaign Design", "Posters", "Branding", "Social Graphics"],
    logo: "tnc-kaiserin.png",
    projects: [
      {
        slug: "tnc-kaiserin-roster",
        name: "Roster",
        link: "https://www.facebook.com/photo.php?fbid=1265132472286073&set=pb.100063679975758.-2207520000&type=3",
        image: "poster-1.jpg",
        imageAlt: "TNC Kaiserin roster campaign",
        label: "Roster Reveal",
        summary: "Announcement creative highlighting lineup identity and event energy.",
      },
      {
        slug: "tnc-kaiserin-roster-reveal",
        name: "Roster Reveal",
        link: "https://www.facebook.com/photo.php?fbid=1228044165994904&set=pb.100063679975758.-2207520000&type=3",
        image: "poster-2.jpg",
        imageAlt: "TNC Kaiserin roster reveal graphics",
        label: "Campaign Poster",
        summary: "Reveal campaign visuals created for social rollout and audience engagement.",
      },
      {
        slug: "tnc-kaiserin-mvp",
        name: "MVP",
        link: "https://www.facebook.com/photo.php?fbid=1216178023848185&set=pb.100063679975758.-2207520000&type=3",
        image: "poster-3.jpg",
        imageAlt: "TNC Kaiserin MVP feature poster",
        label: "Player Feature",
        summary: "Player spotlight visual designed to celebrate standout performance with a bold editorial style.",
      },
    ],
  },
  {
    slug: "bren-esports",
    company: "Bren Esports - Shizou",
    roles: ["Graphic Designer"],
    summary:
      "Created branded player content and promotional visuals tailored to a professional esports identity, with fast-turnaround execution for social media moments.",
    responsibilities: [
      "Create branded content for professional player Shizou",
      "Design player-specific visuals for Bren Esports",
    ],
    timeframe: "Feb 2024 - April 2024",
    tools: ["Player Branding", "Posters", "Social Graphics"],
    logo: "ap-bren.png",
    projects: [
      {
        slug: "bren-esports-roster",
        name: "Roster",
        link: "https://www.facebook.com/photo.php?fbid=1126063892864934&set=pb.100063840020177.-2207520000&type=3",
        image: "apbr1.jpg",
        imageAlt: "Bren Esports roster graphic",
        label: "Roster Graphic",
        summary: "Team announcement visual designed around player branding and competitive presence.",
      },
      {
        slug: "bren-esports-game-day",
        name: "Game Day",
        link: "https://www.facebook.com/photo.php?fbid=1149090933895563&set=pb.100063840020177.-2207520000&type=3",
        image: "apbr2.jpg",
        imageAlt: "Bren Esports game day graphic",
        label: "Match-Day Graphic",
        summary: "Match-day creative built for urgency, readability, and mobile-first viewing.",
      },
    ],
  },
  {
    slug: "surigao-esports-collective",
    company: "Surigao Esports Collective",
    roles: ["Graphic Designer"],
    summary:
      "Directed visual design across broadcasts, social content, and event promotions to give the organization a stronger and more cohesive competitive identity.",
    responsibilities: [
      "Lead design for broadcast graphics",
      "Create social media content and promotional posters",
      "Develop brand assets for the organization",
    ],
    timeframe: "2023 – 2024",
    tools: ["Broadcast Visuals", "League Branding", "Posters", "Social Graphics"],
    logo: "surigao-esports.png",
    logoIsWhite: true,
    projects: [
      {
        slug: "surigao-esports-ceap",
        name: "CEAP",
        link: "https://www.facebook.com/photo.php?fbid=375363668895238&set=pb.100092648244877.-2207520000&type=3",
        image: "ceap1.jpg",
        imageAlt: "Surigao Esports Collective broadcast graphics",
        label: "Broadcast Design",
        summary: "Broadcast-facing graphics package created for tournament presentation and promotion.",
      },
      {
        slug: "surigao-esports-surecol-1",
        name: "Surecol 1",
        link: "https://www.facebook.com/photo.php?fbid=122123598602098189&set=pb.61552945697929.-2207520000&type=3",
        image: "surcol1.jpg",
        imageAlt: "Surigao Esports Collective league branding",
        label: "League Branding",
        summary: "League identity work combining event energy with clear branded storytelling.",
      },
    ],
  },
  {
    slug: "jefel-arts",
    company: "Jefel Arts",
    roles: ["Graphic Designer"],
    summary:
      "Producing custom commission work for streetwear, esports, and merchandise brands through expressive visuals, apparel graphics, and campaign-led design pieces.",
    responsibilities: [
      "Create custom commission-based designs",
      "Design graphics for streetwear and merchandise brands",
      "Produce creative assets for esports brands",
    ],
    timeframe: "2022 – Present",
    tools: ["Apparel Design", "Commission Work", "Merch Graphics", "Posters"],
    logo: "jefel-arts-preview.jpg",
    projects: [
      {
        slug: "max-poster",
        name: "Max Poster",
        link: "https://www.facebook.com/photo?fbid=867026052813571&set=a.116471364535714",
        image: "max1.jpg",
        imageAlt: "Jefel Arts Max poster design",
        label: "Poster Design",
        summary: "Commission poster built with a streetwear-inspired graphic approach.",
      },
      {
        slug: "ant-poster",
        name: "Ant Poster",
        link: "https://www.facebook.com/photo?fbid=871515925697917&set=a.116471364535714",
        image: "ant1.jpg",
        imageAlt: "Jefel Arts Ant poster design",
        label: "Poster Design",
        summary: "Merch-driven promotional visual combining apparel cues and bold typographic treatment.",
      },
      {
        slug: "yg-jersey-design",
        name: "YG",
        link: "https://www.facebook.com/photo/?fbid=719676287548549&set=pcb.719676417548536",
        image: "yg1.jpg",
        imageAlt: "Jefel Arts YG commission design",
        label: "Jersey Design",
        summary: "Commission piece focused on impact, mood, and collectible poster energy.",
      },
    ],
  },
];

function extractPeriodRanking(period: string) {
  const years = Array.from(period.matchAll(/\d{4}/g)).map((match) =>
    Number(match[0]),
  );
  const latestYear = years.length ? Math.max(...years) : 0;
  const startYear = years[0] ?? 0;
  const isCurrent = /present/i.test(period);

  return { isCurrent, latestYear, startYear };
}

export const experienceEntries = [...experiences].sort((a, b) => {
  const left = extractPeriodRanking(a.timeframe);
  const right = extractPeriodRanking(b.timeframe);

  if (left.isCurrent !== right.isCurrent) {
    return Number(right.isCurrent) - Number(left.isCurrent);
  }

  if (left.latestYear !== right.latestYear) {
    return right.latestYear - left.latestYear;
  }

  return right.startYear - left.startYear;
});

export type PortfolioProject = ExperienceProject & {
  client: string;
  clientSlug: string;
  role: string;
  timeframe: string;
  tools: readonly string[];
};

export const portfolioProjects: PortfolioProject[] = experienceEntries.flatMap(
  (experience) =>
    experience.projects.map((project) => ({
      ...project,
      client: experience.company,
      clientSlug: experience.slug,
      role: experience.roles.join(", "),
      timeframe: experience.timeframe,
      tools: experience.tools,
    })),
);

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
