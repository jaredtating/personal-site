import Header from "./_components/Header";
import AboutMe from "./_components/AboutMe";
import SchoolsSection from "./_components/Schools/SchoolSection";
import ProjectsSection from "./_components/ProjectsSection";

export default function Home() {
  return (
    <main className="size-full flex flex-col items-center overflow-hidden">
      <Header />
      <AboutMe />
      <SchoolsSection />
      <ProjectsSection />
    </main>
  );
}
