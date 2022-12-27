import { motion } from 'framer-motion';
import { getRankedSkills, getSortedSkillsByCategory } from 'services/skill';

import { SKILLS } from 'constants/skills';

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 1.5 },
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

export const Skills = () => {
  return (
    <div className="text-center font-mono text-lg text-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex max-w-[420px] flex-wrap items-center justify-center"
      >
        {getRankedSkills(SKILLS).map(({ label, rank = 1 }, index) => (
          <motion.div
            variants={child}
            className="m-1 inline-block bg-black px-3 leading-none"
            style={{
              fontSize: 6 + rank * 5,
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
