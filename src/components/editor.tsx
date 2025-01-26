"use client";
import Image from "next/image";
import React from "react";

const EditorsPics = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16 mb-7 bg-white">
      <div>
        <h2 className="text-slate-800 font-bold text-lg mb-3">
          EDITOR&apos;S PICK
        </h2>
        <p className="text-gray-500 text-md">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="hidden sm:flex justify-center items-start gap-6 mt-6">
        <div className="relative">
          <Image src={"/editor/img3.png"} alt="men" width={350} height={500} />
          <div className="absolute bottom-4 left-4 w-44 h-14 bg-white flex items-center justify-center">
            <span className="text-slate-900 font-semibold text-xl">MEN</span>
          </div>
        </div>

        <div className="relative">
          <Image
            src={"/editor/img1.png"}
            alt="women"
            width={165}
            height={500}
          />
          <div className="absolute bottom-4 left-4 w-28 h-14 bg-white flex items-center justify-center">
            <span className="text-slate-900 font-semibold text-xl">WOMEN</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative">
            <Image
              src={"/editor/img2.png"}
              alt="accessories"
              width={160}
              height={242}
            />
            <div className="absolute bottom-4 left-4 w-32 h-14 bg-white flex items-center justify-center">
              <span className="text-slate-800 font-semibold text-xl">
                ACCESSORIES
              </span>
            </div>
          </div>

          <div className="relative">
            <Image
              src={"/editor/img4.png"}
              alt="kids"
              width={160}
              height={242}
            />
            <div className="absolute bottom-4 left-4 w-28 h-14 bg-white flex items-center justify-center">
              <span className="text-slate-800 font-semibold text-xl">KIDS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex flex-col items-center justify-center gap-6 mt-6">
        <div className="relative w-[90%] sm:w-full">
          <Image src={"/men.png"} alt="men" width={509} height={500} />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-slate-800 font-bold text-lg">MEN</span>
          </div>
        </div>

        <div className="relative w-[90%] sm:w-full ml-24">
          <Image src={"/women.png"} alt="women" width={240} height={500} />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-slate-800 font-bold text-lg">WOMEN</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-[90%] sm:w-full">
          <div className="relative ml-12">
            <Image
              src={"/accessories.png"}
              alt="accessories"
              width={240}
              height={242}
            />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-slate-800 font-bold text-lg">
                ACCESSORIES
              </span>
            </div>
          </div>

          <div className="relative ml-12">
            <Image src={"/kids.png"} alt="kids" width={240} height={242} />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-lg">KIDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPics;
