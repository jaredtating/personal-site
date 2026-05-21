import Link from "next/link";
import PiLogo from "./PiLogo.svg";

const links = [
  { pathname: "/", name: "Home" },
  { pathname: "/gallery", name: "Gallery" },
];

const Nav = () => {
  return (
    <section className="content-grid z-10 w-full border-b sticky top-0 shadow-xl bg-neutral-800">
      <section className="content-main flex flex-row justify-between items-center max-w-300 w-full h-25">
        <PiLogo className="cursor-pointer" />
        <div className="flex flex-row gap-6 items-center">
          {links.map(({ pathname, name }) => {
            return (
              <Link className="text-2xl font-bold" href={pathname}>
                {name}
              </Link>
            );
          })}
          <button className="bg-teal px-4 py-2 rounded-xl text-2xl font-bold cursor-pointer">
            Contact me
          </button>
        </div>
      </section>
    </section>
  );
};

export default Nav;
