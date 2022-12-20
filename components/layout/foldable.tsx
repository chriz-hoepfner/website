import { PropsWithChildren, useCallback, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const animationStates = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.4 },
      opacity: {
        duration: 0.25,
        delay: 0.15,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4 },
      opacity: {
        duration: 0.25,
      },
    },
  },
};

export const Foldable = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(isOpen => !isOpen);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            {...animationStates}
            className="origin-left text-base transition-transform duration-300 ease-in-out hover:scale-125"
            onClick={toggle}
          >
            Read more ...
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            className="border-l-4 border-black/10 pl-5 dark:border-white/10"
            {...animationStates}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
