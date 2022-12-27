import { TTimelineItem } from 'types/cv';

export const BASE_INFOS = [
  { label: 'Mobile', data: '+49 176 62349527' },
  { label: 'Email', data: 'contact@christian-hoepfner.com' },
  { label: 'Web', data: 'christian-hoepfner.com' },
  { label: 'Address', data: 'Giselastraße 35, 10317 Berlin' },
  { label: 'Date of birth', data: '17.04.1988' },
];

export const EDUCATION_STAGES: TTimelineItem[] = [
  {
    from: 'Oct 2012',
    to: 'Jul 2013',
    title: 'University of Applied Sciences, Berlin',
    subtitle: 'Applied informatics (M. Sc., 2 semesters)',
  },
  {
    important: true,
    from: 'Oct 2009',
    to: 'Jul 2012',
    title: 'University of Applied Sciences, Berlin',
    subtitle: 'International media & computing (B. Sc.)',
    description: 'Degree: 1,27 (passed with distinction)',
  },
  {
    from: 'Oct 2008',
    to: 'Jul 2009',
    title: 'Humboldt University',
    subtitle: 'Mathematics (Diploma, 2 semesters)',
  },
  {
    from: 'Oct 2008',
    to: 'Jul 2009',
    title: 'Leonard Bernstein Grammar School',
    subtitle: 'Intensive courses: Mathematics, informatics',
  },
];

export const PROFESSIONAL_STAGES: TTimelineItem[] = [
  {
    important: true,
    from: 'Jan 2022',
    to: 'Dec 2022',
    title: 'acehub',
    subtitle: 'Co-Founder & Fullstack Engineer',
    description:
      'Architecture, planning & development of SaaS platform (serverless backend, web & mobile clients) for story based employer-employee communication',
    tech: 'TypeScript, React Native, Next.js, TailwindCSS, Jest, Vercel, Firebase, NoSQL, Cloud Functions, Algolia, GraphQL',
  },
  {
    important: true,
    from: 'Mar 2020',
    to: 'Jul 2022',
    title: 'CleverShuttle',
    subtitle: 'Senior Frontend Engineer',
    description:
      'Feature planning & development of Vue.js web applications for DRT operations, technical recruiting support',
    tech: 'TypeScript, Vue.js, VueX, SCSS Modules, Jest, KeyCloak, Cypress, GitHub Actions',
  },
  {
    important: true,
    from: 'Feb 2020',
    to: 'May 2022',
    title: 'Votesquare',
    subtitle: 'Co-Founder & CEO',
    description:
      'Conception, design & development of a SaaS solution for online elections, customer onboarding & technical support during election events, company administration',
    tech: 'TypeScript, React, SCSS Modules, Server Sent Events, GitHub Actions, AWS (S3, Cloudfront, Zone 53)',
  },
  {
    important: true,
    title: 'Project A Ventures',
    items: [
      {
        from: 'Dec 2018',
        to: 'Jan 2020',
        description:
          'Additional: Resource planning, employee support, reviews & development, team strategy development',
        subtitle: 'Teamlead Frontend Engineering',
      },
      {
        from: 'Jun 2018',
        to: 'Dec 2020',
        subtitle: 'Frontend Architect',
        description:
          'Additional: Venture system auditing & consulting, architecture planning, technical recruiting support',
      },
      {
        from: 'Oct 2015',
        to: 'May 2018',
        subtitle: 'Senior Frontend Engineer',
        description:
          'Project-based work with various Ventures (e.g. Spryker, kfzteile24), Feature planning & development, technology evaluation',
        tech: 'React, Vue.js, Next.js, Electron, jQuery, SCSS, CSS-in-JS, Twig, Symfony, Spryker',
      },
    ],
  },
  {
    from: 'Dec 2013',
    to: 'Sep 2015',
    title: 'SIRUP GmbH & CO. KG',
    subtitle: 'Frontend Developer in full-service agency',
    description:
      'Development of frontend systems for E-Commerce, CMS-based websites & JS-/Hybrid-Applications, Node.js Microservices',
    tech: 'Drupal, Typo3 – JQuery, React, LESS, AngularJS, Ionic 1, Express',
  },
  {
    from: 'Feb 2013',
    to: 'Nov 2013',
    title: 'University of Applied Sciences, Berlin',
    subtitle: 'Web Developer in research group "Creative Media"',
    description:
      'Development of web application for planning and 3D-visualization of museum exhibitions',
    tech: 'AngularJS, Three.js, LESS – Laravel, MySQL',
  },
  {
    from: 'Jul 2012',
    to: 'Present',
    title: 'Christian Höpfner Informatics',
    subtitle: 'Freelancing',
    description:
      'Project based development of web applications & CMS-based websites',
    tech: 'WordPress, GraphQL, React, Next.js',
  },
  {
    from: 'Nov 2011',
    to: 'Jun 2012',
    title: 'Techini Health SLR - Barcelona, Spain',
    subtitle: 'Internship in web development',
    description:
      'Development of web application "MijnCLIC" for prevention of heart diseases',
    tech: 'HTML, jQuery, LESS - PHP, MySQL',
  },
  {
    from: 'Apr 2011',
    to: 'Oct 2011',
    title: 'Tolina GmbH',
    subtitle: 'Working student, Java development',
  },
];
