import ButtonPurple, { ButtonPrimary } from "@/components/buttons/Buttons";
import Label from "@/components/tinyComp/Inputs";
import Image from "next/image";
import React from "react";
import { BiShowAlt } from "react-icons/bi";
export default function Login() {
  return (
    <div className="lg:flex justify-between items-start">
      <div className="bg-[#F4F6FE] px-[4em] py-[3em] md:w-[80%] lg:w-[45%] mx-auto ">
        <div>LOGIN</div>

        <form action="" className="text-ptb-dark  space-y-4  ">
          <div className="flex flex-col space-y-2">
            <label htmlFor="Email"> Email address</label>
            <input type="email" className="p-3 outline-none" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password"> Password</label>
            <div className="bg-[#E1E4ED] p-3 flex items-center justify-between">
              <input type="password" className="w-[80%] bg-transparent" />
              <BiShowAlt />
            </div>
            <p className="text-p-purple font-semibold">Forgot Password?</p>
          </div>

          <ButtonPurple styleprops="w-full">LOG IN</ButtonPurple>
          <ButtonPrimary styleprops="bg-white w-full">
            <div>
              <p>Continue with Google</p>
            </div>
          </ButtonPrimary>
          <p>Don’t have an account? Sign up here.</p>
        </form>
      </div>

      <div className="hidden lg:flex justify-center items-center w-[45%]">
        <div>
          <Image
            width={400}
            height={400}
            src="/hero.svg"
            alt="hero image"
            className="w-full md:w-[40%] h-[400px] lg:w-[50%]  object-contain"
          />
        </div>
      </div>
    </div>
  );
}
