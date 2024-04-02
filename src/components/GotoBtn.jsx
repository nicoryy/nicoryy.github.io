import React from "react";

const GotoBtn = (props) => {
  return (
    <a
      href={`#${props.goto}`}
      className={`hover:text-purple-900 hover:bg-purple-200
      duration-300 uppercase py-3 px-8 
      bg-purple-900 rounded-lg ${props.class}`}
    >
      {props.children}
    </a>
  );
};

export default GotoBtn;
