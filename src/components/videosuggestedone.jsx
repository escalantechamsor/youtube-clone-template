import React from "react";
import CardContentOne from "./cardcontentone";


function VideoSuggestedOne({datos}) {
 
  return (
    <div className="w-full min-h-[90vh] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:p-0 px-5">
     {
      datos.map((dato)=>{
        return (
          <CardContentOne key={dato.id} dato={dato}/>
        )
      })
     }
      
    </div>
  );
}

export default VideoSuggestedOne;
