import { SlArrowRight } from "react-icons/sl";

interface ProjectBoxProps {
  title: string;
}

const ProjectBox = ({ title }: ProjectBoxProps) => {
  return (
    <div className="w-full max-w-200 min-h-30 bg-gray-700 p-5 rounded-md drop-shadow-2xl flex justify-between items-center">
      <h3 className="text-white text-2xl font-bold text-left whitespace-pre-wrap">
        {title}
      </h3>
      <SlArrowRight color="white" className="size-10" />
    </div>
  );
};

const PROJECTS = [
  { title: "SPARK STUDIO\n(current professional work @ IXL Learning)" },
  { title: "LEGACY PERSONAL SITE\nHTML/CSS" },
  { title: "PERSONAL SITE \nREACT/TAILWIND" },
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
