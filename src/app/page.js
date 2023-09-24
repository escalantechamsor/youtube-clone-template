import Suggestions from "@/components/content_suggestions/suggestions";
import Shorts_videos from "@/components/shorts/shorts_videos";
import SideBar from "@/components/sidebar/sidebar";
import VideoSuggestedOne from "@/components/videosuggestedone";
import { BsYoutube } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

async function getUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}
//API DE PEXELS:   ppWAHg7IL81CZEPARXS9l7xUdk7Bw75sbonsSwq16qTfBxkHhaMS3oMd

export default async function Home() {
  const datos = await getUsers();

  return (
    <section className="flex w-full min-h-[100vh]">
      <SideBar datos={datos} />
      <section
        className=" pt-[12vh] lg:w-[calc(100vw-267px)] md:w-[calc(100vw-120px)] w-full 
            lg:ml-[250px] md:ml-[100px] relative "
      >
        <Suggestions />
        <section className="w-full min-h-[150vh] pt-[12vh] px-5">
          <VideoSuggestedOne datos={datos} />

          <section className="w-full min-h-[85vh] border-t-4 border-b-4 border-gray-200 pt-5 mb-12 relative">
            <button className="w-9 h-9 flex items-center justify-center text-[1.5em] rounded-full hover:bg-gray-200
             absolute bottom-0 left-[47%] text-gray-600">
              <IoIosArrowDown />
            </button>
            <div className="flex items-center my-5">
              <span className="w-10 h-10 flex items-center justify-center mr-1 text-[#FF0000] text-[1.5em]">
                <BsYoutube />
              </span>
              <h3 className="flex items-center text-[1.3em] font-semibold">
                Shorts
              </h3>
            </div>
            <Shorts_videos />
          </section>

          <VideoSuggestedOne datos={datos} />
        </section>
      </section>
    </section>
  );
}
