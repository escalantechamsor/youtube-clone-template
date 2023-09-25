"use client";
import React from "react";
import CardContentOne from "./cardcontentone";
import Link from "next/link";
import { useChannelsInfo } from "@/context/page";

function VideoSuggestedOne() {
  const datos = useChannelsInfo();
  return (
    <div className="w-full min-h-[90vh] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:p-0 px-5">
      {datos.map((dato) => {
        return (
          <Link key={dato.id} href={`/${dato.id}`}>
            <CardContentOne dato={dato} />
          </Link>
        );
      })}
    </div>
  );
}

export default VideoSuggestedOne;
