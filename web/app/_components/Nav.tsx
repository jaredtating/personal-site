"use client";

import Link from "next/link";
import PiLogo from "./PiLogo.svg";
import ContactButton from "./ContactButton";
import { usePathname } from "next/navigation";
import GlitchText from "./GlitchText";

const links = [
  { pathname: "/", name: "Home" },
  { pathname: "/gallery", name: "Gallery" },
] as const;

const Nav = () => {
  const path = usePathname();

  return (
    <section className="content-grid w-full box-content z-20 border-b sticky top-0 shadow-xl header-gradient">
      <section className="content-main flex flex-row justify-between items-center max-w-300 h-25">
        <Link href="/">
          <PiLogo />
        </Link>
        <div className="flex flex-row gap-6 items-center">
          {links.map(({ pathname, name }) => {
            const shouldUseHeader = path === pathname;
            const navEl = shouldUseHeader ? "a" : Link;
            return (
              <GlitchText
                as={navEl}
                className="text-xl lg:text-2xl"
                href={shouldUseHeader ? "#header" : pathname}
                key={pathname}
                text={name}
                isOnHover={true}
              />
            );
          })}
          <ContactButton />
        </div>
      </section>
    </section>
  );
};

export default Nav;
