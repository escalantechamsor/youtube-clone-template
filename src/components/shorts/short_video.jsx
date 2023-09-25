import React from "react";

function Short_video() {
  return (
    <div className="h-[60vh] rounded-xl overflow-hidden flex flex-col">
      <div
        className="w-full h-[48vh] rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 
      shadow-md"
      ></div>
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
