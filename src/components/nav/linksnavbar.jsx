"use client";

import { GoSearch } from "react-icons/go";






function SearchNavBar() {
 

 
 
 
    return (
    <button
      onClick={()=> alert('Incluir barra de busqueda absoluta')}
      className="w-10 h-10 hover:bg-gray-200 flex md:hidden items-center justify-center rounded-full"
    >
      <GoSearch />
    </button>
  );
}

export default SearchNavBar;
