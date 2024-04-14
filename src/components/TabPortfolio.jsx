import React, { useState } from "react";
import pic from "../../assets/TravelUi App.png";
import GotoBtn from "./GotoBtn";

import { mobile } from "../projects";

const TabPortfolio = () => {
  const [activeTab, setActiveTab] = useState(1);

  console.log(mobile);

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
            // className="text-xl cursor-pointer border-b-4 rounded-xl pb-2 border-purple-800"
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
      <section className="flex flex-col gap-20">
        {/* project component */}
        {mobile.map((project) => (
          <div className="flex gap-5  max-h-80">
            <section className="grid place-items-center ">
              <img
                className=" rounded-2xl"
                src={project.pic}
                alt="imgpic"
              />
            </section>

            <section className="flex flex-col  text-left justify-between">
              <span className="font-thin text-3xl">Project {project.id}</span>
              <span className="font-bold text-3xl">{project.title}</span>

              <span className="w-[80%] text-justify">{project.desc}</span>

              <span>
                <GotoBtn goto={project.link}>Read More</GotoBtn>
              </span>
            </section>
          </div>
        ))}
      </section>
    </section>
  );
};

export default TabPortfolio;
