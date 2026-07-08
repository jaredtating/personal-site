import clsx from "clsx";
import { useState } from "react";

type GlitchTextProps = {
  as?: React.ElementType;
  text: string;
  className?: string;
  shouldDisable?: boolean;
  isOnHover?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const GlitchText = ({
  as,
  text,
  className,
  shouldDisable = false,
  isOnHover = false,
  ...props
}: GlitchTextProps) => {
  const Component = as || "h1";
  const [isHovered, setIsHovered] = useState(false);
  const shouldShowGlitch = !shouldDisable && (!isOnHover || isHovered);

  return (
    <Component
      className={clsx("relative w-fit font-black", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={clsx("absolute top-0 left-0", {
          "glitch-b": shouldShowGlitch,
        })}
      >
        {text}
      </span>
      <span>{text}</span>
      <span
        aria-hidden="true"
        className={clsx("absolute top-0 left-0", {
          "glitch-a": shouldShowGlitch,
        })}
      >
        {text}
      </span>
    </Component>
  );
};

export default GlitchText;
