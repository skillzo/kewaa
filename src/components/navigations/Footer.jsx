import React from "react";
import { SiDiscord, SiTwitter, SiLinkedin } from "react-icons/si";
import { GrFacebook } from "react-icons/gr";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <div className="text-center space-y-[2em] lg:space-y-0 lg:flex justify-between items-start">
      <div>
        <p className="text-4xl text-p-purple font-bold ">Kewaa</p>
        <p className="text-pt-dark">2023</p>
      </div>
      <div className="space-y-[4em] lg:space-y-0 lg:flex justify-between items-start lg:w-[60%] md:text-sm">
        <div className="space-y-[2em]">
          <p className="font-semibold text-lg">COMPANY</p>
          <div className="text-pt-dark space-y-2">
            <p>About Us</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="space-y-[2em]">
          <p className="font-semibold text-lg">SUPPORT</p>
          <div className="text-pt-dark space-y-2">
            <p>Privacy and Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="space-y-[2em]">
          <p className="font-semibold text-lg">COMPANY</p>
          <div className="text-pt-dark space-y-2">
            <p>About Us</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="space-y-[2em]">
          <p className="font-semibold text-lg">CONTACT US</p>
          <div className="text-pt-dark space-y-2">
            <p>Support@yourdomain.com</p>
          </div>
        </div>
        <div className="space-y-[2em]">
          <p className="font-semibold text-lg text-pt-dark">Follow Us</p>
          <IconContext.Provider value={{ color: "#9747FF" }}>
            <div className="flex justify-center items-center space-x-4">
              <div className="border border-p-purple p-2">
                <SiDiscord />
              </div>
              <div className="border border-p-purple p-2">
                <SiTwitter />
              </div>
              <div className="border border-p-purple p-2">
                <SiLinkedin />
              </div>
              <div className="border border-p-purple p-2">
                <GrFacebook />
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
