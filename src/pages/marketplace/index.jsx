import HouseCard from "@/components/landingpage/HouseCard";
import React from "react";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

export default function marketplace() {
  return (
    <section className="space-y-[3em]">
      <div className="space-y-[1em] ">
        <h2 className="text-white text-2xl font-bold">
          Hello, hope you are having a great day!
        </h2>
        <div className="md:w-[30%] lg:w-[20%] bg-white flex justify-between items-center w-full text-ptb-dark p-2">
          <div className="flex items-center space-x-2">
            <BiSortDown />
            <p>Sort by: Date</p>
          </div>
          <MdOutlineExpandMore />
        </div>
      </div>
      <div className="space-y-[4em] md:space-y-0 md:flex justify-between flex-wrap items-start md:gap-y-10 lg:gap-4">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </section>
  );
}
