import { Variant, Variants, motion } from 'framer-motion';
import Image from 'next/image';

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
          <div className="text-[60px] sm:text-[82px]">Christian</div>
          <div className="text-[66px] sm:text-[92px]">Höpfner</div>
        </h1>

        <div className="relative mt-10 aspect-square w-full max-w-[150px] flex-shrink overflow-hidden rounded-full bg-contessaRed shadow-lg xs:ml-8 xs:mt-0 xs:max-w-[200px] lg:hidden">
          <Image
            alt="Portrait photo"
            src="/images/portrait.png"
            width={300}
            height={300}
            className="!aspect-square !w-full"
          />
        </div>
      </motion.div>

      <div className="max-w-lg">
        <motion.div variants={child}>
          <div className="mt-10 text-xs uppercase">{'//'} About me</div>

          <h2 className="mt-2 text-2xl font-bold">
            Looking for a Full-Stack TypeScript Engineer?
          </h2>
        </motion.div>

        <motion.div variants={child} className="leading-[1.8]">
          <p className="mt-6">
            Hi, I&apos;m a Software Engineer from Berlin with{' '}
            <strong>10+ years of experience</strong> in Frontend/Full-Stack
            development.
          </p>

          <p className="mt-3">
            Currently, I am looking for a new challenge as{' '}
            <strong>Lead/Senior Engineer</strong> to take{' '}
            <strong>team/product</strong> responsibilities, bring in experience
            and dedication.
          </p>
        </motion.div>

        <motion.div variants={child} className="leading-[1.8]">
          <p className="mt-3">
            In the past I&apos;ve been working with many companies, supporting
            them with{' '}
            <strong>audits, system design, development and recruiting</strong>.
          </p>

          <p className="mt-3">
            During my time at Project A I had the opportunity to{' '}
            <strong>lead an amazing team</strong> of 6 frontend engineers.
          </p>
        </motion.div>

        <motion.div variants={child} className="leading-[1.8]">
          <p className="mt-3">
            This year, as technical <strong>co-founder</strong>, I took the
            chance to kick-start a SaaS B2B product, gaining a more holistic
            view on the <strong>importance of business impact of tech</strong>.
          </p>
        </motion.div>
      </div>

      <motion.div variants={child} className="leading-[1.8]">
        <p className="mt-6">
          Happy to get in touch and exchange
          <br /> about interesting opportunities.
        </p>

        <p className="mt-4  font-cursive text-4xl">Cheers Christian</p>
      </motion.div>
    </motion.article>
  );
};
