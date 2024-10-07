"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

const NavBar = ({ scrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-7 shadow-lg w-full bg-white">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/assets/XTR-Logo.png" width="50" height="50" alt="Logo" />
          <h1 className="ml-3 text-xl font-semibold">Sturan Network</h1>
        </Link>
        {/* Hamburger icon untuk dimensi kecil */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={32} /> : <List size={32} />}
          </button>
        </div>
        {/* Menu besar untuk dimensi layar besar */}
        <div className="hidden md:flex gap-4 font-semibold">
          <Link href="/docs/getting-started">Docs</Link>
          <button onClick={() => scrollTo("foundation")}>Foundation</button>
          <Link href="/infrastructure/infrastructure">Use Case</Link>
        </div>
        <div className="hidden md:block">
          <Link
            href="/"
            target="_blank"
            className="text-l font-semibold p-2 bg-color-sky text-color-white rounded-lg hover:bg-opacity-85 duration-300"
          >
            Launch Apps
          </Link>
        </div>
      </div>
      {/* Menu kecil untuk dimensi layar kecil */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start gap-2">
          <Link href="/docs/getting-started" onClick={toggleMenu} className="w-full">Docs</Link>
          <button onClick={() => { scrollTo("foundation"); toggleMenu(); }} className="text-left w-full">Foundation</button>
          <button onClick={() => { scrollTo("useCase"); toggleMenu(); }} className="text-left w-full">Use Case</button>
          <div className="w-full text-center mt-2">
            <Link
              href="/"
              target="_blank"
              className="inline-block text-l font-semibold p-2 bg-color-sky text-color-white rounded-lg hover:bg-opacity-85 duration-300"
              onClick={toggleMenu}
            >
              Launch Apps
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;