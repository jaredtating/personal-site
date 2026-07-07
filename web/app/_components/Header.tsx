"use client";

import Link from "next/link";
import Nav from "./Nav";
import GlitchText from "./GlitchText";
import AlternatingGlitchText from "./AlternatingGlitchText";
import clsx from "clsx";

const socialLinks = [
  { name: "Github", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
];

const sections = [
  { text: "About me", id: "about-me" },
  { text: "Education", id: "schools" },
  { text: "Projects", id: "projects" },
];
const verbs = ["code", "run", "design", "cook", "lift"];

const NAME = "Jared Tating";

// bg-linear-to-b from-gray-800 to-gray-900

const Header = () => {
  return (
    <section
      className="relative content-grid grid-rows-[3fr_auto_1fr] w-full h-full min-h-[calc(100vh-100px)] header-gradient gridded"
      id="header"
    >
      {/* Hero section */}
      <div className="content-main -rotate-3 -skew-3 z-10 row-start-1">
        <div className="grid grid-cols-[1fr_auto_3fr] gap-6 grid-rows-1 w-full items-center mt-[15%]">
          <div className="border-8 border-r-0 h-14 rounded-l-sm" />
          <GlitchText className="text-8xl uppercase" text={NAME} />
          <div className="border-8 border-l-0 h-14 rounded-r-sm" />
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
      <div className="flex content-main justify-between z-10 row-start-2">
        <p className="text-4xl text-gray-700 self-end">
          site still a bit of a work in progress*
        </p>
        <div className="gap-2 flex flex-col">
          {sections.map(({ text, id }) => (
            <a
              className="uppercase font-bold text-4xl"
              href={`#${id}`}
              key={text}
            >
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* Vertical line. */}
      <div className="absolute bottom-0 h-1/12 left-1/2 w-2 -translate-x-1/2 bg-white" />
      <div className="absolute rounded-full bottom-1/12 left-1/2 size-6 -translate-x-1/2 translate-y-1/2 bg-white" />
    </section>
  );
};

export default Header;
