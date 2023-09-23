import Link from "next/link";
import React from "react";

function FetchingLink() {
  return (
    <nav className="w-full h-[10vh] bg-gray-100 flex items-center justify-between pr-10">
      <h2 className="text-[2em] bg-gray-200 w-[300px] h-[100%]  font-medium shadow-xl flex items-center justify-center">
        FETCHING DATA
      </h2>
      <ul className="flex text-[1.3em] font-medium text-gray-500">
        <Link href={"/fetching/local"}>
          <li className="ml-5 ">Local</li>
        </Link>

        <Link href={"/fetching/apicall"}>
          <li className="ml-5">API</li>
        </Link>
      </ul>
    </nav>
  );
}

export default FetchingLink;
