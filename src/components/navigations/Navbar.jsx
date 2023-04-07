import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { ButtonBlack } from "../buttons/Buttons";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const navlinkArr = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    {
      id: 2,
      link: "/marketplace",
      name: "Marketplace",
    },
    {
      id: 3,
      link: "/blog",
      name: "Blog",
    },
  ];
  return (
    <>
      <nav className="relative flex justify-between items-center p-6  md:px-8 lg:w-[90%] mx-auto ">
        <p className="text-p-purple font-semibold">KEWAA ESTATE</p>
        <div className="lg:hidden" onClick={() => setShowNav(!showNav)}>
          {showNav ? <IoMdClose /> : <RxHamburgerMenu />}
        </div>
        {showNav && (
          <div className="lg:hidden absolute  top-[5em] left-0 pt-[3em] pb-[5em] md:pb-[7em] text-center space-y-[1em] text-lg bg-black w-full text-pt-dark">
            {navlinkArr.map((nav) => {
              return (
                <NavlinkComponent
                  key={nav.id}
                  link={nav.link}
                  name={nav.name}
                  setShowNav={setShowNav}
                />
              );
            })}
            <ButtonBlack styleprops="w-[45%] md:w-[30%] lg:w-[20%]">
              Connect Wallet
            </ButtonBlack>
          </div>
        )}

        <div className="hidden w-[35%] lg:flex justify-between items-center">
          {navlinkArr.map((nav) => {
            return (
              <NavlinkComponent
                key={nav.id}
                link={nav.link}
                name={nav.name}
                setShowNav={setShowNav}
              />
            );
          })}
          <ButtonBlack styleprops="w-[45%] md:w-[40%]">
            Connect Wallet
          </ButtonBlack>
        </div>
      </nav>
    </>
  );
}

const NavlinkComponent = ({ link, name, setShowNav }) => {
  return (
    <div onClick={() => setShowNav(false)}>
      <Link href={link}>{name}</Link>
    </div>
  );
};
