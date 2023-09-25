"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const Channels_Info = createContext();

export function useChannelsInfo() {
  return useContext(Channels_Info);
}

function GlobalContext({ children }) {
  const [channelInfo, setChannelInfo] = useState([]);
  


useEffect(() => {
getUsers();
}, [])
async function getUsers() {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    setChannelInfo(data.data)
  }


  return (
    <Channels_Info.Provider value={channelInfo}>
      {children}
    </Channels_Info.Provider>
  );
}

export default GlobalContext;
