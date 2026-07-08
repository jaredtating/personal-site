import { SlArrowRight } from "react-icons/sl";

interface ProjectBoxProps {
  title: string;
  href: string;
}

const ProjectBox = ({ title, href }: ProjectBoxProps) => {
  return (
    <a
      className="group relative w-full max-w-200 min-h-30 flex items-center overflow-hidden rounded-md bg-gray-700 p-5 drop-shadow-2xl"
      href={href}
      target="_blank"
    >
      <div className="absolute inset-0 w-0 bg-gray-800/80 transition-[width] duration-300 ease-out group-hover:w-full" />
      <div className="relative z-10 flex items-center justify-between w-full">
        <h3 className="text-left whitespace-pre-wrap text-2xl font-bold text-white">
          {title}
        </h3>
        <SlArrowRight color="white" className="size-10" />
      </div>
    </a>
  );
};

const PROJECTS = [
  {
    title: "SPARK STUDIO\n(current professional work @ IXL Learning)",
    href: "https://sparkstudio.ixl.com",
  },
  {
    title: "LEGACY PERSONAL SITE\nHTML/JS/CSS",
    href: "https://github.com/jaredtating/project_WEB",
  },
  {
    title: "PERSONAL SITE \nREACT/TS/TAILWIND",
    href: "https://github.com/jaredtating/personal-site",
  },
] as const;

const ProjectsSection = ({}) => {
  return (
    <section className="content-grid bg-white pb-20" id="projects">
      <div className="content-main flex flex-col items-center pt-10 text-gray-700 gap-8 text-center">
        <h2 className="text-5xl font-bold uppercase">Projects</h2>
        <p className="text-2xl">
          Work I've contributed to personally or collaberated on professionally
        </p>

        <ul className="flex flex-col items-center gap-8 w-full">
          {PROJECTS.map((entry) => (
            <ProjectBox {...entry} key={entry.title} />
          ))}
        </ul>
        <p className="text-2xl italic">
          I don't have any other personal projects that still work at the
          moment. lol.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
