import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

import { Footer } from 'components/layout/footer';
import { About } from 'components/profile/about';
import { Companies } from 'components/profile/companies';
import { HireButton } from 'components/profile/hireButton';
import { Skills } from 'components/profile/skills';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: () => ({
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 1 },
  }),
};

const child: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
export const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative flex flex-grow flex-col lg:flex-row"
      >
        <section className="flex items-center justify-end bg-dawnPink text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100 lg:h-full lg:w-1/2">
          <div className="w-full max-w-[850px] p-[50px] pb-[110px] lg:p-[100px]">
            <About />
          </div>
        </section>

        <section className="relative flex min-h-[400px] flex-col items-start justify-center bg-contessaRed p-[50px] lg:w-1/2 lg:p-[100px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 lg:top-1/2 lg:left-0">
            <motion.div variants={child}>
              <HireButton />
            </motion.div>
          </div>

          <motion.div
            variants={child}
            className="flex w-full flex-col items-center justify-center lg:max-w-[750px]"
          >
            <div className="pt-[75px] pb-3 lg:p-0">
              <div className="relative hidden lg:block">
                <div className="absolute bottom-0 left-0 right-0 aspect-square w-full rounded-full bg-waferWhite shadow-md"></div>

                <div className="relative w-full max-w-[400px] overflow-hidden rounded-xl ">
                  <Image
                    alt="Portrait photo"
                    src="/images/portrait_circle.webp"
                    width={400}
                    height={500}
                    className="!aspect-[4/5] !w-full rounded-b-full"
                  />
                </div>
              </div>

              <div className="lg:mt-12">
                <Skills />
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>

      <Companies />
      <Footer />
    </div>
  );
};

export default Home;
