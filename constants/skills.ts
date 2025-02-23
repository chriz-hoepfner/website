import { ISkill } from 'types/cv';

// rank: visualization for homepage
// category/rating: grouping/sorting for CV

export const SKILLS: ISkill[] = [
  { category: 'Languages', label: 'German' },
  { category: 'Languages', label: 'English' },

  { category: 'Programming', label: 'TypeScript', rank: 5, rating: 4.5 },
  { category: 'Programming', label: 'HTML & CSS', rank: 5, rating: 4 },
  { category: 'Programming', label: 'PHP', rating: 3 },
  { category: 'Programming', label: 'Java', rating: 2 },
  { category: 'Programming', label: 'Bash', rating: 2 },

  { category: 'Frontend', label: 'React', rank: 5, rating: 4.5 },
  { category: 'Frontend', label: 'Next.js', rank: 4, rating: 4.5 },
  { category: 'Frontend', label: 'React Native', rank: 2, rating: 3 },
  { category: 'Frontend', label: 'Vue.js', rank: 3, rating: 3 },
  { category: 'Frontend', label: 'TailwindCSS', rank: 3, rating: 4 },
  { category: 'Frontend', label: 'Electron', rank: 1, rating: 2 },

  { category: 'Backend', label: 'NestJS', rank: 4, rating: 4.5 },
  { category: 'Backend', label: 'SQL', rank: 3, rating: 4 },
  { category: 'Backend', label: 'NoSql', rank: 2, rating: 3 },
  { category: 'Backend', label: 'Puppeteer', rank: 1, rating: 2 },

  { category: 'Testing', label: 'Jest', rank: 3, rating: 4 },
  { category: 'Testing', label: 'Cypress', rank: 2, rating: 3 },

  { category: 'OPS', label: 'git', rank: 3, rating: 4 },
  { category: 'OPS', label: 'REST APIs', rank: 3, rating: 4 },
  { category: 'OPS', label: 'AWS', rank: 4, rating: 3.5 },
  { category: 'OPS', label: 'GraphQL', rank: 2, rating: 2 },
  { category: 'OPS', label: 'GitHub Actions', rank: 3, rating: 4 },
  { category: 'OPS', label: 'Docker', rank: 2, rating: 3 },
  { category: 'OPS', label: 'Firebase', rank: 1, rating: 3 },
  { category: 'OPS', label: 'Datadog', rank: 1 },
  { category: 'OPS', label: 'New Relic', rank: 1 },
  { category: 'OPS', label: 'Sentry', rank: 1 },
  { category: 'OPS', label: 'Algolia', rank: 1 },

  { category: 'Methodologies', label: 'Agile', rank: 2 },
  { category: 'Methodologies', label: 'Technical Recruiting', rank: 2 },
  { category: 'Methodologies', label: 'BDD, TDD' },
  { category: 'Methodologies', label: 'FP, OOP' },
  { category: 'Methodologies', label: 'RWD' },
  { category: 'Methodologies', label: 'People Management', rank: 3 },
  { category: 'Methodologies', label: 'Technical Product Management', rank: 3 },

  { category: 'Design', label: 'Figma', rank: 1 },
  { category: 'Design', label: 'Sketch' },

  { label: 'Code Reviews', rank: 4, rating: 4 },
  { label: 'Mentoring', rank: 3, rating: 3 },
  { label: 'Product Planning', rank: 2, rating: 3 },
];
