import React from "react";
import Short_video from "./short_video";
import man from '@/img/jpg/man.png'
import art from '@/img/jpg/art.jpg'
import dragon from '@/img/jpg/dragon.jpg'
import draw from '@/img/jpg/draw.jpg'
import fish from '@/img/jpg/fish.jpg'

function Shorts_videos() {
  return (
    <section className="w-full min-h-[70vh] mt-2 mb-10 gap-4 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 
     ">

<Short_video  back={man}/>
<Short_video  back={art}/>
<Short_video  back={dragon}/>
<Short_video  back={draw}/>
<Short_video  back={fish}/>






    </section>
  );
}

export default Shorts_videos;
