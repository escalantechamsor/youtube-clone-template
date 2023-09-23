import Link from "next/link";
import React from "react";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { PiMicrophoneFill } from "react-icons/pi";
import { GoSearch } from "react-icons/go";

function Navbar() {
  return (
    <nav className="w-full fixed z-40 top-0 pt-1 left-0 h-[56px] bg-[#FFFFFF] text-gray-800 flex items-center justify-between px-[16px]">
      <div className="w-[169px] h-[40px]  flex items-center">
        <span className="flex items-center justify-center w-10 h-10 mr-5 cursor-pointer text-[1.3em]">
          <RxHamburgerMenu />
        </span>
        <div className="flex items-center">
          <span className="flex items-center justify-center w-10 h-10 text-[#FF0000] text-[2em]">
            <BsYoutube />
          </span>
          <h2 className="logo">YouTube</h2>
        </div>
      </div>

      <div className="lg:w-[700px] md:w-[300px] h-[40px] md:flex hidden justify-between">

        <div className="flex lg:w-[640px] h-[100%] rounded-[1.2em] overflow-hidden border-[1px] border-gray-300 ">
          <input 
          placeholder="Buscar"
          className="h-[40px] lg:w-[590px] md:w-[200px] outline-none px-8 text-gray-600 placeholder:text-sm bg-transparent" type="text" name="search" id="search" />
          <button className="w-[50px] h-[40px] hover:bg-[#F2F2F2] bg-[#F8F8F8] text-[1.3em] flex items-center justify-center border-l-[1px] border-gray-300">
            <GoSearch />
          </button>
        </div>

        <button className="w-[40px] h-[40px] rounded-full bg-[#f6f6f6] hover:bg-gray-200 text-[1.3em] flex items-center justify-center">
          <PiMicrophoneFill />
        </button>
      </div>
      <div className="w-[225px] h-[40px] bg-green-500 flex"></div>
    </nav>
  );
}

export default Navbar;
