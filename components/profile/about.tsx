import { Variant, Variants, motion } from 'framer-motion';
import Image from 'next/image';

import { Foldable } from 'components/layout/foldable';

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
  return (
    <motion.article
      className="relativ
      "
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

        <div className="relative mt-8 flex-shrink xs:ml-12 xs:mt-0 lg:hidden">
          <div className="absolute bottom-0 left-0 right-0 aspect-square w-full rounded-full bg-contessaRed shadow-md"></div>

          <div className="relative w-full max-w-[200px] overflow-hidden rounded-full">
            <Image
              alt="Portrait photo"
              src="/images/portrait_circle.webp"
              width={175}
              height={219}
              className="!aspect-[4/5] !w-full"
            />
          </div>
        </div>
      </motion.div>

      <div className="max-w-lg">
        <motion.div variants={child}>
          <div className="mt-10 text-xs uppercase">{'//'} About me</div>

          <h2 className="mt-4 text-2xl font-bold leading-[1.7] xs:text-3xl xs:leading-[1.5]">
            If you are looking for a Full-Stack TypeScript Engineer, you just
            came to the right place.
          </h2>
        </motion.div>

        <motion.div
          variants={child}
          className="text-xl leading-[1.7] xs:leading-[1.5]"
        >
          <p className="mt-7">
            Hi, I&apos;m Chris, a Software Engineer from Berlin with{' '}
            <strong>10+ years of experience</strong> in Frontend and Full-Stack
            development.
          </p>

          <p className="mt-3">
            Currently, I am looking for a new challenge as{' '}
            <strong>Lead or Senior Engineer</strong> to take{' '}
            <strong>team/product</strong> responsibilities, bring in experience
            and dedication.
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
