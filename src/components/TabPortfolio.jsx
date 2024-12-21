import React, { useState } from "react";
import GotoBtn from "./GotoBtn";

const TabPortfolio = (props) => {
  const { data } = props;

  if (!data) {
    throw new Error("No data provided to TabPortfolio component");
  }

  return (
    <section className="min-h-[100vh] ">
      {/* content tab */}
      {data.map((project, index) => (
        <section
          key={index}
          className={
            index % 2 === 0
              ? " flex lg:flex-row-reverse mb-10 gap-10 lg:mx-20 mx-2 flex-col"
              : " flex lg:flex-row mb-10 gap-10 lg:mx-20 mx-2 flex-col"
          }
        >
          <img
            src={project?.profileImage}
            alt="imgpic"
            className="lg:w-[30rem] rounded-lg drop-shadow-3xl w-full"
          />

          <div
            className={
              index % 2 === 0
                ? "flex flex-col items-end justify-between"
                : "flex flex-col items-start justify-between"
            }
          >
            <div
              className={
                index % 2 === 0
                  ? "flex flex-col gap-1 items-end"
                  : "flex flex-col gap-1 items-start"
              }
            >
              <span className="text-2xl font-thin uppercase text-purple-700">
                Project {index + 1}
              </span>
              <span className="text-3xl font-bold">{project?.name}</span>
            </div>
            <span
              className={
                index % 2 === 0
                  ? "lg:w-96 my-5 lg:my-0 text-right md:text-sm lg:text-base text-gray-400 w-full"
                  : "lg:w-96 my-5 lg:my-0 text-left md:text-sm lg:text-base text-gray-400 w-full"
              }
            >
              {project?.description}
            </span>
            <GotoBtn link goto={project?.url}>Visit it!</GotoBtn>
          </div>
        </section>
      ))}
    </section>
  );
};

export default TabPortfolio;
