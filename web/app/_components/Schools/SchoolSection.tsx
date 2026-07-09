import JesseBethelImg from "./jb.png";
import CalImg from "./cal.png";
import Image from "next/image";
import clsx from "clsx";
import Coursework from "./Coursework";

const schools = [
  {
    key: "bethel",
    image: JesseBethelImg,
    size: "size-45",
    name: "Jesse Bethel High School",
    city: "Vallejo, CA",
    text: ["Class of 2018"],
  },
  {
    key: "cal",
    image: CalImg,
    size: "size-30",
    name: "University of California, Berkeley",
    city: "Berkeley, CA",
    text: ["B.A. Computer Science and Cognitive Science", "Class of 2022"],
  },
];

const SchoolsSection = () => {
  return (
    <section
      className="relative content-grid header-gradient w-full pt-25 lg:pt-40 pb-20 lg:pb-10"
      id="schools"
    >
      <div className="content-main grid grid-rows-[auto_auto] lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-40">
        {/* Schools. */}
        <div className="flex flex-col justify-center items-center sm:gap-10">
          <h2 className="text-3xl lg:text-4xl uppercase font-bold">
            Education
          </h2>
          <ul className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-8">
            {schools.map((school) => (
              <li
                key={school.name}
                className="flex flex-col items-center sm:grid grid-cols-subgrid col-span-2"
              >
                <Image
                  src={school.image}
                  alt={school.name}
                  className={clsx(
                    "cols-start-1 self-center justify-self-center",
                    school.size,
                    { "mb-8 sm:mb-0": school.key === "cal" },
                  )}
                />
                <div className="flex flex-col items-center sm:items-start cols-start-2 self-center text-center sm:text-left text-2xl">
                  <h3 className="font-bold">{school.name}</h3>
                  <p>{school.city}</p>
                  <ul>
                    {school.text.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses. */}
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-3xl lg:text-4xl uppercase font-bold">
            Coursework
          </h2>
          <Coursework />
        </div>
      </div>

      {/* Top triangle. */}
      <div className="absolute -top-px w-full h-10 lg:h-20 bg-gray-700 [clip-path:polygon(0%_0%,0%_100%,100%_0%)]" />

      {/* Bottom triangle. */}
      <div className="absolute -bottom-px w-full h-10 lg:h-20 bg-white [clip-path:polygon(0%_0%,0%_100%,100%_100%)]" />

      {/* Divider. */}
      <div className="hidden lg:block absolute -top-px left-1/2 h-full w-2 -translate-x-1/2 bg-white z-10" />
    </section>
  );
};

export default SchoolsSection;
