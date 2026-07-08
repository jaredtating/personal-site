import ContactButton from "./ContactButton";
import HeadSvg from "./head.svg";

const AboutMe = () => {
  return (
    <section
      className="relative content-grid w-full bg-gray-700 pt-30 pb-20"
      id="about-me"
    >
      {/* Header Image. */}
      <div className="content-main grid grid-rows-[auto_auto] place-items-center lg:grid-cols-2 gap-y-8 gap-x-40">
        <div className="grid items-center place-items-center">
          <HeadSvg className="z-10 size-80 lg:size-140 row-start-1 col-start-1" />
          <div className="bg-white size-70 lg:size-120 rounded-full row-start-1 col-start-1 drop-shadow-2xl" />
        </div>

        {/* About me text. */}
        <div className="flex flex-col gap-10 items-center lg:ml-10">
          <div className="relative border-8 border-white h-fit">
            <h2 className="uppercase text-white text-4xl font-bold absolute left-0 right-0 lg:right-auto mx-auto w-fit -top-5 lg:left-8 bg-gray-700 px-4">
              About me
            </h2>
            <ul className="text-3xl text-center lg:text-left pt-8 pb-6 px-8 flex flex-col gap-4">
              <p>
                Hello there! I'm Jared, and I like to do things. I graduated
                from the University of California, Berkeley in 2022 with a
                degree in Computer Science and Cognitive Science!
              </p>
              <p>
                I am currently a senior software engineer at{" "}
                <a
                  className="text-sky-300 underline hover:text-sky-400"
                  href="https://www.ixl.com/company"
                  target="_blank"
                >
                  IXL Learning
                </a>
                , and work on{" "}
                <a
                  className="text-sky-300 underline hover:text-sky-400"
                  href="https://sparkstudio.ixl.com"
                  target="_blank"
                >
                  Spark Studio
                </a>
                , building tools for educators and learners!
              </p>
            </ul>
          </div>
          <ContactButton
            className="w-fit font-bold text-2xl!"
            variant="filled"
            text="Let's connect!"
          />
        </div>
      </div>

      {/* Vertical line. */}
      <div className="absolute top-0 left-1/2 h-40 lg:h-full w-2 -translate-x-1/2 bg-white" />
    </section>
  );
};

export default AboutMe;
