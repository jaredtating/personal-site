"use client";

import GlitchText from "./GlitchText";
import AlternatingGlitchText from "./AlternatingGlitchText";
import SOCIALS from "../_data/socials";
import { VERBS } from "../_data/verbs";

const sections = [
  { text: "About me", id: "about-me" },
  { text: "Education", id: "schools" },
  { text: "Projects", id: "projects" },
];

const NAME = "Jared Tating";

const Header = () => {
  return (
    <section
      className="relative content-grid grid-rows-[3fr_auto] w-full h-full min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-100px)] gap-y-15 header-gradient gridded pb-20 lg:pb-30"
      id="header"
    >
      {/* Hero section */}
      <div className="content-main w-full -rotate-3 -skew-3 z-10 row-start-1">
        <div className="grid grid-cols-[0.5fr_auto_0.5fr] px-5 md:px-0 lg:grid-cols-[1fr_auto_3fr] gap-3 md:gap-4 lg:gap-6 grid-rows-1 w-full items-center mt-20 sm:mt-40">
          {/* Left bracket. */}
          <div className="border-8 border-r-0 h-18 md:h-14 rounded-l-sm" />
          <GlitchText
            className="lg:text-8xl text-5xl sm:text-7xl w-min md:w-full uppercase text-center"
            text={NAME}
          />
          {/* Right bracket. */}
          <div className="border-8 border-l-0 h-18 md:h-14 rounded-r-sm" />
        </div>

        <div className="w-full items-center lg:items-start lg:pl-20 xl:pl-40 pt-3 flex flex-col gap-2">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            I like to{" "}
            <AlternatingGlitchText
              className="text-2xl sm:text-3xl lg:text-4xl"
              wordList={VERBS}
            />
          </p>
          <div className="flex flex-row gap-4 pt-2">
            {SOCIALS.map(({ text, href }) => (
              <GlitchText
                as="a"
                className="text-xl lg:text-2xl font-normal"
                href={href}
                key={text}
                text={text}
                isOnHover={true}
                target="_blank"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Links section */}
      <div className="flex flex-col gap-8 text-center lg:text-left lg:flex-row items-center content-main justify-end z-10 row-start-2">
        <div className="gap-2 flex flex-col items-center lg:items-start">
          {sections.map(({ text, id }) => (
            <GlitchText
              as="a"
              className="uppercase font-bold text-2xl sm:text-3xl lg:text-4xl"
              href={`#${id}`}
              key={text}
              text={text}
              isOnHover={true}
            />
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
