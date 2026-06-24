import Link from "next/link";
import PiLogo from "./PiLogo.svg";
import ContactButton from "./ContactButton";

const links = [
  { pathname: "/", name: "Home" },
  { pathname: "/gallery", name: "Gallery" },
];

const Nav = () => {
  return (
    <section className="content-grid z-20 w-full border-b sticky top-0 shadow-xl header-gradient">
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
          <ContactButton />
        </div>
      </section>
    </section>
  );
};

export default Nav;
