import clsx from "clsx";

type Variant = "primary" | "filled";

const variants = {
  primary: "border text-white",
  filled: "bg-gray-100 text-gray-800",
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
    <button
      className={clsx(
        "rounded-full px-4 py-2 text-2xl font-bold cursor-pointer",
        variants[variant],
        className,
      )}
    >
      {text || "Contact me"}
    </button>
  );
};

export default ContactButton;
