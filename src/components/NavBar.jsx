import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

function NavBar() {
  return (
    <header>
      <nav className="max-w-[35rem] mx-auto flex items-center justify-center gap-2 py-4 mb-11 bg-pc2">
        <FaGlobeAmericas className="text-white cursor-pointer" />
        <h1 className="font-medium text-white cursor-pointer">
          my travel journal
        </h1>
      </nav>
    </header>
  );
}

export default NavBar;
