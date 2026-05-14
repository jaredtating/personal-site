"use client";

import Link from "next/link";
import Nav from "./Nav";
import GlitchText from "./GlitchText";
import { useEffect, useState } from "react";
import AlternatingGlitchText from "./AlternatingGlitchText";

const socialLinks = [
  { name: "Github", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
];

const sections = ["About me", "Education", "Projects"];
const verbs = ["code", "run", "design", "cook", "lift"];

const NAME = "Jared Tating";

const Header = () => {
  return (
    <>
      <Nav />
      <div className="content-grid grid-row-[2fr_1fr] w-full h-full min-h-dvh  bg-gray-main">
        {/* Hero section */}
        <div className="content-main -rotate-3 -skew-3">
          <div className="grid grid-cols-[1fr_auto_3fr] gap-4 grid-rows-1 w-full items-center mt-[20%]">
            <div className="border-10 border-r-0 h-10" />
            <GlitchText className="text-8xl uppercase" text={NAME} />
            <div className="border-10 border-l-0 h-10" />
          </div>
          <div className="pl-40 pt-3 flex flex-col gap-2">
            <p className="text-4xl font-bold">
              I like to{" "}
              <AlternatingGlitchText className="text-4xl" wordList={verbs} />
            </p>
            <div className="flex flex-row gap-4 pt-2">
              {socialLinks.map(({ name, href }) => (
                <Link className="text-2xl" key={name} href={href}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className="content-main flex flex-col items-end gap-2">
          {sections.map((section) => (
            <Link
              className="uppercase font-bold text-4xl"
              href=""
              key={section}
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
