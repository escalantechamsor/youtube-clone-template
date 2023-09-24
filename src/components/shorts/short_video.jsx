/* eslint-disable @next/next/no-img-element */
import React from "react";
//import some from '../../img/jpg/dragon.jpg'
function Short_video() {
  const image_video_route = [
    {
      imagen1: "/img/jpg/art.jpg",
      imagen2: "/img/jpg/dragon.jpg",
      imagen3: "/img/jpg/fish.jpg",
      imagen4: "/img/jpg/man.jpg",
      imagen5: "/img/jpg/draw.jpg",
    },
  ];

  return (
    <div className="h-[60vh] rounded-xl overflow-hidden flex flex-col ">
      <div className="w-full h-[80%] rounded-xl bg-sky-500 ">
      
      </div>
      <div className="w-full h-[20%]  pt-2">
        <h2 className="text-base font-medium text-gray-800">
          Titulo del video short
        </h2>
        <p className="text-sm text-gray-700 mt-1">350 K de visualizaciones</p>
      </div>
    </div>
  );
}

export default Short_video;
