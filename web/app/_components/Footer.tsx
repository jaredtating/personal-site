import SOCIALS from "../_data/socials";
import PiSvg from "./PiLogo.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className="w-full flex flex-col items-center py-10 header-gradient gap-4">
      <PiSvg />
      <div className="flex gap-4">
        {SOCIALS.map(({ Icon, text, href }) => (
          <a href={href} key={text} target="_blank">
            <Icon size={30} />
          </a>
        ))}
      </div>
      <p>© {year} Jared Tating - All rights reserved.</p>
    </section>
  );
};

export default Footer;
