import React, { useState } from "react";
import pic from "../../assets/TravelUi App.png";
import GotoBtn from "./GotoBtn";

const TabPortfolio = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <section className="h-[100vh] ">
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
      <section className="flex">
        <section className="grid place-items-center">
          <img className="w-[70%] rounded-3xl" src={pic} alt="imgpic" />
        </section>

        <section className="flex flex-col text-left justify-between">
          <span className="font-bold text-3xl">Project 1</span>

          <span className="w-[80%] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ab?
            Corrupti, facilis repellat eum voluptates enim asperiores modi quis.
            Debitis asperiores sit neque hic, delectus esse qui provident odit?
            Dolorem.
          </span>

          <span>
            <GotoBtn>Read More</GotoBtn>
          </span>
        </section>
      </section>
    </section>
  );
};

export default TabPortfolio;
