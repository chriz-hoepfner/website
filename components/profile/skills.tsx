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
  { label: 'TypeScript', rank: 3 },
  { label: 'React', rank: 3 },
  { label: 'React Native', rank: 2 },
  { label: 'Next.js', rank: 3 },
  { label: 'NestJs', rank: 2 },
  { label: 'Vue', rank: 2 },
  { label: 'Tailwind', rank: 2 },
  { label: 'BEM', rank: 1 },
  { label: 'git', rank: 1 },
  { label: 'Firebase', rank: 1 },
  { label: 'SQL', rank: 1 },
  { label: 'NoSql', rank: 1 },
  { label: 'GitHub Actions', rank: 1 },
];

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
            className="m-1 inline-block bg-black px-3"
            style={{
              fontSize: 4 + rank * 8,
              paddingInline: 4 + rank * 4,
              paddingBlock: 2 + rank * 2,
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
