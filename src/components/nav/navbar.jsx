import React from "react";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { PiMicrophoneFill, PiVideoCameraLight } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import user_profile from "../../img/jpg/user_profile.jpg";
import SearchNavBar from "./linksnavbar";
import Link from "next/link";


async function Navbar() {
  
  return (
    <nav className="w-full fixed z-40 top-0 pt-1 left-0 h-[56px] bg-[#FFFFFF] text-gray-800 flex items-center justify-between px-[16px]">
      <div className="w-[169px] h-[40px]  flex items-center">
        <span className="flex items-center justify-center w-10 h-10 mr-5 cursor-pointer text-[1.3em]">
          <RxHamburgerMenu />
        </span>
        <Link href={"/"}>
          <div className="flex items-center hover:cursor-pointer">
            <span className="flex items-center justify-center w-10 h-10 text-[#FF0000] text-[2em]">
              <BsYoutube />
            </span>
            <h1 className="logo">YouTube</h1>
          </div>
        </Link>
      </div>

      <div className="lg:w-[700px] md:w-[300px] h-[40px] md:flex hidden justify-between">
        <div className="flex lg:w-[640px] h-[100%] rounded-[1.2em] overflow-hidden border-[1px] border-gray-300 ">
          <input
            placeholder="Buscar"
            className="h-[40px] lg:w-[590px] md:w-[200px] outline-none px-8 text-gray-600 placeholder:text-sm bg-transparent"
            type="text"
            name="search"
            id="search"
          />
          <button className="w-[50px] h-[40px] hover:bg-[#F2F2F2] bg-[#F8F8F8] text-[1.3em] flex items-center justify-center border-l-[1px] border-gray-300">
            <GoSearch />
          </button>
        </div>

        <button className="w-[40px] h-[40px] rounded-full bg-[#f6f6f6] hover:bg-gray-200 text-[1.3em] flex items-center justify-center">
          <PiMicrophoneFill />
        </button>
      </div>

      <div className="md:w-[150px] w-[170px]  h-[40px] relative flex items-center justify-between mx-1 text-[1.5em] ">
        <SearchNavBar />
        <button className="w-10 h-10 rounded-full  flex items-center justify-center hover:bg-gray-200">
          <PiVideoCameraLight />
        </button>
        <button className="w-10 h-10 rounded-full relative flex items-center justify-center text-[1.2em] hover:bg-gray-200 mr-1">
          <IoIosNotificationsOutline />
          <span className="absolute top-0 right-0 w-5 h-5 bg-[#CC0000] text-gray-100 text-[0.7rem] rounded-full flex items-center justify-center">
            9+
          </span>
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src={user_profile}
            width={40}
            height={40}
            alt="Picture of the user"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
