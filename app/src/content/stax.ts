export type FeatureItem = {
  title: string;
  description: string;
};

export type UseCaseItem = {
  number: string;
  title: string;
  description: string;
};

export type ResourceItem = {
  type: string;
  date: string;
  title: string;
};

export const productFeatures: FeatureItem[] = [
  {
    title: 'Automated Workflows',
    description:
      'Eliminate repetitive tasks like census collection, email follow-ups, and data reconciliation with powerful automation, freeing your team to focus on strategy and client growth.',
  },
  {
    title: 'Payroll and census data collection',
    description:
      'Integrate with 200+ payroll providers or upload payroll reports directly. Automate customized annual questionnaires and ensure clean, compliant data with advanced scrubbing against plan provisions.',
  },
  {
    title: 'Smart Inbox with auto-responses and task creation',
    description:
      'AI-powered inbox that analyzes emails, suggests responses, and automatically creates tasks, complete with client satisfaction monitoring through pulse scores.',
  },
  {
    title: 'Unified client portal for seamless collaboration',
    description:
      'Offer plan sponsors a modern, branded portal to securely share files, complete tasks, track communications, and access real-time plan information—all designed to make TPAs look like heroes.',
  },
];

export const trustFeatures: FeatureItem[] = [
  {
    title: 'Brokerage Statement Filing',
    description:
      'Bulk upload, sort, and file statements by parameters like account type, date, or matching prior statements. Stax.ai organizes everything into the correct client directories automatically.',
  },
  {
    title: 'Automated Data Extraction',
    description:
      'Stax.ai automatically extracts balances, contributions, distributions, expenses, fees, and each individual transaction—populating them into the respective asset spreadsheets.',
  },
  {
    title: 'Asset Reconciliation',
    description:
      'Effortlessly reconcile transactions and balances from multiple financial institutions, saving hours of manual work while reducing errors.',
  },
];

export const useCases: UseCaseItem[] = [
  {
    number: '01',
    title: 'Automate New Plan-Sponsor Deal Flow and Onboarding',
    description:
      'Streamline deal management, onboarding, and payroll data collection with a modern, automated workflow that saves time and reduces friction.',
  },
  {
    number: '02',
    title: 'Boost Margins with Automated Trust Reconciliation',
    description:
      'Scale high-margin services with AI-driven brokerage statement processing, automated reconciliation, and audit-ready compliance—without the manual work.',
  },
  {
    number: '03',
    title: 'Seamless 3(16) Payroll Processing & Compliance',
    description:
      'Eliminate manual payroll submissions with live payroll data, automated 3(16) task tracking, and real-time compliance insights in one platform.',
  },
  {
    number: '04',
    title: 'Integrated Smart Inbox for Seamless Communications',
    description:
      'Centralize emails, client messages, and meeting notes in one AI-powered inbox that prioritizes tasks and turns conversations into actions.',
  },
  {
    number: '05',
    title: 'Securely Share Files with Plan Sponsors',
    description:
      'Ditch email for a secure, white-label Client Portal that simplifies file sharing, document requests, and compliance-ready recordkeeping.',
  },
];

export const resourceItems: ResourceItem[] = [
  {
    type: 'Blog',
    date: '08.15.25',
    title: "Best CRM for Retirement TPAs (2025): The Buyer's Guide",
  },
  {
    type: 'Case study',
    date: '04.15.25',
    title: 'Compliance Geeks: 401(k)s Meet The Wizard of Middle Earth',
  },
  {
    type: 'Case study',
    date: '03.14.25',
    title: 'Hard Questions: A Math Nerd Finds Easy Answers',
  },
];

export const footerLinks = {
  products: ['Client experience', 'Trust accounting'],
  useCases: useCases.map((item) => item.title),
  company: ['About Stax.ai', 'Join Our Team'],
  resources: ['TPA Resource Library', 'Help Center', 'CX Product FAQ', 'Trust Accounting FAQ', 'Change Log', 'Legal'],
  contactAddress: ['Scottsdale, AZ 85260, US', '480-462-2778', 'help@stax.ai'],
  social: ['Linkedin', 'Youtube'],
  bottomLinks: ['Login', 'Careers'],
};
