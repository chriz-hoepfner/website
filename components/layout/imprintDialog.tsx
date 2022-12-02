import { useCallback, useEffect, useState } from 'react';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { useImprint } from './imprintContext';

export const ImprintDialog = () => {
  const { isVisible, closeDialog } = useImprint();

  return (
    <>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key="bg"
            className={classNames(
              'fixed inset-0 flex items-center justify-center p-8',
            )}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transitionDuration: '0.15s',
              }}
              exit={{
                opacity: 0,
                transitionDuration: '0.15s',
              }}
              className="absolute inset-0 bg-black/80"
              onClick={closeDialog}
            />

            <motion.div
              key="content"
              initial={{
                opacity: 0,
                translateY: -50,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
                transitionDuration: '0.1s',
              }}
              exit={{
                opacity: 0,
                translateY: -50,
                transitionDuration: '0.1s',
              }}
              className="sd:px-16 relative rounded-lg bg-gray-900 px-10 py-8 text-white shadow-lg sm:py-12"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-5 text-2xl leading-none"
                onClick={closeDialog}
                title="Close dialog"
              >
                &times;
              </button>

              <div className="max-w-[300px]">
                <h2 className="font-serif text-3xl font-bold sm:text-5xl">
                  Imprint
                </h2>

                <div className="mt-8 leading-loose">
                  Christian Höpfner
                  <br />
                  Giselatraße 35
                  <br />
                  10317 Berlin, Germany
                  <br />
                </div>

                <div className="mt-4">contact[at]christian-hoepfner.com</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
