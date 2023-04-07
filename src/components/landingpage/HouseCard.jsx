import React from "react";
import ButtonPurple, { ButtonWhite } from "../buttons/Buttons";

export default function HouseCard() {
  return (
    <div className="bg-white pb-[1em] md:w-[45%] lg:w-[49%] md:text-sm lg:flex items-start lg:space-x-4 ">
      <div className="space-y-[2em] lg:w-[55%] ">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="heo3"
          className="w-full lg:h-[250px]"
        />

        <div className="text-ptb-light space-y-[1em] p-3">
          <div className="text-sm lg:text-xs space-y-[0.5em] lg:space-y-0 lg:flex items-center lg:space-x-4 ">
            <p>Location: Ikeja, Lagos</p>
            <p>No of flats: Four&#x28;4&#x29;</p>
            <p>Available Unit: One&#x28;4&#x29;</p>
          </div>
          <div className="text-black font-semibold lg:text-center">
            Amount per flat:
            <span className="text-p-purple font-semibold">
              1ETH &#x28;1,600&#x29;
            </span>
          </div>
        </div>
      </div>

      <div className="text-ptb-dark p-3 space-y-[1.5em] lg:w-[40%] lg:text-xs">
        <h2 className="text-p-purple font-semibold text-xl">
          River Oakland Apartment
        </h2>
        <p>
          Kewaa enables fractional investment of rental real estate properties
          by utilizing the blockchain. Using an implementation of re-fungible
          token standard. every property is tokenized and represented as an NFT
          which is Kewaa enables fractional investment of rental real estate
          properties by utilizing the blockchain. Using an implementation of
          re-fungible token standard. every property is tokenized and
          represented as an NFT which is
        </p>
        <div className="flex justify-between items-center">
          <ButtonPurple styleprops="w-[45%]">Buy Now</ButtonPurple>
          <ButtonWhite styleprops="w-[45%]">Read More</ButtonWhite>
        </div>
        <div>
          <div className="w-full  bg-[#B8B9B9] rounded-full h-3.5 dark:bg-gray-700">
            <div className="bg-[#1E1E1E] h-3.5 rounded-l-lg w-[70%]"></div>
          </div>

          <div className="text-xs font-semibold flex justify-between px-1 mt-1">
            <p>70% Sold</p>
            <p>30% Remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
}
