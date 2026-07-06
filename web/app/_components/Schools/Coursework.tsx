"use client";

import { useState } from "react";
import { COURSES } from "./courses";
import clsx from "clsx";

type CourseType = keyof typeof COURSES;

const Coursework = () => {
  const [currCourse, setCurrCourse] = useState<CourseType>("computerScience");
  const currCourses = COURSES[currCourse];

  return (
    <div className="col-start-2 flex flex-col gap-8">
      <div className="flex flex-row justify-center gap-4">
        {Object.entries(COURSES).map(([key, entry]) => (
          <p
            onClick={() => setCurrCourse(key as CourseType)}
            className={clsx("text-xl font-bold cursor-pointer", {
              underline: key === currCourse,
            })}
          >
            {entry.name}
          </p>
        ))}
      </div>
      <ul
        className="w-full h-100 overflow-y-scroll flex flex-col gap-2"
        style={{
          scrollbarColor: "#ffffff10 var(--color-gray-800)",
          scrollbarWidth: "thin",
        }}
      >
        {currCourses.courses.map(({ code, dept, title, link }) => (
          <li className="grid grid-cols-[1fr_2fr] w-full grid-rows-2 gap-x-4 text-xl font-bold">
            <p className="col-start-1 justify-self-end text-yellow-500">
              {dept}
            </p>
            <p className="col-start-1 justify-self-end text-yellow-500">
              {code}
            </p>
            <p className="col-start-2 row-start-1 row-span-2">{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Coursework;
