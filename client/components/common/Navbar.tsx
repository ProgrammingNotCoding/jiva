"use client";

import Image from "next/image";
import React from "react";
import { Github, LogIn, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="w-full px-6 py-2 bg-neutral-950 backdrop-blur-sm fixed top-0 left-0 border-b border-white/10 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image src="/logo.png" alt="Jiva Logo" width={90} height={90} />
          <span className="text-white font-semibold text-xl">Jiva</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-neutral-400"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden lg:flex items-center gap-10">
          {["Product", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-neutral-400 hover:text-white transition-colors duration-200 text-md"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex flex-row gap-6">
            <Link
              href="/login"
              className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link
              href={"/signup"}
              className="bg-white/80 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-white duration-200"
            >
              Sign up
            </Link>
          </div>
          <a
            href="https://github.com/ProgrammingNotCoding/jiva"
            target="_blank"
          >
            <Github className="w-6 h-6 text-neutral-500 hover:text-white duration-200" />
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-neutral-950 border-b border-white/10">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {["Product", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-neutral-400 hover:text-white transition-colors duration-200 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col gap-6 pt-4 border-t border-white/10">
              <a
                href="https://github.com/ProgrammingNotCoding/jiva"
                target="_blank"
                className="flex items-center gap-2 text-neutral-400 hover:text-white duration-200"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a>
              <Link
                href="/login"
                className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-lg"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="w-6 h-6" />
                Login
              </Link>
              <Link
                href={"/signup"}
                className="bg-white/80 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-white duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
