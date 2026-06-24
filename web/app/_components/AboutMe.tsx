const AboutMe = () => {
  return (
    <section className="content-grid w-full bg-gray-700 pt-30 pb-20">
      <div className="content-main grid grid-cols-2 gap-20">
        <div></div>
        <div className="relative border-8 border-white">
          <h2 className="uppercase text-white text-4xl font-bold absolute -top-5 left-8 bg-gray-700 px-4">
            About me
          </h2>
          <ul className="text-2xl pt-8 pb-6 px-8 flex flex-col gap-4">
            <p>
              Hello there! I'm Jared, and I like to do things. I graduated from
              the University of California, Berkeley in 2024 with a degree in
              Computer Science and Cognitive Science.
            </p>
            <p>
              I am currently a software engineer at IXL Learning, and work on
              the Rosetta Stone, and Emmersion marketing sites.
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
