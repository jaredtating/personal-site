"use client";

import Link from "next/link";
import GlitchText from "./GlitchText";
import AlternatingGlitchText from "./AlternatingGlitchText";
import SOCIALS from "../_data/socials";

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
      <div className="content-main w-full -rotate-3 -skew-3 z-10 row-start-1">
        <div className="grid grid-cols-[0.5fr_auto_0.5fr] px-5 md:px-0 lg:grid-cols-[1fr_auto_3fr] gap-4 lg:gap-6 grid-rows-1 w-full items-center mt-30 sm:mt-40">
          {/* Left bracket. */}
          <div className="border-8 border-r-0 h-20 md:h-14 rounded-l-sm" />
          <GlitchText
            className="lg:text-8xl text-6xl sm:text-7xl w-min md:w-full uppercase text-center"
            text={NAME}
          />
          {/* Right bracket. */}
          <div className="border-8 border-l-0 h-20 md:h-14 rounded-r-sm" />
        </div>

        <div className="w-full items-center lg:items-start lg:pl-40 pt-3 flex flex-col gap-2">
          <p className="text-3xl lg:text-4xl font-bold">
            I like to{" "}
            <AlternatingGlitchText
              className="text-3xl lg:text-4xl"
              wordList={verbs}
            />
          </p>
          <div className="flex flex-row gap-4 pt-2">
            {SOCIALS.map(({ text, href }) => (
              <Link className="text-xl lg:text-2xl" key={text} href={href}>
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Links section */}
      <div className="flex flex-col gap-8 text-center lg:text-left lg:flex-row items-center content-main justify-between z-10 row-start-2">
        <p className="text-3xl lg:text-4xl text-gray-700 self-end w-full">
          site still a bit of a work in progress*
        </p>
        <div className="gap-2 flex flex-col items-center lg:items-start">
          {sections.map(({ text, id }) => (
            <a
              className="uppercase font-bold text-3xl lg:text-4xl"
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
