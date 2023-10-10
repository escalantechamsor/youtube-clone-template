/* eslint-disable @next/next/no-img-element */
import React from "react";

function CardContentOne({ dato }) {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col md:h-[50vh] h-[60vh] cursor-pointer">
      <div className="w-full  h-[60%] bg-gray-800 rounded-xl overflow-hidden"></div>
      <div className="w-full h-[40%]  flex">
        <img
          src={dato.avatar}
          alt="logo channel"
          className="w-9 h-9 mr-3 mt-3 rounded-full"
        />
        <div className="w-[calc(100%-50px)] flex flex-col">
          <p
            id="title-video"
            className="py-3 font-normal text-[1.1em] text-gray-800"
          >
            Some title about anything
          </p>
          <p className="text-[.9em] text-gray-600">
            {dato.first_name} {dato.last_name}
          </p>
          <p className="text-[.9em] text-gray-600">
            34,5K visualizaciones &bull; hace 1 día
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardContentOne;
