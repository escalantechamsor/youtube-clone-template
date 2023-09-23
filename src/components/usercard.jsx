/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

function UserCard({ user }) {
  return (
    <div
      className="m-2 bg-gray-50  flex md:flex-col lg:flex-row  shadow-lg
                 rounded-md items-center justify-around  py-3 min-h-[30vh] 
                 hover:scale-105 transition-all"
    >
      <img
        src={user.avatar}
        alt="Picture of the author"
        width={150}
        height={150}
        className="rounded-full"
      />
      <div className="flex font-semibold flex-col">
        <p className="font-semibold">{user.first_name}</p>
        <p className="font-semibold">{user.last_name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default UserCard;
