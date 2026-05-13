import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Nav />
      <div className="content-grid grid-row-[2fr_1fr] w-full h-full min-h-dvh bg-gray-main">
        <div className="content-main -rotate-3 -skew-3">
          <div className="grid grid-cols-[1fr_auto_3fr] gap-4 grid-rows-1 w-full items-center mt-[20%]">
            <div className="border-10 border-r-0 h-10" />
            <h1 className="uppercase w-fit text-8xl font-black">
              Jared Tating
            </h1>
            <div className="border-10 border-l-0 h-10" />
          </div>
          <div className="pl-35 pt-3 flex flex-col gap-2">
            <p className="text-2xl font-bold">
              Dude who does [ this text will change ]
            </p>
            <div className="flex flex-row gap-4">
              <Link href="https://github.com">Github</Link>
              <Link href="https://linkedin.com">LinkedIn</Link>
              <Link href="https://instagram.com">Instagram</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
