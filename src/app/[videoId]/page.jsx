import Image from "next/image";
import React from "react";
import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { PiThumbsUpLight, PiShareFatLight, PiListPlus } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import Video_Rep_List from "@/components/reproduction_list/video_rep_list";

function OpenedVideo() {
  return (
    <section className="w-full min-h-[200vh] pt-[12vh] lg:px-8 px-3 flex gap-4 lg:flex-row flex-col">
      <div className="lg:w-[calc(100vw-450px)] w-full h-[140vh] rounded-t-xl overflow-hiden">
        <div className="w-full h-[70vh] bg-gradient-to-r from-red-700 to-gray-800 rounded-xl"></div>

        <div className="w-full h-[40vh] mt-4">
          <h2 className="text-[1.3em] ml-1">
            Las Audiciones a Ciegas más ICÓNICAS de La Voz.
          </h2>
          <div className="w-full min-h-[10vh] flex lg:flex-row flex-col lg:items-center lg:justify-between ">
            <div className="h-[100%] w-[330px]  flex items-center justify-between mb-2 lg:mb-0">
              <div className="h-[10vh] min-w-[180px]  flex items-center">
                <span className="w-10 h-10 rounded-full bg-gray-800 mr-2"></span>
                <div className="flex flex-col">
                  <h3 className="text-[1.1rem]">Channel name</h3>
                  <p className="text-[.75rem] text-gray-700">
                    2,3 k suscriptores
                  </p>
                </div>
              </div>

              <button
                className="flex items-center text-gray-100 px-5  justify-between rounded-[25px] bg-gray-900
               h-[6vh] text-[.8rem] lg:ml-2"
              >
                <span className="w-8 h-8 hidden items-center justify-center text-[1.5rem]">
                  <IoIosNotificationsOutline />
                </span>
                Suscribirme
                <span className="w-8 h-8 hidden items-center justify-center">
                  <IoIosArrowDown />
                </span>
              </button>
            </div>

            <div className="h-[100%] w-[450px] flex items-center justify-between">
              <div className="flex  h-[6vh]">
                <button className="bg-gray-200 rounded-l-[25px] flex items-center justify-between px-2 hover:bg-gray-300 text-[.8rem]">
                  <span className="w-8 h-8 flex items-center justify-center text-[1.5rem]">
                    <PiThumbsUpLight />
                  </span>
                  1,2 K
                </button>
                <button
                  className="bg-gray-200 rounded-r-[25px] pr-3 pl-2 border-l-[1px] border-gray-300 transition-all 
                text-[1.4rem] hover:bg-gray-300"
                >
                  <span className="w-8 h-8 flex items-center justify-center rotate-180">
                    <PiThumbsUpLight />
                  </span>
                </button>
              </div>

              <button
                className="flex items-center 0 px-2  rounded-[25px] bg-gray-200 hover:bg-gray-300 transition-all
               h-[6vh] text-[.9rem] "
              >
                <span className="w-8 h-8 flex items-center justify-center text-[1.5rem]">
                  <PiShareFatLight />
                </span>
                Compartir
              </button>

              <button
                className="flex items-center px-3  rounded-[25px] bg-gray-200 hover:bg-gray-300 transition-all
               h-[6vh] text-[.9rem] "
              >
                <span className="w-8 h-8 flex items-center justify-center text-[1.4rem]">
                  <PiListPlus />
                </span>
                Guardar
              </button>

              <button
                className="flex items-center justify-center   px-2  rounded-[25px] bg-gray-200 hover:bg-gray-300 transition-all
               h-[6vh] text-[1.5rem] "
              >
                <BsThreeDots />
              </button>
            </div>
          </div>
        </div>
      </div>




      <div className="lg:w-[420px] w-full bg-gray-200 flex flex-col pt-[8vh]">
       

   <Video_Rep_List />
   <Video_Rep_List />
   <Video_Rep_List />
   <Video_Rep_List />
   <Video_Rep_List />
   <Video_Rep_List />
   <Video_Rep_List />


      </div>
    </section>
  );
}

export default OpenedVideo;
