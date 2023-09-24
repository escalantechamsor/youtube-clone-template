"use client";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./suggestions.css";
import "./accessScroll.js";

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
    "animales",
    "carreras",
    "perros",
    "gatos",
    "caravanas",
    "idiomas",
  ];
  const goLeft = () => {
    const btnLeft = document.querySelector("#scrolling_button-left");
    //const btnRight = document.querySelector('#scrolling_button-right');
    const scrollContainer = document.querySelector(".sugested_content");

    btnLeft.addEventListener("click", () => {
      scrollContainer.scrollLeft -= 50;
    });
  };
  const goRight = () => {
    const btnRight = document.querySelector("#scrolling_button-right");
    const scrollContainer = document.querySelector(".sugested_content");

    btnRight.addEventListener("click", () => {
      scrollContainer.scrollLeft += 50;
    });
  };

  return (
    <div className="bg-[#FFFFFF] h-[12vh]  flex items-center px-5  fixed top-[56px] right-0 lg:w-[calc(100vw-267px)] md:w-[calc(100vw-120px)] w-full overflow-x-auto z-20">
      <button
        id="scrolling_button-left"
        onClick={goLeft}
        className="text-[1.3em] directional absolute top-[3vh] left-4 w-10 h-10 hover:bg-gray-200 rounded-full justify-center flex items-center z-30"
      >
        <AiOutlineLeft />
      </button>
      <button
        onClick={goRight}
        id="scrolling_button-right"
        className="text-[1.3em] directional absolute top-[3vh] right-4 w-10 h-10 hover:bg-gray-200 rounded-full justify-center flex items-center z-30"
      >
        <AiOutlineRight />
      </button>
      <div className="w-[93%] mx-auto h-[100%] flex items-center justify-between overflow-x-auto sugested_content">
        {contenido.map((suggest, index) => {
          return (
            <button
              key={index}

              className="py-1 px-3 h-8 hover:shadow-md w-auto bg-[#F2F2F2] hover:bg-gray-200 rounded-lg mx-1 active:bg-gray-800 active:text-gray-100
            text-[.9rem] text-gray-700 transition-all justify-center flex items-center font-medium"
            >
              {suggest}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Suggestions;
