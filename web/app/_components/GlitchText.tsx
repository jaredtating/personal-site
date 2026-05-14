import clsx from "clsx";

const GlitchText = ({
  as,
  text,
  className,
  shouldDisable = false,
}: {
  as?: React.ElementType;
  text: string;
  className?: string;
  shouldDisable?: boolean;
}) => {
  const Component = as || "h1";
  return (
    <Component className={clsx("relative w-fit font-black", className)}>
      <span
        aria-hidden="true"
        className={clsx("absolute top-0 left-0", {
          "glitch-b": !shouldDisable,
        })}
      >
        {text}
      </span>
      <span>{text}</span>
      <span
        aria-hidden="true"
        className={clsx("absolute top-0 left-0", {
          "glitch-a": !shouldDisable,
        })}
      >
        {text}
      </span>
    </Component>
  );
};

export default GlitchText;
