// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Kenneth Carredo',
  role: 'Web Developer',
  tagline:
    'Backend development, UI/UX design and practical solutions built from real business requirements.',
  location: 'Davao City, Philippines',
  email: 'carredo.kenneth@gmail.com',
  // Served from public/. Replace that file to update the download.
  resumeUrl: '/Kenneth_Carredo_Resume.pdf',
  // Add links as { label: 'GitHub', url: 'https://github.com/you' }.
  socials: [],
  about: [
    "Hi, I'm Kenneth, a web developer with experience in backend development, UI/UX design, and administrative work. I'm familiar with web applications, database management, troubleshooting, and translating business requirements into practical solutions.",
    "I've built and maintained backend systems and cloud deployments, designed user-friendly interfaces and prototypes, and kept business data accurate and organized. Today I also help agency clients with their websites, content, and digital tools.",
  ],
}

export const skills = [
  {
    group: 'Web Development',
    items: ['HTML & CSS', 'JavaScript', 'PHP', 'Laravel', 'Vue.js', 'SQL / Database Management'],
  },
  {
    group: 'UI/UX Design',
    items: ['Figma', 'Adobe Photoshop', 'Canva', 'Wireframing & Prototyping'],
  },
  {
    group: 'Website & Digital Tools',
    items: [
      'Squarespace',
      'WordPress',
      'Google Analytics',
      'Google Search Console',
      'Git / GitHub',
      'Visual Studio Code',
    ],
  },
  {
    group: 'Administrative & Business',
    items: [
      'Data Entry',
      'Data Management',
      'Documentation',
      'Microsoft Office',
      'Google Workspace',
      'Inventory & Records Management',
      'Technical Troubleshooting',
    ],
  },
  {
    group: 'Familiar With',
    items: ['Docker', 'n8n', 'REST APIs', 'Webhooks', 'Cloudflare', 'DigitalOcean'],
  },
]

// description can be a string or a list of paragraphs; the card previews the
// first and hides the rest behind "Read more". status (e.g. 'Ongoing') shows
// as a badge by the title; team shows as a line under it. features, contributions,
// approach, liveUrl, codeUrl and note are optional. note replaces the links
// when there is nothing public to link to.
export const projects = [
  {
    title: 'Horizons: The Worlds Beyond',
    status: 'Ongoing',
    description: [
      'Horizon is an experimental persistent-world RPG project focused on creating a living, interactive world where players can explore locations, develop their characters, pursue activities, and gradually create their own stories through their actions.',
      "I designed the game's overall concept, gameplay direction, world structure, and user experience, and developed the project with heavy AI assistance throughout the implementation process. I used AI as a development partner for architecture, coding, debugging, iteration, and feature development while making the product and design decisions myself.",
      'The current prototype includes a dashboard-based player experience with character information, location hierarchy, world time, weather, population data, activities, local events, and world news. The project is being developed incrementally toward a playable persistent-world experience.',
    ],
    contributions: [
      'Designed the core Horizon game concept and gameplay direction',
      'Planned the world and location hierarchy',
      'Designed the player dashboard and overall UX',
      'Defined gameplay systems and progression concepts',
      'Directed feature development and implementation',
      'Used AI extensively for coding, debugging, technical exploration, and iteration',
      'Tested and refined the implemented features',
      'Made product, design, and gameplay decisions throughout development',
    ],
    approach:
      'AI-assisted software development, with human-led product design, direction, testing, and decision-making.',
    tech: ['Next.js', 'React', 'TypeScript', 'SQLite', 'Drizzle ORM', 'Tailwind CSS', 'Docker'],
    liveUrl: 'https://horizon.makerforge.space',
  },
  {
    title: 'Business Automation Dashboard',
    description: [
      'An internal operations platform for an e-commerce business that connects its Squarespace store, email marketing and social media into one dashboard. n8n workflows collect orders and product data automatically, a Python API stores and serves it, and a React dashboard gives the team one place to work.',
      'The whole stack runs in Docker on a cloud server behind a shared reverse proxy, with sign-in accounts, role-based access and automatic HTTPS.',
    ],
    features: [
      'Orders and products synced from Squarespace every 15 minutes by n8n workflows',
      'Email design builder and editor, plus email tracking on the orders page',
      'Facebook Page and Instagram connections for social media publishing and review',
      'Task list with subtasks, threaded comments, review workflow and work lists',
      'Support tickets, custom order forms and an image library',
      'Automations page that reads the live workflow list back from n8n',
    ],
    tech: ['React', 'Vite', 'Python', 'FastAPI', 'SQLite', 'n8n', 'Squarespace API', 'Meta Graph API', 'Docker'],
    note: 'Private client system, no public demo',
  },
  {
    title: 'BioLock',
    team: 'Capstone project · team of 5, 3 developers',
    description: [
      'A geolocation-enabled mobile and web HRIS for attendance and payroll management, built for MK Graphx Davao Advertising and Services to replace their manual Daily Time Record (DTR) sheets. Employees clock in and out automatically through GPS geofencing on an Android app, while administrators manage attendance, leave, overtime and payroll from a web dashboard.',
      'Full title: "Biolock: Design and Implementation of a Geolocation-Enabled Mobile and Web-Based HRIS for Attendance and Payroll Management at MK Graphx Davao Advertising and Services." Our capstone for the BS in Information Technology at Interface Computer College, which passed its oral defense in June 2025.',
      'I was one of the three developers on a five-person team, working across the React web dashboard and the Django REST backend.',
    ],
    features: [
      'Automatic GPS clock-in and clock-out when employees enter or leave the office geofence',
      'Device registration and server-side validation for secure attendance',
      'Android app for employees that works online and offline',
      'Leave, overtime and attendance adjustment requests with admin approval',
      'Automated payroll computation from attendance, leave and schedules, with payslips',
      'Admin dashboard with attendance analytics, activity logs and downloadable PDF reports',
      'Push and in-app notifications through Firebase',
    ],
    contributions: [
      'Built attendance reports and fixed PDF report generation and downloads',
      'Created the notification model, Firebase push notifications and web admin notifications',
      'Built one-time, expiring registration links with a send-link flow over SMTP',
      'Added sign-up validation: password rules, confirm password and error handling',
      'Developed user, department and position APIs and serializers in Django',
      'Built React components, pages and state management for the admin and user dashboards',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Kotlin', 'Django', 'Django REST Framework', 'PostgreSQL', 'Firebase', 'AWS'],
    note: 'Capstone project, no public demo',
  },
  {
    title: 'DNS Panel',
    description:
      'A self-hosted control panel for sharing a domain. Invited users get their own subdomain and manage its DNS records through the Cloudflare API, with admin invites, per-user limits and an audit log.',
    tech: ['Next.js', 'TypeScript', 'Cloudflare API', 'SQLite', 'Drizzle ORM', 'Tailwind CSS', 'Docker'],
    note: 'Private tool for my own domains, no public demo',
  },
]

export const experience = [
  {
    role: 'Virtual Assistant',
    company: 'Doneverse',
    period: 'Apr 2026 – Present',
    location: 'Davao City, Philippines',
    points: [
      'Manage website content and updates for agency clients.',
      'Create social media content and marketing materials based on client requirements.',
      'Prepare content calendars and promotional materials.',
      'Assist with email marketing and website-related tasks.',
      'Use website management, design, analytics, and productivity tools to complete client projects.',
      'Communicate with clients and team members regarding requirements, revisions, and deliverables.',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Rooche Digital Inc',
    period: 'Apr 2024 – Jan 2026',
    location: 'Quezon City, Philippines',
    points: [
      'Developed and maintained backend systems to support business operations and mobile applications.',
      'Managed and organized large datasets, ensuring accuracy and system reliability.',
      'Collaborated with cross-functional teams to improve workflows and system efficiency.',
      'Deployed and maintained cloud-based systems (DigitalOcean, AWS) ensuring uptime and performance.',
      'Troubleshot system issues and implemented solutions to improve stability and user experience.',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'Infosoft Studio',
    period: 'Jul 2023 – Dec 2023',
    location: 'Davao City, Philippines',
    points: [
      'Designed user-friendly interfaces and prototypes to improve usability and navigation.',
      'Translated business requirements into intuitive digital experiences.',
      'Collaborated with teams to enhance overall user experience and workflow efficiency.',
    ],
  },
  {
    role: 'Administrative / Checker',
    company: 'JNM Builders Inc.',
    period: 'Nov 2020 – Sep 2022',
    location: 'Davao City, Philippines',
    points: [
      'Managed data entry and maintained accurate financial and inventory records.',
      'Analyzed stock data to support purchasing decisions and prevent shortages.',
      'Assisted customers by providing clear and accurate information.',
      'Supported daily business operations through organization and reporting.',
    ],
  },
]

export const education = [
  { degree: 'Bachelor of Science in Information Technology', school: 'Interface Computer College' },
  { degree: 'Diploma in Information Technology', school: 'Interface Computer College' },
]

export const certificates = [
  'Visual Graphic Design NC III',
  'Computer Servicing NC II',
  'Web Design NC III',
]
