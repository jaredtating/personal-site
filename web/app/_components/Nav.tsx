"use client";

import Link from "next/link";
import PiLogo from "./PiLogo.svg";
import ContactButton from "./ContactButton";
import { usePathname } from "next/navigation";

const links = [
  { pathname: "/", name: "Home" },
  { pathname: "/gallery", name: "Gallery" },
] as const;

const Nav = () => {
  const path = usePathname();

  return (
    <section className="content-grid w-full box-content z-20 border-b sticky top-0 shadow-xl header-gradient">
      <section className="content-main flex flex-row justify-between items-center max-w-300 h-25">
        <PiLogo className="cursor-pointer" />
        <div className="flex flex-row gap-6 items-center">
          {links.map(({ pathname, name }) => {
            const shouldUseHeader = path === pathname;
            const NavEl = shouldUseHeader ? "a" : Link;
            return (
              <NavEl
                className="text-xl lg:text-2xl font-bold"
                href={shouldUseHeader ? "#header" : pathname}
                key={pathname}
              >
                {name}
              </NavEl>
            );
          })}
          <ContactButton />
        </div>
      </section>
    </section>
  );
};

export default Nav;
