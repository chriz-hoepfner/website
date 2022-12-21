import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 1.5 },
  }),
};

const child = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const SKILLS = [
  { label: 'TypeScript', rank: 5 },
  { label: 'React', rank: 4 },
  { label: 'React Native', rank: 3 },
  { label: 'Next.js', rank: 4 },
  { label: 'NestJs', rank: 2 },
  { label: 'Vue', rank: 3 },
  { label: 'Code Reviews', rank: 4 },
  { label: 'Mentoring', rank: 3 },
  { label: 'Scrum', rank: 2 },
  { label: 'Jest', rank: 3 },
  { label: 'Cypress', rank: 2 },
  { label: 'Tailwind', rank: 3 },
  { label: 'AWS', rank: 3 },
  { label: 'git', rank: 3 },
  { label: 'REST APIs', rank: 3 },
  { label: 'GraphQL', rank: 3 },
  { label: '360° Feedback', rank: 2 },
  { label: 'Technical Recruiting', rank: 2 },
  { label: 'GitHub Actions', rank: 3 },
  { label: 'Cloud Functions', rank: 2 },
  { label: 'Docker', rank: 2 },
  { label: 'SQL', rank: 2 },
  { label: 'NoSql', rank: 2 },
  { label: 'People Development', rank: 1 },
  { label: 'Puppeteer', rank: 1 },
  { label: 'Firebase', rank: 1 },
  { label: 'BEM', rank: 1 },
  { label: 'Datadog', rank: 1 },
  { label: 'New Relic', rank: 1 },
  { label: 'Sentry', rank: 1 },
  { label: 'Electron', rank: 1 },
  { label: 'Algolia', rank: 1 },
].sort((a, b) => {
  if (a.rank > b.rank) {
    return -1;
  }

  if (a.rank < b.rank) {
    return 1;
  }

  return a.label.toLowerCase() > b.label.toLowerCase() ? -1 : 1;
});

export const Skills = () => {
  return (
    <div className="text-center font-mono text-lg text-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex max-w-[400px] flex-wrap items-center justify-center"
      >
        {SKILLS.map(({ label, rank }, index) => (
          <motion.div
            variants={child}
            className="m-1 inline-block bg-black px-3 leading-none"
            style={{
              fontSize: 4 + rank * 6,
              paddingInline: 4 + rank * 3,
              paddingBlock: 4 + rank,
            }}
            key={index}
          >
            {label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
