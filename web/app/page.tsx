import Image from "next/image";
import NextJsImg from "../public/next.svg";
import Header from "./_components/Header";
import AboutMe from "./_components/AboutMe";

export default function Home() {
  return (
    <main className="size-full flex flex-col items-center">
      <Header />
      <AboutMe />
    </main>
  );
}
