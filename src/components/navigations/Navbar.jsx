import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { ButtonBlack } from "../buttons/Buttons";
import { useUser } from "@/store/context";
import Modal from "../landingpage/Modal";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const { setShowModal, showModal } = useUser();
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
        <p className="text-p-purple font-semibold">
          <Link href="/">KEWAA ESTATE</Link>
        </p>
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
            <ButtonBlack
              onClick={() => setShowModal(true)}
              styleprops="w-[45%] md:w-[30%] lg:w-[20%]"
            >
              Connect Wallet
            </ButtonBlack>
          </div>
        )}

        {/* pc navbar */}
        <div className="hidden w-[30%] lg:flex justify-between items-center">
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
          <ButtonBlack
            styleprops="lg:w-[35%] text-xs"
            onClick={() => setShowModal(true)}
          >
            Connect Wallet
          </ButtonBlack>
        </div>
      </nav>
      {showModal && <Modal />}
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
