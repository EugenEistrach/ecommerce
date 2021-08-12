/** @format */

import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

const Search = () => {
  return (
    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
      <span className="sr-only">Search</span>
      <SearchIcon className="w-6 h-6" aria-hidden="true" />
    </a>
  );
};

export default Search;
