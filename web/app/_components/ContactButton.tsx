import clsx from "clsx";

type Variant = "primary" | "filled";

const variants = {
  primary: "border text-white hover:text-gray-300 hover:border-gray-300",
  filled: "bg-gray-100 text-gray-800 hover:bg-gray-300",
};

const ContactButton = ({
  className,
  variant = "primary",
  text,
}: {
  className?: string;
  variant?: Variant;
  text?: string;
}) => {
  return (
    <a
      className={clsx(
        "rounded-full px-4 py-2 text-xl lg:text-2xl font-bold cursor-pointer",
        variants[variant],
        className,
      )}
      href="https://www.linkedin.com/in/jared-tating-2000"
      target="_blank"
    >
      {text || "Contact me"}
    </a>
  );
};

export default ContactButton;
