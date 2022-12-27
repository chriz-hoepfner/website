import { Fragment } from 'react';

import { Variants, motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { getSortedSkillsByCategory } from 'services/skill';

import { TTimelineItem } from 'types/cv';

import {
  BASE_INFOS,
  EDUCATION_STAGES,
  PROFESSIONAL_STAGES,
} from 'constants/cv';
import { SKILLS } from 'constants/skills';

import { useDarkModeQuery } from 'hooks/mediaQueries';

import { Headline } from 'components/cv/headline';
import { Label } from 'components/cv/label';
import { Skill } from 'components/cv/skill';
import { TimelineItem } from 'components/cv/timelineItem';
import { TimelineLabel } from 'components/cv/timelineLabel';
import { Footer } from 'components/layout/footer';
import { Avatar } from 'components/shared/avatar';

export const container: Variants = {
  hidden: { opacity: 0 },
  visible: () => ({
    opacity: 1,
    transition: { staggerChildren: 0.075, delayChildren: 0.3 },
  }),
};

export const child: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

interface IProps {
  stage: TTimelineItem;
}

const Stage = ({ stage }: IProps) => {
  if ('subtitle' in stage) {
    return (
      <Fragment>
        <div className="col-span-2 print:break-inside-avoid">
          <TimelineLabel
            from={stage.from}
            to={stage.to}
            important={stage.important}
          />
        </div>

        <div className="col-span-10 print:col-span-7 print:break-inside-avoid md:col-span-7">
          <TimelineItem
            title={stage.title}
            subtitle={stage.subtitle}
            description={stage.description}
            important={stage.important}
            tech={stage.tech}
          />
        </div>
      </Fragment>
    );
  }

  if ('items' in stage) {
    return (
      <Fragment>
        <div className="col-span-2 print:break-inside-avoid"></div>

        <div className="col-span-10 -mb-2 mt-4 print:col-span-7 print:break-inside-avoid md:col-span-7">
          <TimelineItem title={stage.title} important={stage.important} />
        </div>

        {stage.items.map((item, itemIndex) => {
          return (
            <Fragment key={itemIndex}>
              <div className="col-span-2 -mt-2 print:break-inside-avoid">
                <TimelineLabel
                  from={item.from}
                  to={item.to}
                  important={stage.important}
                />
              </div>

              <div className="col-span-10 -mt-2 print:col-span-7 print:break-inside-avoid md:col-span-7">
                <TimelineItem
                  subtitle={item.subtitle}
                  description={item.description}
                  important={stage.important}
                  tech={item.tech}
                />
              </div>
            </Fragment>
          );
        })}

        <div className="col-span-12 mb-1 print:col-span-9 md:col-span-9"></div>
      </Fragment>
    );
  }

  return null;
};

export const CV = () => {
  const { isDarkMode } = useDarkModeQuery();

  return (
    <>
      <Head>
        <title>CV | Christian Höpfner</title>
      </Head>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex min-h-screen w-full flex-col items-center justify-center bg-waferWhite text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        <div className="my-6 print:hidden">
          <Link href={'/'}>← Back to home</Link>
        </div>

        <div className="w-full max-w-5xl p-6 pt-6 pb-12 print:pl-0 print:pb-0 md:pl-0">
          <div className="grid w-full grid-cols-12 gap-4">
            <div className="col-span-12 col-start-1 print:col-span-9 md:col-span-9">
              <div className="grid grid-cols-12 gap-4  print:grid-cols-9 md:grid-cols-9">
                <motion.div
                  variants={child}
                  className="col-span-12 col-start-3 print:col-span-6 print:col-start-3 md:col-span-6 md:col-start-3"
                >
                  <h1 className="text-5xl font-bold leading-none print:text-5xl md:text-7xl">
                    Christian Höpfner
                  </h1>

                  <p className="mt-4 text-2xl uppercase print:mt-2">
                    Software Engineer
                  </p>
                </motion.div>

                <motion.div
                  variants={child}
                  className="col-span-12 mt-4 print:col-span-9 md:col-span-9"
                >
                  <div className="grid grid-cols-12 gap-y-1 gap-x-4 print:grid-cols-9 print:gap-y-0 md:grid-cols-9">
                    {BASE_INFOS.map((info, index) => {
                      return (
                        <Fragment key={index}>
                          <div className="col-span-2 flex items-center justify-end">
                            <Label>{info.label}</Label>
                          </div>

                          <div className="col-span-10 flex items-center text-base print:col-span-7 md:col-span-7">
                            {info.data}
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="col-span-12 row-span-full row-start-1 print:col-span-3 print:col-start-10 md:col-span-3 md:col-start-10">
              <motion.div
                variants={child}
                className="flex h-full items-center justify-center"
              >
                <div className="print:md:mb-0:max-w-none mb-4 max-w-[200px] md:mb-0 md:max-w-none">
                  <Avatar bg={isDarkMode ? 'waferWhite' : 'contessaRed'} />
                </div>
              </motion.div>
            </div>
          </div>

          <div className=" grid w-full grid-cols-12 gap-4">
            <div className="col-span-12 col-start-1 mt-4 print:col-span-9 md:col-span-9">
              <motion.div
                variants={child}
                className="grid grid-cols-12 gap-4 gap-y-5 print:grid-cols-9 md:grid-cols-9"
              >
                <div className="col-span-10 col-start-3 mt-3 print:col-span-7 print:col-start-3 md:col-span-7 md:col-start-3">
                  <Headline level={2}>Education</Headline>
                </div>

                {EDUCATION_STAGES.map((stage, index) => (
                  <Stage stage={stage} key={index} />
                ))}
              </motion.div>

              <motion.div
                variants={child}
                className="mt-4 grid grid-cols-12 gap-4 gap-y-5 print:grid-cols-9 md:grid-cols-9"
              >
                <div className="col-span-10 col-start-3 mt-3 print:col-span-7 print:col-start-3 md:col-span-7 md:col-start-3">
                  <Headline level={2}>Professional Experience</Headline>
                </div>

                {PROFESSIONAL_STAGES.map((stage, index) => (
                  <Stage stage={stage} key={index} />
                ))}
              </motion.div>
            </div>

            <div className="col-span-12 mt-3 print:col-span-3 md:col-span-3">
              <motion.div variants={child}>
                <Headline level={2}>
                  <span>Skills</span>

                  <a
                    className="pl-1 text-sm font-normal normal-case transition-colors hover:text-buntingBlue/70 dark:hover:text-white"
                    target={'_blank'}
                    rel="noreferrer noopener"
                    href="https://hr.nih.gov/working-nih/competencies/competencies-proficiency-scale"
                  >
                    (Scale)
                  </a>
                </Headline>
              </motion.div>

              <div className="print:!columns-1 xs:columns-2 md:columns-1">
                {(
                  [
                    'Languages',
                    'Programming',
                    'Frontend',
                    'Backend',
                    'Testing',
                    'OPS',
                    'Methodologies',
                    'Design',
                  ] as const
                ).map(section => {
                  return (
                    <motion.div
                      variants={child}
                      className="mt-4 print:break-inside-avoid"
                      key={section}
                    >
                      <Headline level={3}>{section}</Headline>

                      <div className="mt-1">
                        {getSortedSkillsByCategory(SKILLS, section).map(
                          (skill, index) => {
                            return <Skill key={index} skill={skill} />;
                          },
                        )}
                      </div>
                    </motion.div>
                  );
                })}

                <div className="mt-6 print:break-inside-avoid">
                  <Headline level={2}>Tech Talks</Headline>

                  <div className="mt-2 text-sm">
                    Speaker at internal and external meetups (e.g. onProduct
                    Berlin)
                  </div>

                  <div className="mt-2 text-sm">
                    Speaker at conferences (e.g. Project A Knowledge Conference
                    & code.talks Berlin)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full print:hidden">
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default CV;
