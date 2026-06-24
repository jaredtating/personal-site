import ContactButton from "./ContactButton";
import HeadSvg from "./head.svg";

const AboutMe = () => {
  return (
    <section className="relative content-grid w-full bg-gray-700 pt-30 pb-20">
      {/* Header Image. */}
      <div className="content-main grid grid-cols-2 gap-40">
        <div className="grid items-center place-items-center">
          <HeadSvg className="z-10 size-140 row-start-1 col-start-1" />
          <div className="bg-white size-120 rounded-full row-start-1 col-start-1 drop-shadow-2xl" />
        </div>

        {/* About me text. */}
        <div className="flex flex-col gap-10 ml-10">
          <div className="relative border-8 border-white h-fit">
            <h2 className="uppercase text-white text-4xl font-bold absolute -top-5 left-8 bg-gray-700 px-4">
              About me
            </h2>
            <ul className="text-3xl pt-8 pb-6 px-8 flex flex-col gap-4">
              <p>
                Hello there! I'm Jared, and I like to do things. I graduated
                from the University of California, Berkeley in 2024 with a
                degree in Computer Science and Cognitive Science.
              </p>
              <p>
                I am currently a software engineer at IXL Learning, and work on
                the Rosetta Stone, and Emmersion marketing sites.
              </p>
            </ul>
          </div>
          <ContactButton
            className="w-fit"
            variant="filled"
            text="Let's connect!"
          />
        </div>
      </div>

      {/* Vertical line. */}
      <div className="absolute top-0 left-1/2 h-full w-2 -translate-x-1/2 bg-white" />
    </section>
  );
};

export default AboutMe;
