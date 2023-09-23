import React from "react";

async function showUser() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const user = await res.json();
  return user;
}

async function UserData({ params }) {
  const details = await showUser();

  const users = details.filter((det) => det.id == params.id);
  const singleUser = users[0];
 

  return (
    <div className="w-full h-[100vh]">
      <div className="w-[300px] h-[260px] m-10 rounded-md shadow-xl overflow-hidden">
        <h2
          className="text-[1.5em] text-center bg-gray-700 text-gray-100 h-[10vh] flex 
items-center justify-center"
        >
          Detalles de usuario: {params.id}
        </h2>
        <div className="w-full h-[85%]  flex flex-col p-3  justify-center text-[1.1em] pb-7">
          <p className=""><strong>Card id:</strong> {singleUser.id}</p>
          <h3 className=" "> <strong>Name:</strong> {singleUser.name}</h3>
          <p className=""><strong>Username:</strong> {singleUser.username}</p>
          <p className=""><strong>Email:</strong> {singleUser.email}</p>
          <p className=""><strong>Phone:</strong> {singleUser.phone}</p>
         
        </div>
      </div>
    </div>
  );
}

export default UserData;
