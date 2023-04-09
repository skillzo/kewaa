import React from "react";

export default function Label({ styleprops, type, title, ...rest }) {
  return (
    <div className={`flex flex-col space-y-2 `}>
      <label htmlFor="Title">{title}</label>
      <input
        type={type || "text"}
        className={`bg-[#270c4b] rounded-sm p-3 outline-none border border-slate-700 ${styleprops}`}
        {...rest}
      />
    </div>
  );
}

export function Select() {
  return (
    <div className="md:w-[48%]">
      <label htmlFor="Country">Country</label>
      <select name="Country" className=" bg-[#270c4b] w-full p-4 outline-0">
        <option value="Nigeria">Nigeria</option>
        <option value="Ghana">Ghana</option>
      </select>
    </div>
  );
}
