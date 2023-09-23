import ApiCallComponent from "@/components/apicallcomponent";
import UserCard from "@/components/usercard";
import Image from "next/image";

async function getUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function getAlbums() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  /*  await new Promise((resolve) => setTimeout(resolve, 1000)); */
  return data;
}

async function ApiCalling() {
  const users = await getUsers();
  const albums = await getAlbums();
  console.log(users)
  return (
    <div className="w-full min-h-[100vh] ">
      <h1 className="text-[1.2em] w-[350px] bg-gray-900 text-gray-100 h-[50px] flex items-center justify-center">
        Llamada a API JSONPlaceholder
      </h1>

      <h3 className="mt-4 pl-6 text-[1.8em] text-green-800 font-medium">
        Llamada desde el cliente
      </h3>
      <div className="w-full min-h-[40vh] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 p-6 gap-4 mb-5">
        {albums.map((album) => {
          return <ApiCallComponent album={album} key={album.id} />;
        })}
      </div>

      <h3 className=" p-2 font-medium text-[1.8em] pl-7 text-red-800">
        Llamada desde el servidor
      </h3>
      <div className=" w-full min-h-[40vh] grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-5">
         {users.map((user) => {
         return <UserCard key={user.id} user={user} />;
        })} 
      </div>

<div className="w-[95%] mx-auto h-[80vh] bg-slate-300 my-5">
{users.map((user) => {
         return (
         <div key={user.id}>
       {/* <Image src={`https://reqres.in/img/faces/6-image.jpg`} alt="user profile" /> */}
         </div>

         );
        })}




</div>


    </div>
  );
}

export default ApiCalling;
