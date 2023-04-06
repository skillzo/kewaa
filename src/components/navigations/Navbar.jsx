import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex justify-between items-center p-6">
      <p className="text-p-purple font-semibold">KEWAA ESTATE</p>
      <div onClick={() => setShowNav(!showNav)}>
        {showNav ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>
    </nav>
  );
}
