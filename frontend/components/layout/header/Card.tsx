/** @format */

import { ShoppingBagIcon } from "@heroicons/react/outline";
import React from "react";

const Card = () => {
  return (
    <div className="flow-root">
      <a href="#" className="group -m-2 p-2 flex items-center">
        <ShoppingBagIcon
          className="flex-shink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
};

export default Card;
