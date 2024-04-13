import React, { useState } from "react";

const TabPortfolio = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <section className="h-[100vh] ">
      {/* selection tab */}
      <div>
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
    </section>
  );
};

export default TabPortfolio;
