import { Variant, Variants, motion } from 'framer-motion';
import Image from 'next/image';

import { Foldable } from 'components/layout/foldable';
import { Avatar } from 'components/shared/avatar';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: () => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  }),
};

const child: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const About = () => {
  const experienceInYears = new Date().getFullYear() - 2013;

  return (
    <motion.article
      className="relative"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={child}
        className="flex flex-col items-center xs:flex-row"
      >
        <h1 className="flex-shrink-0 flex-grow font-bold leading-[1.1]">
          <div className="text-[60px] sm:text-[80px]">Christian</div>
          <div className="text-[68px] sm:text-[92px]">Höpfner</div>
        </h1>

        <div className="mt-8 max-w-[200px] flex-shrink xs:ml-12 xs:mt-0 lg:hidden">
          <Avatar bg="contessaRed" />
        </div>
      </motion.div>

      <div className="max-w-lg">
        <motion.div variants={child}>
          <div className="mt-10 text-xs uppercase">{'//'} About me</div>

          <h2 className="mt-4 text-2xl font-bold leading-[1.7] xs:text-3xl xs:leading-[1.5]">
            Hi, I&apos;m Chris, a Software Engineer from Berlin with{' '}
            <strong>{experienceInYears}+ years of experience</strong> in
            software development.
          </h2>
        </motion.div>

        <motion.div
          variants={child}
          className="text-xl leading-[1.7] xs:leading-[1.5]"
        >
          <p className="mt-7"></p>

          <p className="mt-3">
            I just started a new challenge as{' '}
            <strong>Fullstack Engineer</strong> at <strong>Cozero</strong>{' '}
            supporting companies on their decarbonization journey.
          </p>

          <div className="mt-4">
            <Foldable>
              <div className="mt-6 leading-[1.8]">
                <p>
                  In the past, I have worked with many companies (startups and
                  PE), supporting them with{' '}
                  <strong>
                    audits, system design, development and recruiting
                  </strong>
                  . During my time at Project A, I had the opportunity to gain
                  first leadership experience while{' '}
                  <strong>leading a great team</strong> of six frontend
                  engineers.
                </p>

                <p className="mt-3">
                  This year, as technical <strong>co-founder</strong>, I took
                  the exciting chance to kick-start a <strong>SaaS B2B</strong>{' '}
                  company. It helped me a lot to gain a more holistic view on
                  the <strong>business value of tech</strong>. After
                  successfully <strong>launching an MVP</strong> to customers
                  and securing <strong>pre-seed VC funding</strong>, I decided
                  to end this journey.
                </p>

                <p className="mt-3">Now it&apos;s time to start a new one!</p>
              </div>
            </Foldable>
          </div>
        </motion.div>

        <motion.div variants={child} className="text-xl leading-[1.8]">
          <p className="mt-6">Happy to get in touch.</p>
          <p className="mt-1 font-cursive text-4xl">Cheers Chris</p>
        </motion.div>
      </div>
    </motion.article>
  );
};
