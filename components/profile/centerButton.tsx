import { LINKED_IN } from 'constants/urls';

export const CenterButton = () => {
  return (
    <div className="relative">
      <div className="absolute h-full w-full animate-ping rounded-full bg-white opacity-50"></div>

      <a
        target="_blank"
        href={LINKED_IN}
        className="relative z-10 flex aspect-square h-[140px] items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:animate-wiggle md:h-[200px] lg:h-[140px] 2xl:h-[200px]"
        rel="noreferrer"
      >
        <span className="origin-center -rotate-12 text-gray-800 motion-safe:animate-spin">
          <div className="text-center font-serif text-[24px] font-bold uppercase leading-tight transition-all md:text-[34px] lg:text-[24px] 2xl:text-[34px]">
            Get in
            <br />
            touch
          </div>
        </span>
      </a>
    </div>
  );
};
