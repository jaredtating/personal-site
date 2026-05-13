import Link from "next/link";
import PiLogo from "./PiLogo.svg";

const links = [
  { pathname: "/", name: "Home" },
  { pathname: "/gallery", name: "Gallery" },
];

const Nav = () => {
  return (
    <section className="content-grid">
      <section className="content-main flex flex-row justify-between items-center max-w-300 w-full h-25 bg-gray-main">
        <PiLogo />
        <div className="flex flex-row gap-4">
          {links.map(({ pathname, name }) => {
            return (
              <Link className="text-2xl" href={pathname}>
                {name}
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Nav;
