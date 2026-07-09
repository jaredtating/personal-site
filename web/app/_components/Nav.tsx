"use client";

import { RxHamburgerMenu } from "react-icons/rx";

import Link from "next/link";
import PiLogo from "./PiLogo.svg";
import ContactButton from "./ContactButton";
import { usePathname } from "next/navigation";
import GlitchText from "./GlitchText";
import { useState } from "react";

const links = [
  { pathname: "/", name: "Home" },
  { pathname: "/gallery", name: "Gallery" },
] as const;

const MobileNav = ({ onClose }: { onClose: () => void }) => {
  return (
    <ul className="absolute left-0 top-20.5 w-screen h-screen bg-gray-900 flex flex-col items-center">
      {links.map(({ pathname, name }) => (
        <li className="border-b w-full flex justify-center font-bold py-4 text-3xl uppercase">
          <Link onClick={onClose} href={pathname}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Nav = () => {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="content-grid w-full box-content z-20 border-b sticky top-0 shadow-xl header-gradient">
      {isMobileMenuOpen && (
        <MobileNav onClose={() => setIsMobileMenuOpen(false)} />
      )}
      <section className="relative content-main flex flex-row justify-between items-center max-w-300 h-20 md:h-25">
        <Link href="/">
          <PiLogo />
        </Link>
        <RxHamburgerMenu
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          size={60}
        />
        <div className="flex-row gap-6 items-center hidden md:flex">
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
