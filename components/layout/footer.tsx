import Link from 'next/link';

import { LINKED_IN } from 'constants/urls';

import { useImprint } from './imprintContext';

interface ILink {
  label: string;
  href: string;
}
const LINKS: ILink[] = [
  {
    label: 'LinkedIn',
    href: LINKED_IN,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/chriz-hoepfner',
  },
  {
    label: 'Storybook',
    href: 'https://christian-hoepfner.com/storybook',
  },
];

export const Footer = () => {
  const { openDialog } = useImprint();

  const year = new Date().getFullYear();

  return (
    <section className="flex flex-col items-center justify-center bg-gray-900 p-3 py-5 text-xs text-white/40 sm:flex-row sm:space-x-10">
      {LINKS.map(({ label, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          className="p-2 hover:text-white/80"
          rel="noreferrer"
        >
          {label}
        </a>
      ))}

      <Link href="/cv">
        <span className="my-2 inline-block rounded-xl bg-sungloRed p-2 px-3 font-bold text-white sm:my-0">
          CV
        </span>
      </Link>

      <button
        className="p-2 hover:text-white/80"
        title="Open imprint dialog"
        onClick={openDialog}
      >
        Imprint
      </button>

      <div className="p-2">© {year} C. Höpfner</div>
    </section>
  );
};
