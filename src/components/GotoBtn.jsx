import React from "react";

const GotoBtn = (props) => {
  return (
    <a
      target={props.link ? "_blank" : "_self"}
      href={`${props.goto}`}
      className={`hover:text-purple-900
      hover:bg-subpurple
      duration-500 uppercase lg:py-3 lg:px-8 
      bg-purple
      rounded-lg py-2 px-7 ${props.class}`}
    >
      {props.children}
    </a>
  );
};

export default GotoBtn;
