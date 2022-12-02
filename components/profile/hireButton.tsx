import { LINKED_IN } from 'constants/urls';

export const HireButton = () => {
  return (
    <>
      <div className="absolute h-full w-full animate-ping rounded-full bg-white opacity-50"></div>

      <a
        target="_blank"
        href={LINKED_IN}
        className="relative z-10 flex aspect-square h-[140px] items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:animate-wiggle md:h-[200px] lg:h-[140px] 2xl:h-[200px]"
        rel="noreferrer"
      >
        <span className="origin-center -rotate-12 text-gray-800 motion-safe:animate-spin">
          <div className="text-center font-serif text-[30px] font-bold uppercase leading-tight transition-all md:text-[40px] lg:text-[30px] 2xl:text-[40px]">
            Hire
            <br />
            me!
          </div>
        </span>
      </a>
    </>
  );
};
