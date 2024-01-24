import React from "react";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import Link from "next/link";

const Cardcomponent = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden flex-col w-full justify-center items-center py-24">
        <div className="w-full justify-center flex flex-col items-center">
          <div className="flex items-center w-11/12 gap-12 h-20">
            <Link href="/">
              {/* <GoPlusCircle className="text-25" /> */}
              <p className="font-semibold">For You</p>
            </Link>
            <Link href="/">
              {/* <GoPlusCircle className="text-25" /> */}
              <p className="font-semibold">Following</p>
            </Link>
            <Link href="/">
              {/* <GoPlusCircle className="text-25" /> */}
              <p className="font-semibold">Discover</p>
            </Link>
          </div>
          <div className="flex w-95 justify-center flex-col lg:flex-row">
            <div className="flex flex-wrap w-full gap-6 justify-center">
              <div className="lg:w-75 w-100 rounded-lg overflow-hidden shadow-3xl">
                <Image
                  src="/card2.gif"
                  width={100}
                  height={100}
                  alt=""
                  className="w-full object-cover"
                />
                <div className="flex h-16 justify-between px-3">
                  <div className="flex items-center gap-2 h-full">
                    <Image
                      src="/user2.jpg"
                      width={100}
                      height={100}
                      alt=""
                      className="w-7 object-cover rounded-full"
                    />
                    <p className="text-sm">Aayush Kumar</p>
                  </div>
                  <div className="flex h-full items-center gap-2">
                    <p className="flex items-center text-xs">
                      <AiFillLike className="mx-1 text-zinc-700" />
                      312
                    </p>
                    <p className="flex items-center text-xs">
                      <IoEye className="mx-1 text-zinc-700" />
                      4312
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-75 w-100 rounded-lg overflow-hidden shadow-3xl">
                <Image
                  src="/card3.gif"
                  width={100}
                  height={100}
                  alt=""
                  className="w-full object-cover"
                />
                <div className="flex h-16 justify-between px-2">
                  <div className="flex items-center gap-2 h-full">
                    <Image
                      src="/user3.jpg"
                      width={100}
                      height={100}
                      alt=""
                      className="w-7 object-cover rounded-full"
                    />
                    <p className="text-sm">Aayush Kumar</p>
                  </div>
                  <div className="flex h-full items-center gap-2">
                    <p className="flex items-center text-xs">
                      <AiFillLike className="mx-1 text-zinc-700" />
                      312
                    </p>
                    <p className="flex items-center text-xs">
                      <IoEye className="mx-1 text-zinc-700" />
                      4312
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-75 w-100 rounded-lg overflow-hidden shadow-3xl">
                <Image
                  src="/card4.gif"
                  width={100}
                  height={100}
                  alt=""
                  className="w-full object-cover"
                />
                <div className="flex h-16 justify-between px-2">
                  <div className="flex items-center gap-2 h-full">
                    <Image
                      src="/user4.jpg"
                      width={100}
                      height={100}
                      alt=""
                      className="w-7 object-cover rounded-full"
                    />
                    <p className="text-sm">Aayush Kumar</p>
                  </div>
                  <div className="flex h-full items-center gap-2">
                    <p className="flex items-center text-xs">
                      <AiFillLike className="mx-1 text-zinc-700" />
                      312
                    </p>
                    <p className="flex items-center text-xs">
                      <IoEye className="mx-1 text-zinc-700" />
                      4312
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-75 w-100 rounded-lg overflow-hidden shadow-3xl">
                <Image
                  src="/card2.gif"
                  width={100}
                  height={100}
                  alt=""
                  className="w-full object-cover"
                />
                <div className="flex h-16 justify-between px-2">
                  <div className="flex items-center gap-2 h-full">
                    <Image
                      src="/user2.jpg"
                      width={100}
                      height={100}
                      alt=""
                      className="w-7 object-cover rounded-full"
                    />
                    <p className="text-sm">Aayush Kumar</p>
                  </div>
                  <div className="flex h-full items-center gap-2">
                    <p className="flex items-center text-xs">
                      <AiFillLike className="mx-1 text-zinc-700" />
                      312
                    </p>
                    <p className="flex items-center text-xs">
                      <IoEye className="mx-1 text-zinc-700" />
                      4312
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-full gap-6 justify-center">
              <div className="lg:w-75 w-100 rounded-lg overflow-hidden shadow-3xl">
                <Image
                  src="/card2.gif"
                  width={100}
                  height={100}
                  alt=""
                  className="w-full object-cover"
                />
                <div className="flex h-16 justify-between px-3">
                  <div className="flex items-center gap-2 h-full">
                    <Image
                      src="/user2.jpg"
                      width={100}
                      height={100}
                      alt=""
                      className="w-7 object-cover rounded-full"
                    />
                    <p className="text-sm">Aayush Kumar</p>
                  </div>
                  <div className="flex h-full items-center gap-2">
                    <p className="flex items-center text-xs">
                      <AiFillLike className="mx-1 text-zinc-700" />
                      312
                    </p>
                    <p className="flex items-center text-xs">
                      <IoEye className="mx-1 text-zinc-700" />
                      4312
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-75 w-100 rounded-lg overflow-hidden shadow-3xl">
                <Image
                  src="/card3.gif"
                  width={100}
                  height={100}
                  alt=""
                  className="w-full object-cover"
                />
                <div className="flex h-16 justify-between px-2">
                  <div className="flex items-center gap-2 h-full">
                    <Image
                      src="/user3.jpg"
                      width={100}
                      height={100}
                      alt=""
                      className="w-7 object-cover rounded-full"
                    />
                    <p className="text-sm">Aayush Kumar</p>
                  </div>
                  <div className="flex h-full items-center gap-2">
                    <p className="flex items-center text-xs">
                      <AiFillLike className="mx-1 text-zinc-700" />
                      312
                    </p>
                    <p className="flex items-center text-xs">
                      <IoEye className="mx-1 text-zinc-700" />
                      4312
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-75 w-100 rounded-lg overflow-hidden shadow-3xl">
                <Image
                  src="/card4.gif"
                  width={100}
                  height={100}
                  alt=""
                  className="w-full object-cover"
                />
                <div className="flex h-16 justify-between px-2">
                  <div className="flex items-center gap-2 h-full">
                    <Image
                      src="/user4.jpg"
                      width={100}
                      height={100}
                      alt=""
                      className="w-7 object-cover rounded-full"
                    />
                    <p className="text-sm">Aayush Kumar</p>
                  </div>
                  <div className="flex h-full items-center gap-2">
                    <p className="flex items-center text-xs">
                      <AiFillLike className="mx-1 text-zinc-700" />
                      312
                    </p>
                    <p className="flex items-center text-xs">
                      <IoEye className="mx-1 text-zinc-700" />
                      4312
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-75 w-100 rounded-lg overflow-hidden shadow-3xl">
                <Image
                  src="/card2.gif"
                  width={100}
                  height={100}
                  alt=""
                  className="w-full object-cover"
                />
                <div className="flex h-16 justify-between px-2">
                  <div className="flex items-center gap-2 h-full">
                    <Image
                      src="/user2.jpg"
                      width={100}
                      height={100}
                      alt=""
                      className="w-7 object-cover rounded-full"
                    />
                    <p className="text-sm">Aayush Kumar</p>
                  </div>
                  <div className="flex h-full items-center gap-2">
                    <p className="flex items-center text-xs">
                      <AiFillLike className="mx-1 text-zinc-700" />
                      312
                    </p>
                    <p className="flex items-center text-xs">
                      <IoEye className="mx-1 text-zinc-700" />
                      4312
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Card Component */}
      <div className="sm:hidden flex flex-col w-full items-center py-24 gap-4">
      <div className="flex items-center w-3/5 h-12 shadow-md bg-white/30 fixed backdrop-blur-sm rounded-full font-normal text-white tracking-wide text-sm">
            <p className="bg-blue-700 w-1/2 h-full flex items-center justify-center rounded-full">
              <Link href="/" className="">
              {/* <GoPlusCircle className="text-25" /> */}
              For You
            </Link>
            </p>
            <p className="w-1/2 h-full flex items-center justify-center rounded-full">
              <Link href="/" className="">
              {/* <GoPlusCircle className="text-25" /> */}
              Following
            </Link>
            </p>
          </div>
        <div className="w-11/12 flex flex-col items-center gap-10">
          <div className="w-full rounded-xl overflow-hidden shadow-3xl">
            <Image
              src="/card2.gif"
              width={100}
              height={100}
              alt=""
              className="w-full object-cover"
            />
            <div className="flex h-16 justify-between px-2">
              <div className="flex items-center gap-2 h-full">
                <Image
                  src="/user2.jpg"
                  width={100}
                  height={100}
                  alt=""
                  className="w-8 object-cover rounded-full"
                />
                <p>Aayush Kumar</p>
              </div>
              <div className="flex h-full items-center gap-2">
                <p className="flex items-center text-xs">
                  <AiFillLike className="mx-1 text-zinc-700" />
                  312
                </p>
                <p className="flex items-center text-xs">
                  <IoEye className="mx-1 text-zinc-700" />
                  4312
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-3xl">
            <Image
              src="/card3.gif"
              width={100}
              height={100}
              alt=""
              className="w-full object-cover"
            />
            <div className="flex h-16 justify-between px-2">
              <div className="flex items-center gap-2 h-full">
                <Image
                  src="/user3.jpg"
                  width={100}
                  height={100}
                  alt=""
                  className="w-8 object-cover rounded-full"
                />
                <p>Deepak Chowdry</p>
              </div>
              <div className="flex h-full items-center gap-2">
                <p className="flex items-center text-xs">
                  <AiFillLike className="mx-1 text-zinc-700" />
                  455
                </p>
                <p className="flex items-center text-xs">
                  <IoEye className="mx-1 text-zinc-700" />
                  7312
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-3xl">
            <Image
              src="/card4.gif"
              width={100}
              height={100}
              alt=""
              className="w-full object-cover"
            />
            <div className="flex h-16 justify-between px-2">
              <div className="flex items-center gap-2 h-full">
                <Image
                  src="/user4.jpg"
                  width={100}
                  height={100}
                  alt=""
                  className="w-8 object-cover rounded-full"
                />
                <p>Dev Aryan</p>
              </div>
              <div className="flex h-full items-center gap-2">
                <p className="flex items-center text-xs">
                  <AiFillLike className="mx-1 text-zinc-700" />
                  237
                </p>
                <p className="flex items-center text-xs">
                  <IoEye className="mx-1 text-zinc-700" />
                  9412
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcomponent;
