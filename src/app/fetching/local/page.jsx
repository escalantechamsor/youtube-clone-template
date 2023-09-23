import React from 'react'
import { datos } from '../../../../placeholder'
function LocalData() {
 
    return (
    <section className="w-full min-h-[100vh]">

<div className="w-full min-h-[80vh] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-10 bg-gray-100 mt-3">
{
  datos.map(dato=>{
    return(
      <div key={dato.id} className="col-span-1 lg:min-h-[40vh] h-[50vh] bg-gray-800 text-gray-100 rounded-lg p-2 flex flex-col justify-between">
        <p>Post: {dato.id}</p>
       <p>
        {dato.title}
        </p> 
        <p className="bg-gray-100 text-gray-800 p-2 rounded-sm">
          {dato.body}
        </p>
        

      </div>
    )
  })
}
</div>


  </section>
  )
}

export default LocalData