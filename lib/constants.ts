export const SITE = {
  name: "iTrans",
  shortName: "iTrans",
  tagline: "Web solutions for Small and Start-up companies.",
  description:
    "iTrans builds modern web solutions for startups and small businesses — portfolio sites, landing pages, business websites, Firebase MVPs and full-stack applications. No budget is an obstacle.",
  email: "contact.itrans@gmail.com",
  url: "https://itrans.vercel.app",
  founded: "2024",
  currencyUsdToLkr: 325,
  sections: [
    "services",
    "pricing",
    "tools",
    "connect",
    "about",
    "faq",
  ] as const,
} as const;

export const TIMELINE_NOTE =
  "Timelines are estimates for a typical scope and move with your requirements, how quickly content and feedback come in, and how many rounds of changes you want. We confirm a realistic delivery date with you in writing before any work starts.";

export const SCOPE_NOTE =
  "Need more than what is listed? Extra pages, sections or features are usually something we can add. Anything beyond the package is quoted on its own and agreed with you before it starts, so it never lands on the invoice as a surprise.";

export type ServiceGroup = "starter" | "business";

export const GROUPS: {
  id: ServiceGroup;
  name: string;
  blurb: string;
}[] = [
  {
    id: "starter",
    name: "Starter Sites",
    blurb:
      "Quick, sharp sites for getting something credible online fast. Pick a shape, and we build it in days.",
  },
  {
    id: "business",
    name: "Business Builds",
    blurb:
      "For real products and real users — working applications, databases and accounts, scoped properly and built to last.",
  },
];

export interface Service {
  slug: string;
  group: ServiceGroup;
  name: string;
  icon: "palette" | "briefcase" | "bolt" | "fire" | "building";
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  deliverables: string[];
  stack: string[];
  priceUsd: number;
  timeline: string;
  bestFor: string;
}

export const SERVICES: Service[] = [
  {
    slug: "portfolio-websites",
    group: "starter",
    name: "Portfolio Website",
    icon: "briefcase",
    tagline:
      "One scrollable page that puts your best work in front of the right people.",
    seoTitle: "Portfolio Website Design & Development | iTrans",
    seoDescription:
      "Custom single-page portfolio websites for designers, developers, photographers and creatives. Clean sections, fast loading, built in React and Next.js. From $185.",
    intro: [
      "A portfolio does not need a dozen pages. It needs one page that loads instantly, reads clearly from top to bottom, and makes someone want to email you before they scroll back up.",
      "We build it as a single scrollable experience — a proper introduction, a short about, your work laid out in clean sections, and a contact block at the end. Your projects live inside the page as sections rather than separate pages you have to click through, which keeps everything fast and keeps people reading.",
    ],
    deliverables: [
      "One custom single-page portfolio that scrolls cleanly from top to bottom",
      "Clear sections — introduction, about, your work, and contact",
      "Mobile-first responsive design across phone, tablet and desktop",
      "On-page SEO so the page is set up to be found in search",
      "Contact section with your email and any links you want shown",
      "2 rounds of revisions",
    ],
    stack: ["React", "Next.js", "Tailwind CSS"],
    priceUsd: 185,
    timeline: "2–5 days",
    bestFor:
      "Designers, developers, photographers, writers and studios who need to look credible fast.",
  },
  {
    slug: "landing-pages",
    group: "starter",
    name: "Landing Page",
    icon: "palette",
    tagline: "A single focused page built to turn a visitor into an enquiry.",
    seoTitle: "Landing Page Design & Development | iTrans",
    seoDescription:
      "Custom landing page design and development for startups and small businesses. Fast, mobile-first, SEO-ready, built in React and Next.js. From $300.",
    intro: [
      "A landing page has one job: turn a visitor into an enquiry, a signup or a sale. We build pages that load fast, read well on every screen, and are structured so the thing you want people to do is impossible to miss.",
      "Every page is hand-written in React and Next.js with Tailwind CSS. No page builders, no bloated WordPress themes, no template bloat — just clean code that loads quickly and stays easy to edit later.",
    ],
    deliverables: [
      "One custom landing page built around your offer and one clear call to action",
      "Mobile-first responsive design across phone, tablet and desktop",
      "On-page SEO on the page itself — meta tags, Open Graph and the fundamentals",
      "Contact form or call-to-action button wired to your inbox",
      "Clean, fast build in React and Next.js with no page builder or template bloat",
      "2 rounds of revisions",
    ],
    stack: ["React", "Next.js", "Tailwind CSS"],
    priceUsd: 300,
    timeline: "3–7 days",
    bestFor:
      "Product launches, campaign pages and founders proving an idea before committing to a bigger build.",
  },
  {
    slug: "business-sites",
    group: "business",
    name: "Business Website",
    icon: "building",
    tagline:
      "A more substantial site for a real business — more sections, and more of what you actually sell.",
    seoTitle: "Business Website Design & Development | iTrans",
    seoDescription:
      "Custom business websites with a gallery, product or services showcase. An advanced landing page structured for a real business. Built in React and Next.js. From $600.",
    intro: [
      "Somewhere between a one-page landing and a full web application sits the site a real business needs: enough structure to explain what you do, show what you sell, and answer the questions people arrive with.",
      "This is an advanced landing page built for a business audience rather than a single campaign. More sections, a proper showcase of your gallery, products or services, and SEO worked into the structure so each part of the page is findable.",
    ],
    deliverables: [
      "An advanced landing-page build structured for a business rather than one campaign",
      "A gallery, product showcase or services showcase — you choose which one leads",
      "More sections than a starter page, laid out around what you sell and who buys it",
      "SEO built into the page structure so each section is findable in search",
      "Mobile-first responsive design across phone, tablet and desktop",
      "Contact and enquiry sections wired to your inbox",
      "Content placeholders and structure ready for your own copy",
      "2 rounds of revisions",
    ],
    stack: ["React", "Next.js", "Tailwind CSS"],
    priceUsd: 600,
    timeline: "1–2 weeks",
    bestFor:
      "Established businesses, studios, retailers and service providers who need to show more than a single page.",
  },
  {
    slug: "firebase",
    group: "business",
    name: "Firebase MVP",
    icon: "fire",
    tagline:
      "Authentication, database and hosting in one platform — a working product, not a mockup.",
    seoTitle: "Firebase Web App Development | iTrans",
    seoDescription:
      "Firebase development for startups — authentication, Cloud Firestore, Cloud Functions and hosting in one platform. Ship a working MVP fast, without the cost of a custom backend. From $1,100.",
    intro: [
      "Most projects do not need a custom server. Firebase gives you authentication, a real-time database, file storage, serverless functions and hosting in a single platform — and it removes almost all of the infrastructure work.",
      "That means your app gets to market faster and costs less to run, because there is no server to provision, patch or scale. We build on Firebase when the project genuinely fits it, and tell you honestly when it does not.",
    ],
    deliverables: [
      "Firebase project setup with environments and config you control",
      "Authentication — email/password, Google or phone, with role-based access",
      "Cloud Firestore data model, security rules and indexes",
      "Cloud Functions for the server-side logic your product needs",
      "Cloud Storage for user uploads and images",
      "Real-time data with optimistic UI updates",
      "Admin panel for managing users or content",
      "Hosting and deploys set up so you can ship updates yourself",
      "2 rounds of revisions",
    ],
    stack: ["React", "Next.js", "Firebase", "Firestore", "Cloud Functions"],
    priceUsd: 1100,
    timeline: "3–6 weeks",
    bestFor:
      "MVPs, authenticated dashboards, chat and social apps, and anything that must launch fast.",
  },
  {
    slug: "full-stack-web-apps",
    group: "business",
    name: "Full-Stack App",
    icon: "bolt",
    tagline:
      "A custom back-end, database and architecture — built by the same team that builds the front-end.",
    seoTitle: "Full-Stack Web Application Development | iTrans",
    seoDescription:
      "Custom full-stack web application development for startups. React and Next.js front-ends with Spring Boot or Node.js back-ends, MongoDB or MySQL, deployed and documented. From $2,150.",
    intro: [
      "When a landing page is no longer enough — when you need accounts, dashboards, payments, admin panels or genuine business logic — you need a full-stack application. That is where we do our best work.",
      "We own the entire stack. Front-end, back-end, database, authentication, deployment and documentation. You get one accountable builder instead of coordinating a front-end freelancer, a back-end freelancer and a designer who never talk to each other.",
    ],
    deliverables: [
      "Architecture and data model designed before any code is written",
      "React / Next.js front-end with a responsive, accessible interface",
      "Spring Boot or Node.js back-end REST API",
      "MongoDB or MySQL database design and indexing",
      "User authentication and role-based access control",
      "Admin dashboard or management panel",
      "Third-party API and payment integrations",
      "Handover documentation and a walkthrough so you can keep building",
    ],
    stack: ["React", "Next.js", "Node.js", "Spring Boot", "MongoDB", "MySQL"],
    priceUsd: 2150,
    timeline: "6–12 weeks",
    bestFor:
      "SaaS MVPs, internal tools, booking systems, marketplaces and customer portals.",
  },
];

export interface Plan {
  group: ServiceGroup;
  name: string;
  usd: number;
  slug: string;
  tagline: string;
  includes: string[];
  timeline: string;
  featured: boolean;
}

export const PLANS: Plan[] = [
  {
    group: "starter",
    name: "Portfolio Website",
    slug: "portfolio-websites",
    usd: 185,
    tagline:
      "One scrollable page that makes your work look worth hiring you for.",
    includes: [
      "One custom single-page portfolio",
      "Sections for intro, about, your work and contact",
      "Projects shown as sections, not separate pages",
      "Mobile-first responsive design",
      "On-page SEO so the page can be found",
      "2 rounds of revisions",
    ],
    timeline: "2–5 days",
    featured: false,
  },
  {
    group: "starter",
    name: "Landing Page",
    slug: "landing-pages",
    usd: 300,
    tagline: "One focused page that turns a visitor into an enquiry.",
    includes: [
      "One custom landing page around your offer",
      "Mobile-first responsive design",
      "On-page SEO on the page itself",
      "Contact form or call-to-action button",
      "2 rounds of revisions",
    ],
    timeline: "3–7 days",
    featured: false,
  },
  {
    group: "business",
    name: "Business Website",
    slug: "business-sites",
    usd: 600,
    tagline: "An advanced landing page, structured for an actual business.",
    includes: [
      "Advanced multi-section business site",
      "Gallery, product or services showcase",
      "SEO worked into the page structure",
      "Enquiry and contact sections",
      "Placeholders ready for your own copy",
      "2 rounds of revisions",
    ],
    timeline: "1–2 weeks",
    featured: false,
  },
  {
    group: "business",
    name: "Firebase MVP",
    slug: "firebase",
    usd: 1100,
    tagline: "A working, authenticated product — not a prototype.",
    includes: [
      "Firebase auth with roles",
      "Cloud Firestore database and security rules",
      "Cloud Functions for server-side logic",
      "Real-time data and file uploads",
      "Admin panel for managing users or content",
      "Hosting and deploys you control",
      "2 rounds of revisions",
    ],
    timeline: "3–6 weeks",
    featured: true,
  },
  {
    group: "business",
    name: "Full-Stack App",
    slug: "full-stack-web-apps",
    usd: 2150,
    tagline: "Custom back-end, database and architecture that scales.",
    includes: [
      "Custom Spring Boot or Node.js back-end",
      "MongoDB or MySQL database design",
      "REST API and third-party integrations",
      "Admin dashboard and role-based access",
      "Architecture and data model designed up front",
      "Handover documentation and walkthrough",
    ],
    timeline: "6–12 weeks",
    featured: false,
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "How much does a website cost?",
    answer:
      "A portfolio website is $185 (about LKR 60,000), a landing page $300 (about LKR 97,500), and a business website $600 (about LKR 195,000). For products that need accounts and a database, a Firebase MVP is $1,100 (about LKR 357,500) and a custom full-stack application is $2,150 (about LKR 699,000). Every project is quoted as one fixed price after a free scoping conversation — no hourly billing and no surprise invoices.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A portfolio website usually ships in 2 to 5 days and a landing page in 3 to 7 days. A business website takes 1 to 2 weeks, a Firebase MVP 3 to 6 weeks, and a full-stack application 6 to 12 weeks. Treat these as estimates rather than guarantees — timelines move with your requirements, how fast content and feedback come in, and how many rounds of changes you want. You get a realistic date in writing before any work starts.",
  },
  {
    question: "Can I get more than the package includes?",
    answer:
      "Usually, yes. If you need extra pages, sections, integrations or a feature we have not listed, tell us and we will work it into the build. Anything beyond the package is quoted separately and agreed with you before it starts, so the price you signed off on does not quietly change.",
  },
  {
    question: "What does 'no budget is an obstacle' actually mean?",
    answer:
      "It means we do not turn away small businesses and early-stage founders. We scope tightly, build in stages, and quote a fixed price that fits a real budget. If your budget is genuinely small we will tell you honestly what is achievable with it rather than taking work we cannot do properly.",
  },
  {
    question: "Do I own the code and the project?",
    answer:
      "Yes. 100% of the source code is pushed to a repository you control from day one, and every project is deployed to your own hosting account. There are no licences, no lock-in, and no hosting hostage situations. You can leave with everything at any point.",
  },
  {
    question: "Do you work with clients outside Sri Lanka?",
    answer:
      "Yes. iTrans works remotely with startups and small businesses worldwide, including Sri Lanka. We communicate asynchronously by default, respond within 24 hours, and work comfortably across every timezone.",
  },
  {
    question: "How do payments work?",
    answer:
      "Projects typically start with 50% to begin and 50% on launch, with a written scope and timeline attached. Payments are accepted internationally. For larger projects we can break the work into paid milestones so you are never funding the entire build up front.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes handover documentation and a walkthrough so you understand how to make changes yourself. We also offer an optional monthly care plan covering hosting, updates, backups and small changes, cancellable at any time with no contract.",
  },
  {
    question: "Do you do SEO as well?",
    answer:
      "Yes. On-page SEO is included in every build — semantic HTML, meta tags, Open Graph and Twitter cards, structured data, XML sitemap, robots.txt and Core Web Vitals optimisation. If you need ongoing content and link building after launch, that is a separate monthly service.",
  },
];

export const SEO_KEYWORDS: string[] = [
  "web development agency",
  "web developer for startups",
  "custom web development",
  "portfolio website design",
  "portfolio website developer",
  "single page portfolio",
  "landing page design",
  "landing page developer",
  "business website design",
  "small business website",
  "full stack web development",
  "firebase developer",
  "firebase development services",
  "react developer",
  "next.js developer",
  "hire web developer",
  "startup web development",
  "affordable web development",
  "web application development",
  "responsive web design",
  "web development sri lanka",
  "hire freelance developer",
];
