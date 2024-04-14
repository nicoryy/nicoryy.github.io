import React, { useState } from "react";
import GotoBtn from "./GotoBtn";


const TabPortfolio = (props) => {
  return (
    <section className="min-h-[100vh] ">
      {/* content tab */}
      {props.data.map((project) => (
        <section
          className={
            project.id % 2 === 0
              ? "flex flex-row-reverse mb-10 gap-10 mx-20"
              : "flex mb-10 gap-10 mx-20"
          }
        >
          <img
            src={project.pic}
            alt="imgpic"
            className="w-[30rem] rounded-lg drop-shadow-2xl"
          />

          <div
            className={
              project.id % 2 === 0
                ? "flex flex-col items-end justify-between"
                : "flex flex-col items-start justify-between"
            }
          >
            <div
              className={
                project.id % 2 === 0
                  ? "flex flex-col gap-1 items-end"
                  : "flex flex-col gap-1 items-start"
              }
            >
              <span className="text-2xl font-thin uppercase text-purple-700">Project {project.id}</span>
              <span className="text-3xl font-bold">{project.title}</span>
            </div>
            <span
              className={
                project.id % 2 === 0
                  ? "w-96 text-right md:text-sm lg:text-base text-gray-400"
                  : "w-96 text-left md:text-sm lg:text-base text-gray-400"
              }
            >
              {project.desc}
            </span>
            <GotoBtn goto={project.link}>Read more</GotoBtn>
          </div>
        </section>
      ))}
    </section>
  );
};

export default TabPortfolio;
