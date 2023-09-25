/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./sidebar.css";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  // MdOutlineVideoLibrary,
} from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { PiVideoThin, PiThumbsUpLight } from "react-icons/pi";
import { BsClock } from "react-icons/bs";
import { GoVideo } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
//import { FaBattleNet } from "react-icons/fa";

async function getUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function SideBar() {
  const datos = await getUsers();
  const channel_list = [
    "Programación",
    "Midu Dev",
    "Carlos Azaustre",
    "Bluuweb",
    "Developero",
    "La cocina del código",
  ];

  const list_style =
    "flex lg:flex-row flex-col lg:text-sm cursor-pointer items-center w-full py-1 hover:bg-[#F2F2F2] rounded-xl transition-all lg:justify-start justify-center";
  const list_subscription =
    "lg:flex hidden items-center w-full py-1 hover:bg-[#F2F2F2] rounded-xl transition-all cursor-pointer";
  const icon_styles =
    "w-8 h-8 text-gray-800 lg:mr-5 flex items-center justify-center text-[1.6em] ";
  const live_icon =
    "w-8 h-8 text-red-500 text-[.7em] font-semibold flex items-center justify-center";
  const channels =
    "w-8 h-8 text-gray-800 lg:mr-5 flex items-center justify-center text-[1.6em] bg-gray-800 rounded-full overflow-hidden";

  return (
    <div className="lg:w-[250px] md:w-[100px] md:flex hidden h-[90vh]  flex-col fixed left-0 items-center top-[56px] ">
      <ul
        id="sidebar-content"
        className="w-full h-[100%] text-sm px-5 mt-2 font-base overflow-y-auto scroll-smooth transition-all"
      >
        <li className={`${list_style}`}>
          <span className={`${icon_styles}`}>
            <MdHomeFilled />
          </span>
          <h3 className="lg:text-sm text-[10px]"> Inicio</h3>
        </li>
        <li className={`${list_style} `}>
          <span className={`${icon_styles}`}>
            <MdOutlineSubscriptions />
          </span>
          <h3 className="lg:text-sm text-[10px]"> Shorts</h3>
        </li>
        <li className={`${list_style}`}>
          <span className={`${icon_styles}`}>
            <MdOutlineSubscriptions />
          </span>
          <h3 className=" lg:text-sm text-[10px]"> Suscripciones</h3>
        </li>
        <hr className="my-3 lg:flex hidden" />
        <li className={`${list_style}`}>
          <span className={`${icon_styles}`}>
            <GoVideo />
          </span>
          <h3 className="lg:text-sm text-[10px]"> Mi biblioteca</h3>
        </li>
        <li className={`${list_style} lg:flex hidden`}>
          <span className={`${icon_styles}`}>
            <VscHistory />
          </span>
          <h3 className="">Historial</h3>
        </li>
        <li className={`${list_style} lg:flex hidden`}>
          <span className={`${icon_styles} text-[1.8em]`}>
            <PiVideoThin />
          </span>
          <h3 className=""> Mis videos</h3>
        </li>
        <li className={`${list_style} lg:flex hidden`}>
          <span className={`${icon_styles}`}>
            <BsClock />
          </span>
          <h3 className=""> Ver más tarde</h3>
        </li>
        <li className={`${list_style} lg:flex hidden`}>
          <span className={`${icon_styles} text-[1.8em]`}>
            <PiThumbsUpLight />
          </span>
          <h3 className=""> Videos que me gus...</h3>
        </li>
        <li className={`${list_style} lg:flex hidden`}>
          <span className={`${icon_styles}`}>
            <IoIosArrowDown />
          </span>
          <h3 className=""> Mostrar más</h3>
        </li>
        <hr className="my-3 lg:flex hidden" />
        <h2 className="text-[1.1em] font-semibold mb-2 mt-5 lg:flex hidden">
          Suscripciones
        </h2>

        {datos.map((channel) => {
          return (
            <li
              key={channel.id}
              className={`${list_subscription} justify-between`}
            >
              <div className="flex items-center">
                <span className={`${channels} `}>
                  <img
                    src={channel.avatar}
                    alt="logo channel"
                    className="w-8 h-8 rounded-full"
                  />
                </span>
                <h3 className="lg:flex hidden">
                  {channel_list[channel.id - 1]}{" "}
                </h3>
              </div>
              <span className={`${live_icon}`}>((&bull;))</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
