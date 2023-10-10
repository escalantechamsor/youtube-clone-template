import Image from "next/image";
import React from "react";
//import art from '@/img/jpg/man.png'
function Short_video({ back }) {
  return (
    <div className="h-[60vh] rounded-xl overflow-hidden flex flex-col">
      <div
        className="w-full h-[48vh] rounded-xl  
      shadow-md overflow-hidden"
      >
        <Image
          className="rounded-xl w-full h-[48vh] object-fill"
          src={back}
          alt=""
          priority
        />
      </div>
      <div className="w-full h-[20%] pl-1 pt-3">
        <h2 className="text-[1rem] font-semibold text-gray-900">
          Titulo del video short
        </h2>
        <p className="text-[0.8rem] text-gray-700">350 K de visualizaciones</p>
      </div>
    </div>
  );
}

export default Short_video;
