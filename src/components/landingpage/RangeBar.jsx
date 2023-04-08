import React from "react";

export default function RangeBar({ color1, color2 }) {
  return (
    <div>
      <div
        className="w-full  rounded-full h-3.5 dark:bg-gray-700"
        style={{ backgroundColor: color1 }}
      >
        <div
          className="h-3.5 rounded-l-lg w-[70%]"
          style={{ backgroundColor: color2 }}
        ></div>
      </div>

      <div className="text-xs font-semibold flex justify-between px-1 mt-1">
        <p>70% Sold</p>
        <p>30% Remaining</p>
      </div>
    </div>
  );
}
