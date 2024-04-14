import React from "react";

const GotoBtn = (props) => {
  return (
    <a
      href={`#${props.goto}`}
      className={`hover:text-purple-900 hover:from-purple-600
      hover:bg-purple-200 hover:to-purple-300
      duration-500 uppercase sm:py-3 sm:px-8 
      bg-gradient-to-tl from-purple-500 to-purple-900 
      rounded-lg 2xs:py-2 2xs:px-7 ${props.class}`}
    >
      {props.children}
    </a>
  );
};

export default GotoBtn;
