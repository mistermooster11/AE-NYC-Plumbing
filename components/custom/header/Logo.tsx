'use client';
import Link from 'next/link';

interface LogoProps {
  isFixed?: boolean;
  isLoaded?: boolean;
}

const Logo = ({ isFixed = false, isLoaded = false }: LogoProps) => {
  return (
    <div
      className={[
        "overflow-hidden transition-[width,height] duration-350 shrink-0",
        isFixed ? "w-[150px] h-[38px]" : "w-[200px] h-[80px]",
      ].join(" ")}
    >
      <Link
        href="/"
        className={[
          "block transition-[opacity,transform] duration-[800ms]",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[50px]",
        ].join(" ")}
      >
        <span className="sr-only">A&amp;E NYC Plumbing</span>
        <img
          className="w-full bg-white rounded px-2 py-1"
          src="https://www.topplumbernyc.com/wp-content/uploads/2018/11/Plumbing-logo.png"
          alt="A&E NYC Plumbing logo"
          width="499"
          height="114"
        />
      </Link>
    </div>
  );
};

export default Logo;