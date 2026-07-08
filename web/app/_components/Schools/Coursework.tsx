"use client";

import { useState } from "react";
import { COURSES } from "../../_data/courses";
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
              "hover:text-gray-300": key !== currCourse,
            })}
            key={key}
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
        {currCourses.courses.map((course) => {
          const { code, dept, title } = course;
          const classContent = (
            <>
              <p>{dept}</p>
              <p>{code}</p>
            </>
          );
          const classStyle = "text-yellow-500 flex flex-col items-end";
          const classEl =
            "link" in course ? (
              <a
                className={clsx(
                  "underline cursor-pointer hover:text-yellow-600",
                  classStyle,
                )}
                href={course.link}
                target="_blank"
              >
                {classContent}
              </a>
            ) : (
              <div className={classStyle}>{classContent}</div>
            );

          return (
            <li
              className="grid grid-cols-[1fr_2fr] w-full gap-x-4 text-xl font-bold"
              key={title}
            >
              {classEl}
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Coursework;
