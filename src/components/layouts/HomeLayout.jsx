import React from "react";

export default function HomeLayout({ children }) {
  return (
    <main className="px-[1em] md:px-[2em] py-[3em] md:py-[8em] space-y-[4em] md:space-y-[6em] lg:space-y-[8em]">
      {children}
    </main>
  );
}
