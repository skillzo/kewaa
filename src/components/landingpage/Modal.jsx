import { useUser } from "@/store/context";
import React from "react";

export default function Modal() {
  const { setShowModal } = useUser();
  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed top-0 left-0 z-1 h-screen w-full backdrop-blur-sm flex justify-center items-center "
    >
      <div className="bg-white p-6 py-[6em] w-[80%] md:w-[60%] lg:w-[30%] mx-auto rounded-lg">
        <div className="text-center text-black">
          <p>Supported wallets here</p>
        </div>
      </div>
    </div>
  );
}
