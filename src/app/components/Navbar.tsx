import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBehance } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";
import { LuUserCircle } from "react-icons/lu";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="sm:flex hidden h-20 w-full bg-white items-center justify-center fixed">
        <div className="w-95 flex justify-between h-full">
          <Link href="/" className="flex gap-2 flex-cener">
            <Image
              src="/logobe.png"
              width={100}
              height={30}
              className="object-contain"
              alt=""
            />
          </Link>

          <div className="flex items-center">
            <div className="flex items-center gap-4">
              <Link href="/">
                <BsBellFill className="text-black text-2xl" />
              </Link>
              <div className="bg-zinc-200 h-10 w-72 px-3 flex items-center rounded-full">
                <IoSearchOutline className="text-lg mx-1" />

                <input
                  type="text"
                  className="bg-transparent border-none outline-none"
                  placeholder="Search here.."
                />
              </div>
              <Link href="/" className="shadow py-2 px-5 rounded-xl border">
                {/* <GoPlusCircle className="text-25" /> */}
                <p className="font-semibold">Share Work</p>
              </Link>
              <Link href="/">
                <Image
                  src="/user3.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="sm:hidden flex h-20 w-full bg-white items-center justify-center text-black fixed shadow-md">
        <div className="flex w-88 justify-between">
          <Link href="/">
            <FaBehance className="text-black text-4xl" />
          </Link>
          <div className="flex items-center justify-center gap-6">
            {/* <a href="" className="py-3 px-7 rounded-full bg-black text-white text-sm">Use app</a> */}
            <Link href="/">
              <BsBellFill className="text-black text-2xl" />
            </Link>
            <Link href="/">
              <IoSearchOutline className="text-25" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Lower Mobile Navigation */}
      <nav className="sm:hidden flex h-24 items-center justify-center text-black fixed bottom-0 w-full bg-transparent">
        <div className="flex w-8/12 h-4/6 items-center justify-around rounded-xl bg-white/30 backdrop-blur-md shadow shadow-black/40">
          <Link href="/">
            <GoHomeFill className="text-25" />
          </Link>

          <Link href="/">
            <GoPlusCircle className="text-25" />
          </Link>
          <Link href="/">
            <Image
              src="/user3.jpg"
              className="w-8 h-8 object-cover rounded-full"
              width={100}
              height={100}
              alt=""
            />
          </Link>

          {/* <div className="flex items-center justify-center gap-6">
            <a href="" className="py-3 px-7 rounded-full bg-black text-white text-sm">Use app</a>
            <BsBellFill className="text-black text-2xl" />
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
