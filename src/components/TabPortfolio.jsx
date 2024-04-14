import React, { useState } from "react";
import GotoBtn from "./GotoBtn";

import { mobile } from "../projects";

const TabPortfolio = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <section className="min-h-[100vh] ">
      {/* selection tab */}
      <div className="mb-16">
        <ul className="flex gap-10 justify-center">
          <li
            onClick={() => {
              handleTab(1);
            }}
            className={
              activeTab === 1
                ? "text-xl cursor-pointer border-b-4 rounded-xl pb-2 border-purple-800"
                : "text-xl cursor-pointer"
            }
          >
            Mobile App
          </li>
          <li
            onClick={() => {
              handleTab(2);
            }}
            className={
              activeTab === 2
                ? "text-xl cursor-pointer border-b-4 rounded-xl pb-2 border-purple-800"
                : "text-xl cursor-pointer"
            }
          >
            Website
          </li>
          <li
            onClick={() => {
              handleTab(3);
            }}
            className={
              activeTab === 3
                ? "text-xl cursor-pointer border-b-4 rounded-xl pb-2 border-purple-800"
                : "text-xl cursor-pointer"
            }
          >
            Desktop
          </li>
        </ul>
      </div>

      {/* content tab */}
      {mobile.map((project) => (
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
            className="w-[30rem] rounded-lg"
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
              <span className="text-2xl font-thin">Project {project.id}</span>
              <span className="text-3xl font-bold">{project.title}</span>
            </div>
            <span
              className={
                project.id % 2 === 0
                  ? "w-96 text-right md:text-sm lg:text-base"
                  : "w-96 text-left md:text-sm lg:text-base"
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
