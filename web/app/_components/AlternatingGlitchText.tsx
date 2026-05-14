import { useEffect, useMemo, useState } from "react";
import GlitchText from "./GlitchText";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "motion/react";

const fonts = [
  "font-sans",
  "font-serif",
  "font-mono",
  "font-display",
  "font-handwriting",
  "font-alt",
];

const fontWeights = [
  "font-thin",
  "font-light",
  "font-normal",
  "font-semibold",
  "font-bold",
  "font-black",
];
const fontStyles = ["italic", "not-italic"];

// Fun idea to revisit.
// const textCases = [
//   (text: string) => text.toLowerCase(),
//   (text: string) => text.toUpperCase(),
// ];

const initialOrigins = ["center", "top", "bottom", "left", "right"];

const AlternatingGlitchText = ({
  wordList,
  className,
}: {
  wordList: string[];
  className?: string;
}) => {
  const [verbIndex, setVerbIndex] = useState(0);
  const [randomStyle, setRandomStyle] = useState("");

  const initialState = useMemo(
    () => ({
      opacity: 0.2 + Math.random() * 0.4,
      scaleY: 0.2 + Math.random() * 0.6,
      transformOrigin:
        initialOrigins[Math.floor(Math.random() * initialOrigins.length)],
    }),
    [verbIndex],
  );

  const shouldDisable = useMemo(() => Math.random() < 0.75, [verbIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVerbIndex((prev) => (prev + 1) % wordList.length);

      //   Fun idea to revisit.
      //   setRandomStyle(
      //     clsx(
      //       fonts[Math.floor(Math.random() * fonts.length)],
      //       fontWeights[Math.floor(Math.random() * fontWeights.length)],
      //       fontStyles[Math.floor(Math.random() * fontStyles.length)],
      //     ),
      //   );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.span
        initial={initialState}
        animate={{
          opacity: 1,
          scaleY: 1,
          transition: { duration: 0.2 },
        }}
        exit={{ opacity: 0 }}
        key={verbIndex}
        className="absolute"
      >
        <GlitchText
          shouldDisable={shouldDisable}
          as="span"
          className={clsx(randomStyle, "left-4", className)}
          text={wordList[verbIndex]}
        />
      </motion.span>
    </AnimatePresence>
  );
};

export default AlternatingGlitchText;
