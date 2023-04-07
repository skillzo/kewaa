import ButtonPurple from "@/components/buttons/Buttons";
import React, { useState } from "react";

export default function slug() {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );
  return (
    <section className="space-y-[3em] lg:space-y-[5em] lg:flex lg:space-x-[2em] items-start ">
      {/* <div></div> */}
      {/* <div>back</div> */}
      <div className="space-y-[2em] lg:w-[60%]">
        <img
          src={image}
          alt="slughouse"
          className=" object-cover w-full h-[250px] md:h-[500px] "
        />
        <div className="flex items-center space-x-4 md:space-x-6">
          <img
            src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-[150px] h-[75px] md:w-[200px] md:h-[100px] object-cover"
            onClick={(e) => setImage(e.target.src)}
          />
          <img
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-[150px] h-[75px] md:w-[200px] md:h-[100px] object-cover"
            onClick={(e) => setImage(e.target.src)}
          />
        </div>
      </div>
      <div className="space-y-[2em] lg:w-[30%]">
        <div>
          <h2 className="text-[#4F47E5] font-semibold text-2xl">
            River Oakland Apartment
          </h2>
          <p className="text-pt-dark">
            Amount per flat:{" "}
            <span className="text-[#4F47E5]"> 1ETH (1,600)</span>
          </p>
        </div>
        <p className="text-pt-dark">
          Kewaa enables fractional investment of rental real estate properties
          by utilizing the blockchain. Using an implementation of re-fungible
          token standard. every property is tokenized and represented as an NFT
          which is Kewaa enables fractional investment of rental real estate
          properties by utilizing the blockchain. Using an implementation of
          re-fungible token standard. every property is tokenized and
          represented as an NFT which is Kewaa enables fractional investment of
          rental real estate properties by utilizing the blockchain. Using an
          implementation of re-fungible token standard. every property is
          tokenized and represented as an NFT which is
        </p>

        <ul className="text-[#4F47E5] list-disc  px-[2em]">
          <li>Conducive</li>
          <li>Running water</li>
          <li>Nature</li>
          <li>Awesome</li>
        </ul>

        <div className="flex items-center text-sm space-x-4">
          <p>Location: Ikeja, Lagos</p>
          <p>No of flats: Four(4)</p>
          <p>Available Unit: One(1)</p>
        </div>

        <ButtonPurple styleprops="bg-[#4F47E5] border border-white w-[45%] md:w-[30%] lg:w-full">
          Buy Property
        </ButtonPurple>
      </div>
    </section>
  );
}
