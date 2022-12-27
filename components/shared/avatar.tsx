import classNames from 'classnames';
import Image from 'next/image';

interface IProps {
  bg: 'contessaRed' | 'waferWhite';
}

export const Avatar = ({ bg }: IProps) => {
  return (
    <div className="relative max-w-[400px]">
      <div
        className={classNames(
          'absolute bottom-0 left-0 right-0 aspect-square w-full rounded-full shadow-md print:border-2',
          {
            'bg-contessaRed': bg === 'contessaRed',
            'bg-waferWhite': bg === 'waferWhite',
          },
        )}
      ></div>

      <div className="relative w-full overflow-hidden rounded-xl ">
        <Image
          alt="Portrait photo"
          src="/images/portrait_circle.webp"
          width={400}
          height={500}
          className="!aspect-[4/5] !w-full rounded-b-full"
        />
      </div>
    </div>
  );
};
