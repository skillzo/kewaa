import React from "react";

export default function ButtonPurple({ children, styleprops, ...rest }) {
  return (
    <button
      className={`bg-p-purple text-white py-3 px-4 ${styleprops} rounded-sm`}
      {...rest}
    >
      {children}
    </button>
  );
}
