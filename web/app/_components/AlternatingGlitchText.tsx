"use client";

import { useEffect, useRef, useState } from "react";
import GlitchText from "./GlitchText";

const scrambleChars = "abcdefghijklmnopqrstuvwxyz";

const randomBool = (chance = 0.25) => Math.random() < chance;

const getScrambledText = (current: string, next: string, progress: number) => {
  const maxLength = Math.max(current.length, next.length);
  let result = "";

  for (let i = 0; i < maxLength; i += 1) {
    const nextChar = next[i] ?? "";

    if (Math.random() < progress) {
      result += nextChar;
      continue;
    }

    const currentChar = current[i] ?? "";
    result +=
      currentChar ||
      scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
  }

  return result;
};

const AlternatingGlitchText = ({
  wordList,
  className,
}: {
  wordList: string[];
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState(wordList[0] ?? "");
  const [shouldDisable, setShouldDisable] = useState(false);
  const currentIndexRef = useRef(0);
  const displayTextRef = useRef(displayText);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    displayTextRef.current = displayText;
  }, [displayText]);

  useEffect(() => {
    timeoutsRef.current.forEach(window.clearTimeout);
    timeoutsRef.current = [];
    currentIndexRef.current = 0;
    setDisplayText(wordList[0] ?? "");

    if (wordList.length <= 1) return;

    const runScramble = () => {
      const nextIndex = (currentIndexRef.current + 1) % wordList.length;
      const nextWord = wordList[nextIndex];
      const currentWord = displayTextRef.current;

      setShouldDisable(randomBool(0.33));

      const frames = 10;
      const frameDuration = 100;

      for (let frame = 0; frame <= frames; frame += 1) {
        const timeout = window.setTimeout(() => {
          setDisplayText(
            getScrambledText(currentWord, nextWord, frame / frames),
          );

          if (frame === frames) {
            currentIndexRef.current = nextIndex;
          }
        }, frame * frameDuration);

        timeoutsRef.current.push(timeout);
      }

      const nextDelay = (frames + 1) * frameDuration + 800;
      timeoutsRef.current.push(window.setTimeout(runScramble, nextDelay));
    };

    runScramble();

    return () => {
      timeoutsRef.current.forEach(window.clearTimeout);
      timeoutsRef.current = [];
    };
  }, [wordList]);

  return (
    <span className="relative inline-block w-fit">
      <GlitchText
        shouldDisable={shouldDisable}
        as="span"
        className={className}
        text={displayText}
      />
      {"."}
    </span>
  );
};

export default AlternatingGlitchText;
