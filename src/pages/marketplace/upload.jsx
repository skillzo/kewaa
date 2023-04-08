import ButtonPurple from "@/components/buttons/Buttons";
import Label, { Select } from "@/components/tinyComp/Inputs";
import Image from "next/image";
import React, { useRef } from "react";

export default function Upload() {
  const inputRef = useRef(null);
  return (
    <>
      <form className="space-y-[2em] lg:w-[70%] mx-auto">
        <Label title="Title" />

        <div className="space-y-[2em] md:space-y-0 md:flex justify-between items-center">
          <Select />
          <Select />
        </div>
        <div className="space-y-[2em] md:space-y-0 md:flex justify-between items-center">
          <Select />
          <Select />
        </div>

        <div
          onClick={() => inputRef.current.click()}
          className="bg-[#270c4b] md:w-[90%] mx-auto pt-[3em] pb-[5em] flex justify-center border border-dashed"
        >
          <div className="flex flex-col items-center space-y-[2em]">
            <div className="text-center">
              <h2 className="text-2xl">Upload File</h2>
              <p>(Video should not be more than 300mb)</p>
            </div>

            <input type="file" hidden ref={inputRef} />
            <Image
              alt="upload Icon"
              src="/upload.svg"
              className="w-[40px] h-[40px]"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <ButtonPurple styleprops="w-[45%] md:w-[30%] lg:w-[20%] mx-auto">
            Upload Property
          </ButtonPurple>
        </div>
      </form>
    </>
  );
}
