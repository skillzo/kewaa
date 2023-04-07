import React from "react";

export default function ButtonPurple({ children, styleprops, ...rest }) {
  return (
    <button
      className={`bg-p-purple text-white py-3 px-4   ${styleprops} rounded-sm`}
      {...rest}
    >
      {children}
    </button>
  );
}
export function ButtonWhite({ children, styleprops, ...rest }) {
  return (
    <button
      className={`bg-white text-p-purple font-semibold py-3 px-4 border border-p-purple ${styleprops} rounded-sm shadow-sm `}
      {...rest}
    >
      {children}
    </button>
  );
}
export function ButtonBlack({ children, styleprops, ...rest }) {
  return (
    <button
      className={`bg-black text-white border border-p-purple font-semibold py-3 px-4 ${styleprops} rounded-sm`}
      {...rest}
    >
      {children}
    </button>
  );
}
