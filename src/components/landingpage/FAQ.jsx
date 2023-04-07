import React, { useState } from "react";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

export default function FAQ() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div onClick={() => setShowMore(!showMore)}>
      <div className="bg-[#29193dd9] flex justify-between items-center p-6 lg:p-8">
        <p className="text-sm md:text-base">Why should I join Kewaa?</p>
        <div onClick={() => setShowMore(!showMore)}>
          {showMore ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
        </div>
      </div>
      {showMore && (
        <div className="m-5 lg:mt-7 w-[95%] mx-auto text-pt-dark">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            unde iusto quidem commodi. Animi neque tenetur voluptatum ullam
            obcaecati officia, nulla, rem debitis dolorum, qui amet quae
            incidunt deleniti. Accusantium. Quaerat facere quasi, ipsum sit iure
            esse? Reiciendis possimus ad ipsum provident, ipsa architecto natus
            corporis reprehenderit unde dolore deleniti quaerat tempore
            voluptatibus magnam animi quia magni aperiam iure omnis.
          </p>
        </div>
      )}
    </div>
  );
}
