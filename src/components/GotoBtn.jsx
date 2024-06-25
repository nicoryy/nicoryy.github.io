import React from "react";

const GotoBtn = (props) => {
  return (
    <a
      href={`${props.goto}`}
      className={`hover:text-purple-900
      hover:bg-subpurple
      duration-500 uppercase sm:py-3 sm:px-8 
      bg-purple
      rounded-lg 2xs:py-2 2xs:px-7 ${props.class}`}
    >
      {props.children}
    </a>
  );
};

export default GotoBtn;
