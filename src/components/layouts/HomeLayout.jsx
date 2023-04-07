import React from "react";

export default function HomeLayout({ children }) {
  return (
    <main className="px-[1em] md:px-[2em] py-[3em] md:py-[5em] lg:py-[8em] space-y-[4em] md:space-y-[8em] lg:space-y-[12em] lg:w-[90%] mx-auto">
      {children}
    </main>
  );
}
