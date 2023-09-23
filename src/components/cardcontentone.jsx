"use client"
import React from "react";

function CardContentOne() {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col md:h-[50vh] h-[60vh] ">
      <div className="w-full  h-[60%] bg-gray-800 rounded-xl"></div>
      <div className="w-full h-[40%]  flex">
        <span className="w-9 h-9 mt-3 mr-3 bg-red-500 rounded-full"></span>
        <div className="w-[calc(100%-50px)] flex flex-col">
     <p id='title-video' className="py-3 font-normal text-[1.1em] text-gray-800">Some title about anything</p>
<p className="text-[.9em] text-gray-600">Chanel-Name</p>
<p className="text-[.9em] text-gray-600">34,5K visualizaciones &bull; hace 1 día</p>
        </div>
      </div>
    </div>
  );
}

export default CardContentOne;
