import React from "react";

function Suggestions() {
  const contenido = [
    "Todo",
    "Música",
    "Noticias",
    "Programación",
    "Entrevistas",
    "Audiciones",
    "Juegos",
    "Javascript",
    "React",
    "Cocina",
    "desarrollo web",
  ];

  return (
    <div
      className="lg:w-[calc(100vw-267px)] md:w-[calc(100vw-120px)] w-full lg:ml-[250px]
    md:ml-[100px] h-[12vh] justify-center flex  overflow-x-auto items-center px-4 scroll-smooth fixed right-0 bg-[#FFFFFF]"
    >
      {contenido.map((suggest, index) => {
        return (
          <button
            key={index}
            className="py-1 px-3 h-8 w-auto hover:shadow-md flex bg-[#F2F2F2] hover:bg-gray-200 rounded-lg mx-1 
            font-semibold text-sm text-gray-700 transition-all"
          >
            {suggest}
          </button>
        );
      })}
    </div>
  );
}

export default Suggestions;
