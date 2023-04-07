import React from "react";
import { IoIosInfinite } from "react-icons/io";

export default function Solutions() {
  return (
    <div className="space-y-[1em] md:w-[30%] lg:w-[25%]  ">
      <div className="flex items-center space-x-4">
        <p className="text-pt-dark  font-semibold text-xl lg:text-2xl ">
          Inclusivity
        </p>
        <div className="bg-[#BBEDF8] p-2 rounded-lg">
          <IoIosInfinite color="#545454" />
        </div>
      </div>
      <article className="md:text-sm lg:text-lg">
        We believe the blockchain can transform real-estate in Africa. Currently
        real estate is relatively illiquid as one can't readily convert it to
        cash or other assets. Kewaa can solve this!
      </article>
    </div>
  );
}
