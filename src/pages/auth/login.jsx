import ButtonPurple, { ButtonPrimary } from "@/components/buttons/Buttons";
import Label from "@/components/tinyComp/Inputs";
import Image from "next/image";
import React, { useState } from "react";
import { BiShowAlt, BiHide } from "react-icons/bi";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="lg:flex justify-between items-start">
      <div className="bg-[#F4F6FE] px-[4em] lg:px-[6em] py-[3em] lg:py-[5em] md:w-[80%] lg:w-[45%] mx-auto space-y-[2em] ">
        <div className="text-p-purple font-semibold">LOGIN</div>

        <form action="" className="text-ptb-dark  space-y-4  ">
          <div className="flex flex-col space-y-2">
            <label htmlFor="Email"> Email address</label>
            <input type="email" className="p-3 outline-none" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password"> Password</label>
            <div className="bg-[#E1E4ED] p-3 flex items-center justify-between">
              <input
                type={showPassword ? "text" : "password"}
                className="w-[80%] bg-transparent outline-none"
              />
              <div onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <BiHide /> : <BiShowAlt />}
              </div>
            </div>
            <p className="text-p-purple font-semibold">Forgot Password?</p>
          </div>

          <ButtonPurple styleprops="w-full">LOG IN</ButtonPurple>
          <ButtonPrimary styleprops="bg-white w-full">
            <div>
              <p>Continue with Google</p>
            </div>
          </ButtonPrimary>
          <p>
            Don't have an account?
            <span className="text-p-purple font-bold">Sign up here</span>
          </p>
        </form>
      </div>

      <div className="hidden lg:flex flex-col justify-center items-center w-[45%] space-y-[2em]">
        <h2 className="text-p-purple">KEWAA ESTATE</h2>
        <Image
          width={400}
          height={400}
          src="/hero.svg"
          alt="hero image"
          className=" object-contain "
        />
        <p className="w-[60%] mx-auto text-center">
          Kewaa Provides a fractional investment platform for investors in
          real-estate on the blockchain.
        </p>
      </div>
    </div>
  );
}
