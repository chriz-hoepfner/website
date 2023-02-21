import { AcehubLogo } from 'components/logos/acehub';
import { CleverShuttleLogo } from 'components/logos/cleverShuttle';
import { CozeroLogo } from 'components/logos/cozero';
import { ProjectALogo } from 'components/logos/projectA';
import { SirupLogo } from 'components/logos/sirup';

interface ICompany {
  Logo(): JSX.Element;
  href: string;
  title: string;
}

const COMPANIES: ICompany[] = [
  {
    Logo: SirupLogo,
    href: 'https://www.sirup.com/',
    title: 'Website of SIRUP',
  },
  {
    Logo: ProjectALogo,
    href: 'https://www.project-a.com/',
    title: 'Website of Project A',
  },
  {
    Logo: CleverShuttleLogo,
    href: 'https://www.clevershuttle.de/',
    title: 'Website of CleverShuttle',
  },
  {
    Logo: AcehubLogo,
    href: 'https://acehub.io/',
    title: 'Website of acehub',
  },
  {
    Logo: CozeroLogo,
    href: 'https://cozero.io/',
    title: 'Website of Cozero',
  },
];

interface ICompanyLinkProps {
  company: ICompany;
}
const CompanyLink = ({ company }: ICompanyLinkProps) => {
  const { Logo, href, title } = company;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="m-2 p-2 transition-colors hover:text-white/80"
      title={title}
    >
      <Logo />
    </a>
  );
};

export const Companies = () => {
  return (
    <section className="flex flex-wrap justify-center bg-gray-800 py-6 text-white/40">
      <div className="flex w-full max-w-7xl flex-shrink-0 flex-grow-0 flex-col items-center justify-around py-4 md:flex-row md:py-0">
        {COMPANIES.map((company, index) => (
          <CompanyLink key={index} company={company} />
        ))}
      </div>
    </section>
  );
};
